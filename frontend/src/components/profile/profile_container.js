import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTweets: id => dispatch(fetchUserTweets(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
