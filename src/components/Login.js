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
        console.log(response);
        this.props.setCurrentUser(response.data);
        localStorage.setItem("loggedInUser", response.data._id);
        this.props.history.push("/profile");
      });
  };

 layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
 tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  
  Demo = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  render() {
  

    return (
      <div>
        <Form {...layout} name="basic" 
        initialValues={{ remember: true }} 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed} >

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p>
          Don't have an account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);

export default withRouter(Login);
