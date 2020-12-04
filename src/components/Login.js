import React from 'react';
import AuthService from '../utils/auth';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]: value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const authService = new AuthService();
        authService.login(this.state.username, this.state.password)
          .then((response) => {
              console.log(response)
              this.props.setCurrentUser(response.data);
              localStorage.setItem('loggedInUser', response.data._id);
              this.props.history.push('/profile');
          })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button>Login</button>
                </form>
                <p>Don't have an account? 
                    <Link to={"/signup"}> Signup</Link>
                </p>
            </div>
        )
    }
}

export default withRouter (Login);