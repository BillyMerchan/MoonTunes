import './Styles/App.css';
import {Howl} from 'howler';
import EscapeMenu from './Components/EscapeMenu/EscapeMenu.js'
import React from "react"

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

import com1 from "./Images/comet1.svg"
import com2 from "./Images/comet2.svg"
import pla1 from "./Images/planet1.svg"
import pla2 from "./Images/planet2.svg"

function App() {

const [isShowingCom1, setShowingCom1] = React.useState(false);
const [isShowingCom2, setShowingCom2] = React.useState(false);
const [isShowingPla1, setShowingPla1] = React.useState(false);
const [isShowingPla2, setShowingPla2] = React.useState(false);

  document.addEventListener('keydown', function(event) {
    var AudioPlay;
    switch(event.key) {
      case 'q':
        AudioPlay = new Audio (vocalC);
        if(!isShowingCom1){
          setShowingCom1(true);
          setTimeout(function(){setShowingCom1(false); }, 4000);
        }
        break;
      case 'w':
        AudioPlay = new Audio (vocalD);
        if(!isShowingCom2){
          setShowingCom2(true);
          setTimeout(function(){setShowingCom2(false); }, 4000);
        }
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
        if(!isShowingPla1) {
          setShowingPla1(true);
          setTimeout(function(){setShowingPla1(false);}, 4000);
        }
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
    
  });

  return (
    <div className="App">
      <header className="App-header">
      <EscapeMenu/>
        <div class="canvas">
          {isShowingCom1 ? (<img class="com1" src={com1}/>
          ) : (<p></p>)}
          {isShowingCom2 ? (<img class="com2" src={com2}/>
          ) : (<p></p>)}
          {isShowingPla1 ? (<img class="pla1" src={pla1}/>
          ) : (<p></p>)}
          {isShowingPla2 ? (<img class="pla2" src={pla2}/>
          ) : (<p></p>)}

        </div>
      </header>
    </div>
  );
}

export default App;
