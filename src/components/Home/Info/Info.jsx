import style from "./Info.module.css";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className={style.section}>
      <ul className={style.main_list}>
        <li>
          <h3 className={style.title}>{t("info.title1")} </h3>
          <ul>
            <li>Выбираем ингредиенты для коктейля;</li>
            <li>Наливаем основу;</li>
            <li>Добавляем соки, сиропы, пюре, фрукты, ягоды, лёд;</li>
            <li>Получаем бодягу</li>
          </ul>
        </li>
        <li>
          <h3 className={style.title}>{t("info.title2")}</h3>
          <ul>
            <li>Бокалы или одноразовые стаканчики</li>
            <li>Дешовое винище</li>
            <li>Фрукты и ягоды</li>
            <li>Минеральная вода, кола, соки </li>
          </ul>
        </li>
        <li>
          <h3 className={style.title}>{t("info.title3")}</h3>
          <ul>
            <li>
              Открытая или закрытая площадка для проведения мастер-класса.
            </li>
            <li>Большой стол прямоугольной формы не менее 1,8 м в длину.</li>
            <li>Возможность набрать чистую воду.</li>
          </ul>
        </li>
        <li>
          <h3 className={style.title}>{t("info.title4")}</h3>
          <ul>
            <li>
              Мастера могут быть одеты в праздничную или классическую одежду или
              форменные платья и футболки без логотипов.
            </li>
            <li>
              Возможно изготовление брендированных заготовок или упаковки и
              разработка мастер-класса по теме мероприятия.
            </li>
            <li>Возможно мастер будет не трезвым</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Info;
