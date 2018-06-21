import React from 'react';


function UserGreeting(props) {
  return (
    <p className="Greeting">Welcome back!</p>
  );
}

function GuestGreeting(props) {
  return (
    <p className="Greeting">Welcome! Please sign up or in.</p>
  );
}

function Greeting(props) {
  const LoggedIn = props.isLoggedIn;
  if (LoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// now use these small functions/tags to create a login control
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginclick = this.handleLoginclick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginclick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const LoggedIn = this.state.isLoggedIn;
    let button;

    if (LoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginclick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={LoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
