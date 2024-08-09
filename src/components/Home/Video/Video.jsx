import style from "./Video.module.css";
import mainVideo from "../../../video/main.mp4";
import video1 from "../../../video/video1.mp4";
import video2 from "../../../video/video2.mp4";
import video3 from "../../../video/video3.mp4";
import video4 from "../../../video/video4.mp4";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  };

  return (
    <div className={style.section}>
      <Slider {...settings} className={style.sldr}>
        {videos.map((video, index) => (
          <div key={index} className={style.video_box}>
            <video className={style.video} controls>
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Video;

// const Video = () => {
//   return (
//     <div className={style.section}>
//       <video className={style.video} controls>
//         <source src={mainVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };
// export default Video;
