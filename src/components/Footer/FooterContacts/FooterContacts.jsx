import instagram from "../../../images/instagram.svg";
import phone from "../../../images/phone.svg";

import youtube from "../../../images/youtube.svg";
import email from "../../../images/email.svg";

import { ReactSVG } from "react-svg";
import style from "./FooterContacts.module.css";

const FooterContacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.main_cont}>
        <a
          href="tel:+491623744934"
          className={style.link}
          target="_blank"
          rel="noreferrer"
        >
          <ReactSVG className={style.icon} src={phone} />
          <span className={style.text}>+491623744934</span>
        </a>
        <a
          href="mailto:sergio@devstudio.com "
          className={style.link}
          target="_blank"
          rel="noreferrer"
        >
          <ReactSVG className={style.icon} src={email} />
          <span className={style.text}>sergio@devstudio.com</span>
        </a>
      </div>
      <div className={style.sec_cont}>
        <a
          href="https://www.instagram.com/sergio_aus_prg_07_02/?utm_source=qr&igsh=MTJ0aGVxeXNnd3IwMQ%3D%3D"
          rel="noreferrer"
          className={style.link}
          target="_blank"
        >
          <ReactSVG className={style.icon} src={instagram} />
        </a>
        <a
          href="https://www.youtube.com/@cheersacrossborders"
          className={style.link}
          target="_blank"
          rel="noreferrer"
        >
          <ReactSVG className={style.icon} src={youtube} />
        </a>
      </div>
    </div>
  );
};

export default FooterContacts;
