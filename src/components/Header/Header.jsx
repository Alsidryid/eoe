import style from "./Header.module.css";
import Contacts from "./Contacts/Contacts.jsx";
import picture from "../../images/logo2.svg";
import picture2 from "../../images/superLogo.svg";
import LangSelector from "./LengSelector/LengSelector.jsx";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.content}>
        <div className={style.logo_box}>
          <a href="www.aid.com" className={style.logo}>
            <img className={style.image} src={picture} alt="logo" />
            <img className={style.image_logo} src={picture2} alt="logo" />
          </a>
        </div>
        <Contacts />
        <LangSelector />
      </div>
    </div>
  );
};

export default Header;
