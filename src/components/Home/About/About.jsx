import style from "./About.module.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={style.section}>
      <h2 className={style.title}>{t("about.title")}</h2>
      <p className={style.description}>{t("about.p1")}</p>
      <p className={style.description}>{t("about.p2")}</p>
      <p className={style.description}>
        {t("about.p3")}
        <a
          className={style.link}
          href="https://www.youtube.com/@cheersacrossborders"
          target="_blank"
          rel="noreferrer"
        >
          Cheers Across Borders
        </a>
        {t("about.p4")}
      </p>
    </div>
  );
};

export default About;
