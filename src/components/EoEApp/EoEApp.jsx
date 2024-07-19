import style from "./EoEApp.module.css";
import Header from "../Header/Header.jsx";
import Homepage from "../Home/Homepage/Homepage.jsx";
import Footer from "../Footer/Footer.jsx";
import StartImage from "../StartImage/StartImage.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startTimer } from "../../redux/actions.js";

const EoEApp = () => {
  const dispatch = useDispatch();

  const fade = useSelector((store) => store.fade);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(startTimer());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);
  return (
    <div className={style.box}>
      {!fade && <StartImage />}
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default EoEApp;
