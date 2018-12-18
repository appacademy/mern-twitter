import axios from 'axios';

export const getTweets = () => {
  return axios.get('/api/tweets')
};

export const getUserTweets = id => {
  return axios.get(`/api/tweets/user/${id}`)
};