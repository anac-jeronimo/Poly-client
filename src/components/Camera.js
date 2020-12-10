import React from "react";
import Webcam from "react-webcam";
import ColorsService from "../utils/api";
const WebcamComponent = () => <Webcam />;

//getScreenshot();
let imageUrl;

const videoConstraints = {
  width: 640,
  height: 360,
  facingMode: "user",
};

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [colorCode, setColorCode] = React.useState(null);
  const [colorName, setColorName] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      width: 640,
      height: 360,
    });
    setImgSrc(imageSrc);
  });

  if (imgSrc) {
    console.log("this is the image from the cam", imgSrc);
    //    let myImageSource = JSON.stringify(imgSrc);
    const colorsService = new ColorsService();
    colorsService
      .uploadFileCamera(imgSrc)
      .then((response) => {
        setImgSrc(null);
        console.log("this is the response from uploading the file", response);
        imageUrl = response.data.result.secure_url;
        const imageName = response.data.result.secure_url.substring(
          response.data.result.secure_url.lastIndexOf("/") + 1
        );
        return colorsService.getColor(imageName);
      })
      .then((response) => {
        setColorCode(response.data.imageUrl);
        setColorName(response.data.colorName);
      });
  }

  /*
  if (imgSrc) {
    console.log("this is the image from the cam", imgSrc);

    const colorsService = new ColorsService();

    colorsService.uploadFileCamera(imgSrc).then((response) => {
      console.log("this is the response from uploading", response.data);
      colorsService
        .addImagesToLibrary(response.data.result.url, props.user._id)
        .then(() => {
          const imageName = response.data.result.secure_url.substring(
            response.data.result.secure_url.lastIndexOf("/") + 1
          );
          colorsService.getColor(imageName).then((response) => {
            setColorCode(response.data.imageUrl);
            setColorName(response.data.colorName);
          });
        });
    });
  }
  */
  return (
    <div>
      <div className="webcam-div">
        <Webcam
          audio={false}
          height={360}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          videoConstraints={videoConstraints}
          className="video-camera"
        />
        <button className="photo-btn" onClick={capture}>
          Capture photo
        </button>
      </div>
      <div className="scan-retun-results-cloudinary cam-results-div">
        {imageUrl ? (
          <div className="uploaded-img">
            <img src={imageUrl} />
          </div>
        ) : null}
        <div>
          {colorCode ? (
            <div className="color-code-result">
              <div className="color-code-result-img">
                <img src={colorCode} />
              </div>
              <div className="color-code-result-name">{colorName}</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
