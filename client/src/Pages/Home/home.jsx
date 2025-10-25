import React from "react";
import useTheme from "../../Context/Usetheme";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

import "./Home.css";
import Typewriter from 'typewriter-effect';

const Home = () => {

  const { Theme, setTheme } = useTheme();

  const handletheme = () => {
    setTheme((prevstate) => (prevstate === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handletheme}>
          {
            Theme === 'light' ? (<BsMoonStarsFill size={30} />) : (<IoMdSunny size={30} />
            )
          }
        </div>
        <div className="conatiner home-content">
          <h2>👋Hi I'am a </h2>
          <h1>
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="home-button">
            <a
              href="https://api.whatsapp.com/send?phone=8512832018"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hire">
              Hire Me
            </a>
         
            <a href="../../../docs/Software developer.pdf" download="Software developer.pdf" className="btn btn-CV">My Resume</a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
