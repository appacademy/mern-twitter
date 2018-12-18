import { RECEIVE_TWEETS, RECEIVE_USER_TWEETS } from '../actions/tweet_actions';
  
  const TweetsReducer = (state = { all: {}, user: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TWEETS:
        newState.all = action.tweets.data;
        return newState;
      case RECEIVE_USER_TWEETS:
        newState.user = action.tweets.data;
        return newState;
      default:
        return state;
    }
  };
  
  export default TweetsReducer;