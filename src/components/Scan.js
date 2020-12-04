import React from "react";
import ColorsService from "../utils/api";

class Scan extends React.Component {
  state = {
    file: "",
    fileUrlOnCloudinary: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const colorsService = new ColorsService();
    const uploadData = new FormData();
    uploadData.append("file", this.state.file);
    colorsService.uploadFile(uploadData).then((response) => {
      console.log("Image uploaded");
      this.setState({
        fileUrlOnCloudinary: response.data.fileUrl,
      });
    });
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Image</label>
          <input type="file" onChange={this.handleFileChange} />
          <button>Upload</button>
        </form>
        {this.state.fileUrlOnCloudinary ? (
          <img src={this.state.fileUrlOnCloudinary} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Scan;