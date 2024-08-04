import React, { useState } from "react";
import "../Styles/Header.css";
import { Link } from 'react-router-dom';
import centralParkPic from "../assets/centralPark.png";
import cartoonStudioPic from "../assets/cartoon-studio.png";

function Header() {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle mouse enter and leave
  const handleButtonState = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className="header-background">
        <Link to="/FullstackPort">
          <button
            id="home-button"
            className="header-buttons"
            onMouseEnter={() => handleButtonState("home-button")}
            onMouseLeave={() => handleButtonState(null)}
          >
                <span className={activeButton === "home-button" ? "button-text" : "button-text-hidden"}>
                Home
                </span>
                <embed src={centralParkPic} alt="Central Park" className="header-icons" />
          </button>
        </Link>
        <a id="phatblack-link" href="https://phat-black.web.app/" target="_blank" rel="noopener noreferrer">
          <button
            id="phatblack-button"
            className="header-buttons"
            onMouseEnter={() => handleButtonState("phatblack-button")}
            onMouseLeave={() => handleButtonState(null)}
          >
            <span className={activeButton === "phatblack-button" ? "button-text" : "button-text-hidden"}>
              PhatBlack
            </span>
            <embed src={cartoonStudioPic} alt="Central Park" className="header-icons" />
          </button>
        </a>
        <Link to="/University">
          <button
            id="university-button"
            className="header-buttons"
            onMouseEnter={() => handleButtonState("university-button")}
            onMouseLeave={() => handleButtonState(null)}
          >
            <span className={activeButton === "university-button" ? "button-text" : "button-text-hidden"}>
              University
            </span>
          </button>
        </Link>
        <a href="https://frank-yournet-daily-trivia-daf88c18aee5.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <button
            id="personal-button"
            className="header-buttons"
            onMouseEnter={() => handleButtonState("personal-button")}
            onMouseLeave={() => handleButtonState(null)}
          >
            <span className={activeButton === "personal-button" ? "button-text" : "button-text-hidden"}>
              Personal
            </span>
          </button>
        </a>
      </div>
    </>
  );
}

export default Header;
