import style from "./EoEApp.module.css";
import Header from "../Header/Header.jsx";
import Homepage from "../Home/Homepage/Homepage.jsx";
import Footer from "../Footer/Footer.jsx";
import StartImage from "../StartImage/StartImage.jsx";
import { useState, useEffect } from "react";

const EoEApp = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 3000); // Таймер для запуска анимации
    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);
  return (
    <div className={style.box}>
      {!fade && <StartImage fade={fade} />}
      {/* <StartImage fade={fade} /> */}
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default EoEApp;
