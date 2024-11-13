import React from "react";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";

export default function Item({ src, alt, song, setSong }) {
  return (
    <div className="song-item">
      <img src={src} alt={alt} className="poster" />
      <div className="play-icon" onClick={() => setSong(song)}>
        <PlayCircleFilledWhiteRoundedIcon
          sx={{ fontSize: { xs: "2rem", md: "4rem" } }}
        />
      </div>
    </div>
  );
}
