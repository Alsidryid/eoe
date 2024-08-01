import style from "./Contacts.module.css";
import { ReactSVG } from "react-svg";
import email from "../../../images/email.svg";
import phone from "../../../images/phone.svg";
const Contacts = () => {
  return (
    <div className={style.cont}>
      <ul className={style.list}>
        <li className={style.item}>
          <a
            href="mailto:sergio@devstudio.com"
            rel="noreferrer"
            className={style.link}
            target="_blank"
          >
            <ReactSVG className={`${style.icon} ${style.mail}`} src={email} />
          </a>
        </li>
        <li className={style.item}>
          <a
            className={style.link}
            href="tel:+491623744934"
            target="_blank"
            rel="noreferrer"
          >
            <ReactSVG className={`${style.icon} ${style.phone}`} src={phone} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
