import React from "react";
import AuthService from "../utils/auth";
import { Link, withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const authService = new AuthService();
    authService
      .login(this.state.username, this.state.password)
      .then((response) => {
        console.log(response.data)
        this.props.setCurrentUser(response.data);
        localStorage.setItem("loggedInUser", response.data._id);
        this.props.history.push("/");
      });
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <div>
        <div className="login-box">
          <img src="images/eye.png" class="avatar" />
          <Form {...layout}>
            <Form.Item>
              <Input
                placeholder="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Input.Password
                placeholder="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Item>

            {/*  <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox className="checkbox">Remember me</Checkbox>
          </Form.Item> */}

            <Form.Item {...tailLayout}>
              <Button
                className="login-btn"
                type="primary"
                htmlType="submit"
                onClick={this.handleFormSubmit}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>

          <p className="loginParag">
            Don't have an account?
            <Link className="signA" to={"/signup"}>
              {" "}
              Signup
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
