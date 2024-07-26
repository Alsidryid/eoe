import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageModal from "../ImageModal/ImageModal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../../redux/actions.js";
import picture1 from "../../../images/1.jpg";
import picture2 from "../../../images/2.jpg";
import picture3 from "../../../images/3.jpg";
import picture4 from "../../../images/4.jpg";
import picture5 from "../../../images/5.jpg";
import picture6 from "../../../images/6.jpg";
import picture7 from "../../../images/7.jpg";
import picture8 from "../../../images/8.jpg";
import picture9 from "../../../images/9.jpg";
import picture10 from "../../../images/10.jpg";
import picture11 from "../../../images/11.jpg";
import picture12 from "../../../images/12.jpg";
import style from "./Gallery.module.css";
import "./dots.css";

const images = [
  { src: picture1, alt: "Slide 1" },
  { src: picture2, alt: "Slide 2" },
  { src: picture3, alt: "Slide 3" },
  { src: picture4, alt: "Slide 4" },
  { src: picture5, alt: "Slide 5" },
  { src: picture6, alt: "Slide 6" },
  { src: picture7, alt: "Slide 7" },
  { src: picture8, alt: "Slide 8" },
  { src: picture9, alt: "Slide 9" },
  { src: picture10, alt: "Slide 10" },
  { src: picture11, alt: "Slide 11" },
  { src: picture12, alt: "Slide 12" },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modalOpen);
  const image = useSelector((state) => state.image);

  const handleImageClick = (imageSrc) => {
    dispatch(openModal(imageSrc));
  };

  return (
    <div className={style.section}>
      <Slider {...settings} className={style.sldr}>
        {images.map((image, index) => (
          <div key={index}>
            <div>
              <img
                onClick={() => handleImageClick(image.src)}
                className={style.img}
                src={image.src}
                alt={image.alt}
              />
            </div>
          </div>
        ))}
      </Slider>
      {modalOpen && (
        <ImageModal close={() => dispatch(closeModal())} image={image} />
      )}
    </div>
  );
};
export default Gallery;
