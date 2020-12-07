import React from "react";
import AuthService from "../utils/auth";
import { Link, withRouter } from "react-router-dom";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const authService = new AuthService();
    authService
      .signup(this.state.username, this.state.password)
      .then((response) => {
        this.props.history.push("/profile");
      })
      .catch(() => {});
  };

  render() {
    return (
      <div>
        <form className="login-box" onSubmit={this.handleFormSubmit}>
          <img src="eye.png" class="avatar" />
          {/* <label>Username:</label> */}
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          {/* <label>Password:</label> */}
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {/* <label>Email:</label> */}
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button className="login-btn">Signup</button>
        </form>
        <p className="loginP">
          Already have an account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Signup);
