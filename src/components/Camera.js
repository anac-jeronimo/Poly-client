import React from "react";
import Webcam from "react-webcam";
import ColorsService from "../utils/api";
const WebcamComponent = () => <Webcam />;

//getScreenshot();

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [colorCode, setColorCode] = React.useState(null);
  const [colorName, setColorName] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      width: 520,
      height: 310,
    });
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  if (imgSrc) {
    console.log(imgSrc);
    const colorsService = new ColorsService();

    colorsService.uploadFileCamera(imgSrc).then((response) => {
      colorsService
        .addImagesToLibrary(response.data.fileUrl, props.user._id)
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
  return (
    <div>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      <div className="scan-retun-results-cloudinary">
        {imgSrc ? (
          <div className="uploaded-img">
            <img src={imgSrc} />}
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
