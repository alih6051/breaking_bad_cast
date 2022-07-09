import bgMusic from "../../soundtrack/bb-bg.mp3";

const BgMusic = () => {
  return <audio id="audio" src={bgMusic} autoPlay loop></audio>;
};

export default BgMusic;
