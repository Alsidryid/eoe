import instagram from "../../../images/instagram.svg";
import facebook from "../../../images/facebook.svg";
import telegram from "../../../images/telegram.svg";
import location from "../../../images/location.svg";
import whatsapp from "../../../images/whatsapp.svg";
import { ReactSVG } from "react-svg";
import style from "./FooterContacts.module.css";

const FooterContacts = () => {
  return (
    <div className={style.contacts}>
      <a
        href="https://www.instagram.com/sergio_aus_prg_07_02/?utm_source=qr&igsh=MTJ0aGVxeXNnd3IwMQ%3D%3D"
        rel="noreferrer"
        className={style.link}
        target="_blank"
      >
        <ReactSVG className={style.icon} src={instagram} />
      </a>
      <a
        href="https://www.facebook.com/"
        className={style.link}
        target="_blank"
        rel="noreferrer"
      >
        <ReactSVG className={style.icon} src={facebook} />
      </a>
      <a
        href="https://web.telegram.org/k/"
        className={style.link}
        target="_blank"
        rel="noreferrer"
      >
        <ReactSVG className={style.icon} src={telegram} />
      </a>
      <a
        href="https://web.whatsapp.com/"
        className={style.link}
        target="_blank"
        rel="noreferrer"
      >
        <ReactSVG className={style.icon} src={whatsapp} />
      </a>
      <a
        href="https://maps.app.goo.gl/k6dqVvek8ap6fEBr6"
        className={style.link}
        target="_blank"
        rel="noreferrer"
      >
        <ReactSVG className={style.icon} src={location} />
      </a>
    </div>
  );
};

export default FooterContacts;
