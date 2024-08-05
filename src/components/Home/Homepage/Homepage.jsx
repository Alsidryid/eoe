import style from "./Homepage.module.css";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Info from "../Info/Info.jsx";
import Video from "../Video/Video.jsx";
import Conclusion from "../Conclusion/Conclusion.jsx";

const Homepage = () => {
  return (
    <div className={style.space}>
      <div className={style.container}>
        <Hero />
        <About />
        <Gallery />
        <Info />
        <Video />
        <Conclusion />
      </div>
    </div>
  );
};

export default Homepage;
