import axios from "axios";

class ColorsService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_PROJECTS_API}/api`,
    });
    this.service = service;
  }
  uploadFile(uploadData) {
    return this.service.post("/upload", uploadData);
  }
}
export default ColorsService;
