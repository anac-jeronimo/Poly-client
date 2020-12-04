import axios from 'axios';

class ColorService {
    constructor() {
        let service = axios.create({
            baseUrl: `${process.env.REACT_APP_PROJECTS_API}/api`
        });
        this.service = service;
    } 
}

export default ColorService;