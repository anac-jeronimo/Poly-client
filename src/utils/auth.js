import axios from 'axios';

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: `https://polychromos.herokuapp.com/api`,
            withCredentials: true
        });
        this.service = service;
    }
    signup = (username, password) => {
        return this.service.post('/signup', {username, password});
    }

    login = (username, password) => {
        return this.service.post('/login', {username, password});
    }

    logout = () => {
        return this.service.post('/logout');
    }

    loggedin = () => {
        return this.service.get('/loggedin');
    }
}

export default AuthService;