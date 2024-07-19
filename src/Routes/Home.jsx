import React from "react";
import { useState } from "react";
import "../Styles/Home.css";
import { useRef } from "react";
import { useEffect } from "react";
import DeskChair from "../Components/DeskChair";
import Desk from "../Components/Desk";



function Home(){

    

    return(
        <>
            <div className="home-page">
                <div className="desk-scene-container">


                    <div className="me">
                        <div className="head"></div>
                    </div>

                    <DeskChair></DeskChair>
                    <Desk></Desk>

                    <div className="monitorDiv">
                        <div className="monitors" id="leftMonitor"></div>
                        <div className="monitors" id="midMonitor"></div>
                        <div className="monitors" id="rightMonitor"></div>
                    </div>




                    
                </div>
            </div>
        </>
    )
}

export default Home