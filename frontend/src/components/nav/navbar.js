import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  render() {
    if (this.props.loggedIn) {
        return (
            <div>
                <h1>Chirper</h1>
                <div>
                    <Link to={'/tweets'}>All Tweets</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/new_tweet'}>Write a Tweet</Link>
                    <button onClick={this.logoutUser}>Sign Out</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Chirper</h1>
                <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        )
    }
  }
}

export default NavBar;
