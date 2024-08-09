import style from "./Conclution.module.css";
import { useTranslation } from "react-i18next";
import image from "../../../images/conclution.jpg";

const Conclusion = () => {
  const { t } = useTranslation();
  return (
    <div className={style.section}>
      <div className={style.box}>
        <img className={style.image} src={image} alt="man" />
        <div>
          <h3 className={style.title}>{t("conclution.title")}</h3>
          <p className={style.description}>{t("conclution.description1")}</p>
          <p className={style.description}>{t("conclution.description2")}</p>
          <p className={style.description}>{t("conclution.description3")}</p>
          <p className={style.farewell}>{t("conclution.farewell")}</p>
        </div>
      </div>
    </div>
  );
};
export default Conclusion;
