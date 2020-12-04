import "./App.css";
import Signup from "./components/Signup";
import { Redirect, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Login from "./components/Login";
import React from "react";
import AuthService from "./utils/auth";
import { Button } from "reactstrap";

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
          localStorage.setItem("loggedInUser", response.data._id);
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
          {/* <Route exact path="/scan" component={Scan}/> */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/profile"  render= {
            () => {
              if(localStorage.getItem("loggedInUser")) {
                return <Profile />
              } else {
                return <Redirect to="/login" />
              }
            }
          } component={Profile} /> */}
          <Route
            path="/login-google"
            render={() => {
              window.location.href = `${process.env.REACT_APP_PROJECTS_API}/api/auth/google`;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
