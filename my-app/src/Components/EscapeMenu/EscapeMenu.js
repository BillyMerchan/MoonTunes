import {useState, useEffect} from 'react'
import gitLogo from './github.png'
import keebLegend from './keyboard_outline.svg'
import './EscapeMenu.css'
import { Outlet, Link } from 'react-router-dom'

const EscapeMenu = () => {

const [open, setOpen] = useState('False');
useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        //When escape is pressed set open to opposite
        setOpen(!open);
        console.log(open)
      }
    };

document.addEventListener('keydown', keyDownHandler);

return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  return(
    <div>
      {open && <div class="escapeMenuContainer">
                <div class="aboutLink">
                  <h1 class="aboutLink"> <Link to="/About"> About </Link> </h1>
                </div>

                <input type="range" class="volumeControl" min="0" max="100" value="50">volume
                </input>
                
                <a href="https://github.com/BillyMerchan/SpaceVis_HACKRPI2022">
                  <img src={gitLogo} alt="github.com/BillyMerchan/SpaceVis_HACKRPI2022" width="100" height="100" class="gitLink"/>
                </a>
                 <img src={keebLegend} alt="mapping of keyboard keys" width="900" height="900"/>
                 <h1 class="escPrompt">~Escape To Jump In~</h1>
       </div>
    }
      {!open && <div class="escapeMenuClose">
              <div class="aboutLink">
                  <h1 class="aboutLink"> <Link to="/About"> About </Link> </h1>
                </div>

                <input type="range" class="volumeControl" min="0" max="100" value="50">volume
                </input>

                <a href="https://github.com/BillyMerchan/SpaceVis_HACKRPI2022">
                  <img src={gitLogo} alt="github.com/BillyMerchan/SpaceVis_HACKRPI2022" width="100" height="100" class="gitLink"/>
                </a>
                 <img src={keebLegend} alt="mapping of keyboard keys" width="900" height="900"/>
                 <h1 class="escPrompt">~Escape To Jump In~</h1>
       </div>

      }
    </div>
  );

};
export default EscapeMenu;
