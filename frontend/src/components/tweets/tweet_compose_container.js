import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions';
import TweetCompose from './tweet_compose';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.user)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTweets: () => dispatch(fetchUserTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetCompose);
