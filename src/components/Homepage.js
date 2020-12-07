import React from "react";
import ColorsService from "../utils/api";
import Slider from "./Slider";

class Homepage extends React.Component {
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
        <Slider />
        <div>
          <h1>What is POLY?</h1>
          <h3>
            Poly is an app designed to help those with color blindness and / or
            reduced vision. Poly allows you to upload images or use the camera
            in order to translate the dominant color to the symbol created by
            ColorAdd that corresponds to it!
          </h3>
        </div>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <div className="form-group">
            <div>
              <label>Please Select an Image:</label>
              <input
                className="form-control-file"
                type="file"
                onChange={this.handleFileChange}
              />
            </div>
            <button className="button-upload">Upload</button>
          </div>
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

export default Homepage;
