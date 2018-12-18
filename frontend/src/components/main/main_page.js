import React from 'react';

import LoginFormContainer from '../session/login_form_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <h1>Chirper</h1>
        </nav>
        <div id="main">
          <div id="session-form-container">
            <p className="signup-text">Sign Up for Free</p>
            <LoginFormContainer />
          </div>
        </div>
        <footer>
          Copyright &copy; 2019 Chirper (just kidding)
        </footer>
      </div>
    );
  }
}

export default MainPage;