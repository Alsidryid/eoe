import style from "./Homepage.module.css";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Info from "../Info/Info.jsx";
import Video from "../Video/Video.jsx";

const Homepage = () => {
  return (
    <div className={style.space}>
      <div className={style.container}>
        <Hero />
        <About />
        <Gallery />
        <Info />
        <Video />
      </div>
    </div>
  );
};

export default Homepage;
