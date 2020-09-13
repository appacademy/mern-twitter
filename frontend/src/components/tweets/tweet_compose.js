import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TweetBox from "./tweet_box";
import { composeTweet } from "../../actions/tweet_actions";

const TweetCompose = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let tweet = {
      text: text,
    };

    dispatch(composeTweet(tweet));
    setText("");
  };

  const update = (e) => {
    setText(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="textarea"
            value={text}
            onChange={update}
            placeholder="Write your tweet..."
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <br />
      <TweetBox text={text} />
    </div>
  );
};

export default TweetCompose;
