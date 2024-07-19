import style from "./Hero.module.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className={style.hero}>
      <h1 className={style.title}>{t("hero.title")}</h1>
    </div>
  );
};

export default Hero;
