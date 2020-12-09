import { Divider } from "antd";
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { withRouter } from "react-router-dom";
import AuthService from "../utils/auth";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

let items = [
  "images/painting.jpg",
  /* "images/colorblindness-exemple2.png" */
  "images/dogColorBlind.jpg",
  /* "images/Color-vision-deficiency.jpg" */
  "images/trees1.jpg",
];

const Slider = (props) => {
  // let uploads;
  if (props.uploads && props.uploads.length >= 3) {
    items = props.uploads;
    // const getUploads = () => {
    //   const authservice = new AuthService();
    //   authservice.loggedin().then((response) => {
    //     uploads = response.data.uploads;
    //   });
    // };
    // if (uploads.length == 0) {
    //   getUploads();
    // }
    // console.log(uploads);
  }
  console.log(items);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item}
      >
        <img src={item} />
        <CarouselCaption />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
export default withRouter(Slider);
