import picture from "../../images/logo2.svg";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <a href="www.aid.com" className={style.logo}>
        <>
          <img className={style.image} src={picture} alt="phone" />
        </>
      </a>
    </div>
  );
};

export default Footer;
