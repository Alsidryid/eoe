import style from "./Conclution.module.css";
import { useTranslation } from "react-i18next";
import image from "../../../images/conclution.jpg";

const Conclusion = () => {
  const { t } = useTranslation();
  return (
    <div className={style.section}>
      <h3 className={style.title}>{t("conclution.title")}</h3>
      <div className={style.box}>
        <img className={style.image} src={image} alt="man" />
        <p className={style.description}>{t("conclution.description")}</p>
      </div>

      <p className={style.farewell}>{t("conclution.farewell")}</p>
    </div>
  );
};
export default Conclusion;
