import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import picture1 from "../../../images/1.jpg";
import picture2 from "../../../images/2.jpg";
import picture3 from "../../../images/3.jpg";
import style from "./Gallery.module.css";

const Gallery = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.section}>
      <h2 className={style.title}> Наша галерея</h2>
      <Slider {...settings}>
        <div>
          <img className={style.img} src={picture1} alt="Slide 1" />
        </div>
        <div>
          <img className={style.img} src={picture2} alt="Slide 2" />
        </div>
        <div>
          <img className={style.img} src={picture3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};
export default Gallery;
