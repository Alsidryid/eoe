import style from "./Homepage.module.css";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Info from "../Info/Info.jsx";
const Homepage = () => {
  return (
    <div className={style.container}>
      <Hero />
      <About />
      <Gallery />
      <Info />
    </div>
  );
};

export default Homepage;
