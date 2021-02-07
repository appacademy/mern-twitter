import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_actions';
import TweetCompose from './tweet_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeTweet: data => dispatch(composeTweet(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetCompose);
