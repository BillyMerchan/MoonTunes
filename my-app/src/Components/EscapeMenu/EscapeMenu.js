import {useState, useEffect} from 'react'

import './EscapeMenu.css'

const EscapeMenu = () => {

const myFunction = () => {
    // your logic here
    console.log('pressed Esc');
  };


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
            <h1 class="aboutLink">About</h1>
       </div>
                 <a href="https://github.com/BillyMerchan/SpaceVis_HACKRPI2022">
                   <img src="github.png" alt="github.com/BillyMerchan/SpaceVis_HACKRPI2022" width="100" height="100" class="gitLink"/>
                 </a>
       </div>
    }
    </div>
  );

};
export default EscapeMenu;
