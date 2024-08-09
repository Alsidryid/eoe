import style from "./Video.module.css";
import ReactPlayer from "react-player";

import mainVideo from "../../../video/main.mp4";
import video1 from "../../../video/video1.mp4";
import video2 from "../../../video/video2.mp4";
import video3 from "../../../video/video3.mp4";
import video4 from "../../../video/video4.mp4";
import React from "react";
import Slider from "react-slick";

const videos = [
  { src: mainVideo, alt: "Slide 0" },
  { src: video1, alt: "Slide 1" },
  { src: video2, alt: "Slide 2" },
  { src: video3, alt: "Slide 3" },
  { src: video4, alt: "Slide 4" },
];

const Video = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: () => {
      document.querySelectorAll("video").forEach((video) => {
        console.log(video);
        video.pause();
      });
    },
  };

  return (
    <div className={style.section}>
      <Slider {...settings} className={style.sldr}>
        {videos.map((video, index) => (
          <div key={index} className={style.video_box}>
            <ReactPlayer
              className={style.video}
              url={video.src}
              controls
              height="auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Video;
