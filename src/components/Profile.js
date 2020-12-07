import React from "react";

class Profile extends React.Component {
  state = {
    loggedInUser: "",
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    this.setState({
      loggedInUser: user,
    });
  }
  render() {
    return this.state.loggedInUser ? (
      <div>
        <h3>Welcome {this.state.loggedInUser.username}</h3>
      </div>
    ) : null;
  }
}

export default Profile;
