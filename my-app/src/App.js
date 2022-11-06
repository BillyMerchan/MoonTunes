import './Styles/App.css';
import {Howl} from 'howler';
import EscapeMenu from './Components/EscapeMenu/EscapeMenu.js'

import Decending from "./sounds/decending_wavy.mp3"
import DrumSynth from "./sounds/drum_synth.mp3"
import DrumSynth2 from "./sounds/drums_decending.mp3"
import Flute from "./sounds/flute.mp3"
import Harp from "./sounds/harp.mp3"
import Piano_Reverb from "./sounds/piano_reverb.mp3"
import Retro from "./sounds/retro game.mp3"
import Tech1 from "./sounds/tech_bleep1.mp3"
import Tech2 from "./sounds/tech_bleep2.mp3"
import vocalA from "./sounds/vocal_A.mp3"
import vocalB from "./sounds/vocal_B.mp3"
import vocalC from "./sounds/vocal_C.mp3"
import vocalD from "./sounds/vocal_D.mp3"
import vocalE from "./sounds/vocal_E.mp3"
import vocalF from "./sounds/vocal_F.mp3"
import vocalG from "./sounds/vocal_G.mp3"
import wavy1 from "./sounds/wavy_ambient.mp3"
import wavy2 from "./sounds/wavy_ambient2.mp3"
import wavy3 from "./sounds/wavy.mp3"
import whistle from "./sounds/whistle.mp3"


function App() {

  document.addEventListener('keydown', function(event) {
    var AudioPlay;
    switch(event.key) {
      case 'q':
        AudioPlay = new Audio (vocalC);
        break;
      case 'w':
        AudioPlay = new Audio (vocalD);
        break;
      case 'e':
        AudioPlay = new Audio (vocalE);
        break;
      case 'r':
        AudioPlay = new Audio (vocalF);
        break;
      case 't':
        AudioPlay = new Audio (vocalG);
        break;
      case 'y':
        AudioPlay = new Audio (vocalA);
        break;  
      case 'u':
        AudioPlay = new Audio (vocalB);
        break;
      case 'i':
        AudioPlay = new Audio (wavy1);
        break;
      case 'o':
        AudioPlay = new Audio (wavy2);
        break;
      case 'p':
        AudioPlay = new Audio (wavy3);
        break;
      case 'a':
        AudioPlay = new Audio (Decending);
        break;
      case 's':
        AudioPlay = new Audio (Flute);
        break;
      case 'd':
        AudioPlay = new Audio (Harp);
        break;
      case 'f':
        AudioPlay = new Audio (whistle);
        break;
      case 'g':
        AudioPlay = new Audio (Tech1);
        break;
      case 'h':
        AudioPlay = new Audio (Tech2);
        break;
      case 'j':
        AudioPlay = new Audio (Piano_Reverb);
        break;
      case 'k':
        AudioPlay = new Audio (DrumSynth);
        break;
      case 'l':
        AudioPlay = new Audio (DrumSynth2);
        break;
    }

    if(AudioPlay) {
      AudioPlay.play();
    }

    //volume bar
    let volume = document.querySelector("#volume_control");
      volume.addEventListener("input", function(e) {
      AudioPlay.volume = e.currentTarget.value / 100;
    })
    
  });

  return (
    <div className="App">
      <header className="App-header">
      <EscapeMenu/>
      </header>
    </div>
  );
}

export default App;
