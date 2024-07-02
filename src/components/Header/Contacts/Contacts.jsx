import style from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={style.cont}>
      <ul className={style.list}>
        <li className={style.item}>
          <a className={style.link} href="mailto:sergio@devstudio.com">
            sergio75543@gmail.com
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="tel:+380961111111">
            1234-4123-1232
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
