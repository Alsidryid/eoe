import picture from "../../images/logo2.svg";
import style from "./Footer.module.css";
import FooterContacts from "./FooterContacts/FooterContacts";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.all_info}>
        <div className={style.content}>
          <a href="www.aid.com" className={style.logo}>
            <img className={style.image} src={picture} alt="phone" />
          </a>
          <FooterContacts />
        </div>
        <p className={style.rights}>&copy; 2024 Empire of emotions</p>
      </div>
    </div>
  );
};

export default Footer;
