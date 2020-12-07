import "./App.css";
import Signup from "./components/Signup";
import { Redirect, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Login from "./components/Login";
import React from "react";
import AuthService from "./utils/auth";
import Scan from "./components/Scan";
/* import { Button } from "reactstrap"; */
import Facts from "./components/Facts";
import ColorCodes from "./components/ColorCodes";
import ColorTheory from "./components/ColorTheory";
import Profile from "./components/Profile";
import Slider from "./components/Slider";
import Homepage from "./components/Homepage";
/* import "../public/stylesheet/ColorTheo.css";
import "../public/stylesheet/NavLogSign.css";
import "../public/stylesheet/Login.css";
import "../public/stylesheet/Facts.css"; 
import "../public/stylesheet/ColorCodes.css";
import "../public/stylesheet/Scan.css"; */

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };

  componentDidMount() {
    if (this.state.loggedInUser === null) {
      const authService = new AuthService();
      authService.loggedin().then((response) => {
        if (response.data._id) {
          this.setCurrentUser(response.data);
          localStorage.setItem("loggedInUser", JSON.stringify(response.data));
        } else {
          localStorage.removeItem("loggedInUser");
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <MyNavbar
          loggedInUser={this.state.loggedInUser}
          setCurrentUser={this.setCurrentUser}
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/scan" component={Scan} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                setCurrentUser={this.setCurrentUser}
                loggedInUser={this.state.loggedInUser}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => {
              if (localStorage.getItem("loggedInUser")) {
                return <Profile />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route
            path="/login-google"
            render={() => {
              window.location.href = `${process.env.REACT_APP_PROJECTS_API}/api/auth/google`;
            }}
          />
          <Route exact path="/colortheory" component={ColorTheory} />
          <Route exact path="/facts" component={Facts} />
          <Route exact path="/colorcodes" component={ColorCodes} />
        </Switch>
      </div>
    );
  }
}

export default App;
