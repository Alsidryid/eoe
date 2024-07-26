import style from "./Video.module.css";

const Video = () => {
  return (
    <div className={style.section}>
      <div className={style.video_box}>
        {/* <iframe
          className={style.player}
          src="https://www.youtube.com/embed/t0Uae9oyXzI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </div>
    </div>
  );
};
export default Video;
