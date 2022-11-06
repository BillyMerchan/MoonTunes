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
import pla3 from "./Images/planet3.svg"
import pla4 from "./Images/planet4.svg"
import pla5 from "./Images/planet5.svg"
import sta1 from "./Images/star1.svg"
import sta2 from "./Images/star2.svg"
import sta3 from "./Images/star3.svg"


function App() {

const [isShowingCom1, setShowingCom1] = React.useState(false);
const [isShowingCom2, setShowingCom2] = React.useState(false);
const [isShowingCom3, setShowingCom3] = React.useState(false);
const [isShowingCom4, setShowingCom4] = React.useState(false);
const [isShowingCom5, setShowingCom5] = React.useState(false);
const [isShowingCom6, setShowingCom6] = React.useState(false);
const [isShowingCom7, setShowingCom7] = React.useState(false);
const [isShowingPla1, setShowingPla1] = React.useState(false);
const [isShowingPla2, setShowingPla2] = React.useState(false);
const [isShowingPla3, setShowingPla3] = React.useState(false);
const [isShowingPla4, setShowingPla4] = React.useState(false);
const [isShowingPla5, setShowingPla5] = React.useState(false);
const [isShowingSta1, setShowingSta1] = React.useState(false);
const [isShowingSta2, setShowingSta2] = React.useState(false);
const [isShowingSta3, setShowingSta3] = React.useState(false);

  document.addEventListener('keydown', function(event) {
    var AudioPlay;
    switch(event.key) {
      case 'q':
        AudioPlay = new Audio (vocalC);
        if(!isShowingCom1){
          setShowingCom1(true);
          setTimeout(function(){setShowingCom1(false); }, 1200);
        }
        break;
      case 'w':
        AudioPlay = new Audio (vocalD);
        if(!isShowingCom2){
          setShowingCom2(true);
          setTimeout(function(){setShowingCom2(false); }, 700);
        }
        break;
      case 'e':
        AudioPlay = new Audio (vocalE);
        if(!isShowingCom3){
          setShowingCom3(true);
          setTimeout(function(){setShowingCom3(false); }, 700);
        }
        break;
      case 'r':
        AudioPlay = new Audio (vocalF);
        if(!isShowingCom4){
          setShowingCom4(true);
          setTimeout(function(){setShowingCom4(false); }, 700);
        }
        break;
      case 't':
        AudioPlay = new Audio (vocalG);
        if(!isShowingCom5){
          setShowingCom5(true);
          setTimeout(function(){setShowingCom5(false); }, 700);
        }
        break;
      case 'y':
        AudioPlay = new Audio (vocalA);
        if(!isShowingCom6){
          setShowingCom6(true);
          setTimeout(function(){setShowingCom6(false); }, 700);
        }
        break;
      case 'u':
        AudioPlay = new Audio (vocalB);
        if(!isShowingCom7) {
          setShowingCom7(true);
          setTimeout(function(){setShowingCom7(false);}, 700);
        }
        break;
      case 'i':
        AudioPlay = new Audio (wavy1);
        if(!isShowingPla1) {
          setShowingPla1(true);
          setTimeout(function(){setShowingPla1(false);}, 4000);
        }
        break;
      case 'o':
        AudioPlay = new Audio (wavy2);
        if(!isShowingPla2) {
          setShowingPla2(true);
          setTimeout(function(){setShowingPla2(false);}, 4000);
        }
        break;
      case 'p':
        AudioPlay = new Audio (wavy3);
        if(!isShowingPla3) {
          setShowingPla3(true);
          setTimeout(function(){setShowingPla3(false);}, 4000);
        }
        break;
      case 'a':
        AudioPlay = new Audio (Decending);
        if(!isShowingPla4) {
          setShowingPla4(true);
          setTimeout(function(){setShowingPla4(false);}, 4000);
        }
        break;
      case 's':
        AudioPlay = new Audio (Flute);
        if(!isShowingPla5) {
          setShowingPla5(true);
          setTimeout(function(){setShowingPla5(false);}, 4000);
        }
        break;
      case 'd':
        AudioPlay = new Audio (Harp);
        if(!isShowingSta1) {
          setShowingSta1(true);
          setTimeout(function(){setShowingSta1(false);}, 4000);
        }
        break;
      case 'f':
        AudioPlay = new Audio (whistle);
        if(!isShowingSta2) {
          setShowingSta2(true);
          setTimeout(function(){setShowingSta2(false);}, 4000);
        }
        break;
      case 'g':
        AudioPlay = new Audio (Tech1);
        if(!isShowingSta3) {
          setShowingSta3(true);
          setTimeout(function(){setShowingSta3(false);}, 4000);
        }
        break;
      case 'h':
        AudioPlay = new Audio (Tech2);
        if(!isShowingSta1) {
          setShowingSta1(true);
          setTimeout(function(){setShowingSta1(false);}, 4000);
        }
        break;
      case 'j':
        AudioPlay = new Audio (Piano_Reverb);
        if(!isShowingSta2) {
          setShowingSta2(true);
          setTimeout(function(){setShowingSta2(false);}, 4000);
        }
        break;
      case 'k':
        AudioPlay = new Audio (DrumSynth);
        if(!isShowingSta1) {
          setShowingSta1(true);
          setTimeout(function(){setShowingSta1(false);}, 4000);
        }
        break;
      case 'l':
        AudioPlay = new Audio (DrumSynth2);
        if(!isShowingSta2) {
          setShowingSta2(true);
          setTimeout(function(){setShowingSta2(false);}, 4000);
        }
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
          {isShowingCom3 ? (<img class="com3" src={com1}/>
          ) : (<p></p>)}
          {isShowingCom4 ? (<img class="com4" src={com2}/>
          ) : (<p></p>)}
          {isShowingCom5 ? (<img class="com5" src={com1}/>
          ) : (<p></p>)}
          {isShowingCom6 ? (<img class="com6" src={com2}/>
          ) : (<p></p>)}
          {isShowingCom7 ? (<img class="com7" src={com1}/>
          ) : (<p></p>)}
          {isShowingPla1 ? (<img class="pla1" src={pla1}/>
          ) : (<p></p>)}
          {isShowingPla2 ? (<img class="pla2" src={pla2}/>
          ) : (<p></p>)}
          {isShowingPla3 ? (<img class="pla3" src={pla3}/>
          ) : (<p></p>)}
          {isShowingPla4 ? (<img class="pla4" src={pla4}/>
          ) : (<p></p>)}
          {isShowingPla5 ? (<img class="pla5" src={pla5}/>
          ) : (<p></p>)}
          {isShowingSta1 ? (<img class="sta1" src={sta1}/>
          ) : (<p></p>)}
          {isShowingSta2 ? (<img class="sta2" src={sta2}/>
          ) : (<p></p>)}
          {isShowingSta3 ? (<img class="sta3" src={sta3}/>
          ) : (<p></p>)}
        </div>
      </header>
    </div>
  );
}

export default App;
