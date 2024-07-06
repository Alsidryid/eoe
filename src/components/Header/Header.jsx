import style from "./Header.module.css";
import Contacts from "./Contacts/Contacts.jsx";
import picture from "../../images/logo2.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.content}>
        <div className={style.logo_box}>
          <a href="www.aid.com" className={style.logo}>
            <img className={style.image} src={picture} alt="phone" />
          </a>
        </div>
        <Contacts />
      </div>
    </div>
  );
};

export default Header;
