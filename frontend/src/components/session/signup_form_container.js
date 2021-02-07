import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: user => dispatch(signup(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);