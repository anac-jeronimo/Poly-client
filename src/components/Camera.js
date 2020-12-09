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
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      width: 960,
      height: 540,
    });
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  if (imgSrc) {
    const colorsService = new ColorsService();

    colorsService.uploadFile(imgSrc).then((response) => {
      colorsService
        .addImagesToLibrary(response.data.fileUrl, props.user._id)
        .then(() => {
          console.log("is working");
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
      {imgSrc && <img src={imgSrc} />}
    </div>
  );
};

export default WebcamCapture;
