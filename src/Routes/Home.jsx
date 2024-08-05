import React from "react";
import "../Styles/Home.css";
import DeskChair from "../Components/DeskChair";
import Desk from "../Components/Desk";
import Monitor from "../Components/Monitor";
import PalmTree from "../Components/PalmTree";
import Wall from "../Components/Wall";
import { useEffect } from "react";
import githubPic from "../assets/GithubPicture.png";
import codePic from "../assets/codePicture.png";
import linkedInPic from "../assets/linkedInPicture.png";

function Home(){

    useEffect(() => {
        document.body.style.zoom = "110%";
        window.scrollTo({
            top: 150,
            left: 140,
            behavior: 'smooth' // Optional: smooth scrolling
          });
      }, []);

    return(
        <>
            <div className="home-page">
                <div className="desk-scene-container">

                    
                    <Wall height={300} width={300} angle={45} moveDown={40}></Wall>
    
                    <div className="me">
                        <div className="head"></div>
                    </div>

                    <div className="setup-container">
                        <DeskChair></DeskChair>
                        <Desk></Desk>
                        <Monitor degreeAngle={45} marginLeft={0} imagePath={githubPic} link="https://github.com/yournetf"></Monitor>
                        <Monitor degreeAngle={0} marginLeft={120} imagePath={codePic} link="src/assets/Frank Yournet's Resume-1.png"></Monitor>
                        <Monitor degreeAngle={135} marginLeft={240} imagePath={linkedInPic} link=""></Monitor>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Home;