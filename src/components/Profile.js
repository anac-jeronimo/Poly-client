import React from "react";
import Scan from "./Scan";
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
        <div className="welcome">
          <h3 >
            Welcome, {this.state.loggedInUser.username}
          </h3>
        </div>
        <div className="welcome">
          <h4> See your library</h4>
        </div>
        <div>
          <Slider uploads={this.state.loggedInUser.uploads} />
        </div>
       {/*  <div>
          <Scan />
        </div> */}
      </div>
    ) : null;
  }
}

export default Profile;
