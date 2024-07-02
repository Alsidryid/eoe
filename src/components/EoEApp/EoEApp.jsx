import style from "./EoEApp.module.css";
import Header from "../Header/Header.jsx";
import Homepage from "../Home/Homepage/Homepage.jsx";
import Footer from "../Footer/Footer.jsx";

const EoEApp = () => {
  return (
    <div className={style.box}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default EoEApp;
