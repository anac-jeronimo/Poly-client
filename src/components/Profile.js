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
        <div>
          <h3 className="welcome">
            Welcome, {this.state.loggedInUser.username}
          </h3>
        </div>
        <div>
          <h4> See your library</h4>
          </div>   
        <div>
          <Scan />
        </div>  
      </div>
    ) : null;
  }
}

export default Profile;
