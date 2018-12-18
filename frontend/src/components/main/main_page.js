import React from 'react';

import LoginFormContainer from '../session/login_form_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <p>A Twitter Clone</p>
        <LoginFormContainer />
        <footer>
          Copyright &copy; 2019 Chirper
        </footer>
      </div>
    );
  }
}

export default MainPage;