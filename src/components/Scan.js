//import { Slider } from "antd";
import React from "react";
import ColorsService from "../utils/api";
import AuthService from "../utils/auth";
import Loader from "react-loader-spinner";
import WebcamCapture from "./Camera";

class Scan extends React.Component {
  state = {
    file: "",
    fileUrlOnCloudinary: "",
    colorCode: "",
    colorName: "",
    user: "",
    uploadingImage: false,
    gettingColorCode: false,
  };

  componentDidMount() {
    const authService = new AuthService();
    authService.loggedin().then((response) => {
      this.setState({ user: response.data });
    });
  }

  setColorResult(colorCode, colorName) {
    debugger;
    this.setState({
      colorCode: colorCode,
      colorName: colorName,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const colorsService = new ColorsService();
    const uploadData = new FormData();
    uploadData.append("file", this.state.file);
    this.setState({
      uploadingImage: true,
    });
    colorsService.uploadFile(uploadData).then((response) => {
      this.setState({
        uploadingImage: false,
        gettingColorCode: true,
      });
      colorsService
        .addImagesToLibrary(response.data.fileUrl, this.state.user._id)
        .then(() => {
          this.setState({
            fileUrlOnCloudinary: response.data.fileUrl,
            gettingColorCode: false,
          });
        });
      const imageName = response.data.fileUrl.substring(
        response.data.fileUrl.lastIndexOf("/") + 1
      );

      colorsService.getColor(imageName).then((response) => {
        this.setColorResult(response.data.imageUrl, response.data.colorName);
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
          ) : this.state.uploadingImage ? (
            <Loader type="Grid" color="#00BFFF" height={80} width={80} />
          ) : null}
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
            ) : this.state.gettingColorCode ? (
              <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            ) : null}
          </div>
        </div>
        <div>
          <WebcamCapture
            getColorResult={this.setColorResult}
            user={this.state.user}
          />
        </div>
      </div>
    );
  }
}

export default Scan;
