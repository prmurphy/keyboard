import React, { useEffect } from "react";
import "./App.css";
import AudioPlayer from "./AudioPlayer";
function App() {
  const audioPlayer = AudioPlayer();

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = () => {
    audioPlayer.playNote("C4");
  };
  const handleClick2 = () => {
    audioPlayer.playNote("D4");
  };

  return (
    <div className="app-container">
      <button onClick={handleClick}>Play</button>
      <button onClick={handleClick2}>Play</button>
    </div>
  );
}

export default App;