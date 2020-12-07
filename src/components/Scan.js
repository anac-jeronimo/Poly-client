//import { Slider } from "antd";
import React from "react";
import ColorsService from "../utils/api";

class Scan extends React.Component {
  state = {
    file: "",
    fileUrlOnCloudinary: "",
    colorCode: "",
    colorName: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const colorsService = new ColorsService();
    const uploadData = new FormData();
    uploadData.append("file", this.state.file);
    colorsService.uploadFile(uploadData).then((response) => {
      debugger;
      console.log("Image uploaded");
      this.setState({
        fileUrlOnCloudinary: response.data.fileUrl,
      });
      colorsService.getColor(response.data.fileUrl).then((response) => {
        this.setState({
          colorCode: response.data.imageUrl,
          colorName: response.data.colorName,
        });
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

export default Scan;
