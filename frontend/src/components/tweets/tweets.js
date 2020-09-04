import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import TweetBox from "./tweet_box";

const Tweets = ({ tweets, fetchTweets }) => {
  useEffect(() => {
    fetchTweets();
  }, []);

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
