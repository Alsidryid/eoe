import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>Коктейльный мастер-класс вместе от Sergio</h2>
      <p>
        Мастер-класс по приготовлению коктейлей или выездной бар привлечет к
        себе внимание на любом мероприятии. Наш мастер-класс станет открытием
        для тех, кто хочет впечатлить друзей и попробовать что-то новое.
      </p>
      <ul>
        <li>
          <p> Время на изготовление: 5-10 минут.</p>
        </li>
        <li>
          <p> Средняя проходимость: 40-50 чел. в час.</p>
        </li>
        <li>
          <p> Возраст участников: от 18-ти лет.</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
