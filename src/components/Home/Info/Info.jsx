import style from "./Info.module.css";
import { useTranslation } from "react-i18next";
import wiskey from "../../../images/wiskey.jpg";
import rum from "../../../images/rum.jpg";
import jin from "../../../images/jin.jpg";
import party from "../../../images/party.jpg";
import klass from "../../../images/klass.jpg";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className={style.section}>
      <ul className={style.main_list}>
        <li className={style.item}>
          <h3 className={style.title}>{t("info.title1")} </h3>
          <div className={style.box_des}>
            <p className={style.description}>{t("info.description1")} </p>
            <img className={style.image} src={wiskey} alt="wiskey" />
          </div>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>{t("info.title2")}</h3>
          <div className={style.box_des}>
            <p className={style.description}>{t("info.description2")} </p>
            <img className={style.image} src={jin} alt="jin" />
          </div>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>{t("info.title3")}</h3>
          <div className={style.box_des}>
            <p className={style.description}>{t("info.description3")} </p>
            <img className={style.image} src={rum} alt="rum" />
          </div>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>{t("info.title4")}</h3>
          <div className={style.box_des}>
            <p className={style.description}>{t("info.description4")} </p>
            <img className={style.image} src={klass} alt="party" />
          </div>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>{t("info.title5")}</h3>
          <div className={style.box_des}>
            <div className={style.group_des}>
              <p className={style.description}>{t("info.description5")} </p>

              <p className={style.description}>{t("info.description6")} </p>
              <p className={style.description}>{t("info.description7")} </p>
              <p className={style.description}>{t("info.description8")} </p>
            </div>
            <img className={style.image} src={party} alt="master class" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Info;
