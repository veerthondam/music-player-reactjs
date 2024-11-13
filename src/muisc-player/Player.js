import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Player({ song }) {
  console.log(song);
  return (
    <div className="player">
      <AudioPlayer
        autoPlay
        src={`${song}`}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
}
