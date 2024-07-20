import React from "react";
import "../Styles/Home.css";
import DeskChair from "../Components/DeskChair";
import Desk from "../Components/Desk";
import Monitor from "../Components/Monitor";

function Home(){

    return(
        <>
            <div className="home-page">
                <div className="desk-scene-container">


                    <div className="me">
                        <div className="head"></div>
                    </div>

                    <div className="setup-container">
                        <DeskChair></DeskChair>
                        <Desk></Desk>
                        <Monitor degreeAngle={45} marginLeft={20}></Monitor>
                        <Monitor degreeAngle={0} marginLeft={140}></Monitor>
                        <Monitor degreeAngle={135} marginLeft={260}></Monitor>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Home;