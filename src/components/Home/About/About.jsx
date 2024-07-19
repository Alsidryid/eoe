import style from "./About.module.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={style.section}>
      <h2 className={style.title}>{t("about.title")}</h2>
      <p>{t("about.p1")}</p>
      <ul>
        <li>
          <p> {t("about.p2")}</p>
        </li>
        <li>
          <p> {t("about.p3")}</p>
        </li>
        <li>
          <p> {t("about.p4")}</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
