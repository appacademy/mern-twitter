import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import TweetBox from "./tweet_box";
import { fetchTweets } from "../../actions/tweet_actions";
import { useDispatch, useSelector } from "react-redux";

const Tweets = () => {
  const tweets = useSelector((state) => Object.values(state.tweets.all));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch]);

  if (tweets.length === 0) {
    return <div>There are no Tweets</div>;
  } else {
    return (
      <div>
        <h2>All Tweets</h2>
        {tweets.map((tweet) => (
          <TweetBox key={tweet._id} text={tweet.text} />
        ))}
      </div>
    );
  }
};

export default withRouter(Tweets);
