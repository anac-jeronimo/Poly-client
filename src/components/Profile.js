import React from "react";
import Slider from "./Slider";

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
        <div>
          <h3>Welcome {this.state.loggedInUser.username}</h3>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    ) : null;
  }
}

export default Profile;
