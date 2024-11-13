import "./App.css";
import Album from "./muisc-player/Album";
import Header from "./muisc-player/Header";
import Player from "./muisc-player/Player";
import { useState } from "react";
function App() {
  const [song, setSong] = useState("main-poster.mp3");
  return (
    <>
      <Header />;
      <Album setSong={(updatedSong) => setSong(updatedSong)} />;
      <Player song={song} />
    </>
  );
}

export default App;
