import { useEffect } from "react";
import { createPortal } from "react-dom";
import style from "./ImageModal.module.css";

const modalRoot = document.getElementById("modal-root");

const ImageModal = ({ close, image }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    return () => document.removeEventListener("keydown", closeModal);
  });

  return createPortal(
    <div onClick={closeModal} className={style.overlay}>
      <div className={style.modal}>
        <img className={style.img} src={image} alt="" />
      </div>
    </div>,
    modalRoot
  );
};
export default ImageModal;
