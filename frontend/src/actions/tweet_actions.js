import { getTweets, getUserTweets } from '../util/tweet_api_util';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const receiveUserTweets = tweets => ({
  type: RECEIVE_USER_TWEETS,
  tweets
});

export const fetchTweets = () => dispatch => (
  getTweets()
    .then(tweets => dispatch(receiveTweets(tweets)))
    .catch(err => console.log(err))
);

export const fetchUserTweets = id => dispatch => (
  getUserTweets(id)
    .then(tweets => dispatch(receiveUserTweets(tweets)))
    .catch(err => console.log(err))
);