import React from "react";
import "../Styles/Header.css";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
            <div className="header-background">
                <button id="home-button" className="header-buttons"><Link to='/'></Link></button>
                <a id="phatblack-link" href="https://phat-black.web.app/" target="_blank">  
                    <button id="phatblack-button" className="header-buttons"></button>   
                </a>
                <button id="university-button" className="header-buttons"></button>
                <button id="personal-button" className="header-buttons"></button>
            </div>
        </>
    )
}

export default Header