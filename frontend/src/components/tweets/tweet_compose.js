import React, { useState } from "react";
import TweetBox from "./tweet_box";

const TweetCompose = (props) => {
  const [text, setText] = useState('');
  const { composeTweet } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    let tweet = {
      text: text
    };

    composeTweet(tweet);
    setText("");
  };

  const update = (e) => {
    setText(e.currentTarget.value)
  }

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
