import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.clearedErrors) {
      nextState.errors = [];
    }

    this.clearedErrors = !this.clearedErrors;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.state.errors.map((error, i) => (
  //         <li key={`error-${i}`} className="error-text">
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                className="login-input"
                placeholder="Handle"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                className="login-input"
                placeholder="Confirm Password"
              />
            <br/>
            <input type="submit" value="Submit" />
            {/* {this.renderErrors()} */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);