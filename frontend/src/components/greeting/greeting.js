import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = ({ handle }) => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {handle}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser.handle !== undefined ? personalGreeting(currentUser) : sessionLinks();
};


export default Greeting;
