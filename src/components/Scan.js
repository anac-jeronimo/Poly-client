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
      this.setState({
        fileUrlOnCloudinary: response.data.fileUrl,
      });
      const imageName = response.data.fileUrl.substring(
        response.data.fileUrl.lastIndexOf("/") + 1
      );

      colorsService.getColor(imageName).then((response) => {
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
      <div className="scan-return-div">
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
        <div className="scan-retun-results-cloudinary">
          {this.state.fileUrlOnCloudinary ? (
            <div className="uploaded-img">
              <img src={this.state.fileUrlOnCloudinary} />
            </div>
          ) : (
            <div>Uploading...</div>
          )}
          <div>
            {this.state.colorCode ? (
              <div className="color-code-result">
                <div className="color-code-result-img">
                  <img src={this.state.colorCode} />
                </div>
                <div className="color-code-result-name">
                  {this.state.colorName}
                </div>
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Scan;
