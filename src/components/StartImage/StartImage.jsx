import { createPortal } from "react-dom";
import style from "./StartImage.module.css";
import { useEffect, useState } from "react";
import picture from "../../images/eoe.svg";
import { useSelector } from "react-redux";
const ImageRoot = document.getElementById("image-root");

const StartImage = () => {
  const fade = useSelector((store) => store.fade);

  const [className, setClassName] = useState(style.start_box);

  useEffect(() => {
    if (!fade) {
      setClassName(`${style.start_box} ${style.fade_out}`);
    } else {
      setClassName(style.start_box);
    }
  }, [fade]);
  return createPortal(
    <div className={className}>
      <div>
        <img className={style.image} src={picture} alt="Logo" />
      </div>
    </div>,
    ImageRoot
  );
};

export default StartImage;
