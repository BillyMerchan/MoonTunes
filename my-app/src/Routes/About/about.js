import './about.css';
import { AiFillHome } from 'react-icons/ai';
import gitLogo from './github.png'
import { Outlet, Link } from 'react-router-dom'

function About() {
  return (
    <div>

      <div className="Page">
        <div class= "homeico">
       <Link to="/"> <AiFillHome/></Link>
        </div>
          <a href="https://github.com/BillyMerchan/SpaceVis_HACKRPI2022">
            <img src={gitLogo} alt="github.com/BillyMerchan/SpaceVis_HACKRPI2022" width="100" height="100" class="gitLink"/>
          </a>
          <h1 class="header">  About Page</h1>
        <div className="Body">
          <p class="abt">Y'all not gonna lie, I'm writing this about page at
            ungodly hours after grinding this hackathon for the entire night.
            We decided to make this page as a homage to a similar website <b>Patatap</b>.
             Using React, we created a frontend representing space where each button press
            on your keyboard spawns a new star or planet coupled with an audio bit, each of
            which we chopped and tuned ourselves.
            With a flurry of keystrokes you're able to make your very own
            cosmic euphony! This program was made by two RPI sophmore CS students in
            24 hours for HACKRPI22, hope y'all can enjoy fiddling around and make
            sure to check out our githubs down below for more future projects!
          </p>
        </div>
        <div class="ourLinks">
        <a href="https://github.com/BillyMerchan"><h1><u>BillyMerchan</u></h1></a>
        <a href="https://github.com/dliang3"><h1><u>dliang3</u></h1></a>
      </div>
      </div>
    </div>
  );
}

export default About;
