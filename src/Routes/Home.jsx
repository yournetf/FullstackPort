import React from "react";
import { useState } from "react";
import "../Styles/Home.css";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { useRef } from "react";
import { useEffect } from "react";




function Home(){

    const deskBlock = useRef(null);

    const [chairAnimationStatus, setChairAnimationStatus] = useState("chair");
    const [deskHeight, setDeskHeight] = useState('29.0');

    function handleLegsClick(){
        if(chairAnimationStatus === "chair"){
            setChairAnimationStatus("chair-animated");
        }
        else{
            setChairAnimationStatus("chair");
        }
    }

    function handleDeskAdjust(e){
        if(e.target.id === 'upArrow'){
            console.log('works');
            deskBlock.current.style.top = '-100px';
        }
        if(e.target.id === 'downArrow'){
            deskBlock.current.style.top = '500px'
        }
    }


    return(
        <>
            <div className="home-page">
                <div className="desk-scene-container">


                    <div className="me">
                        <div className="head"></div>
                    </div>


                    <div className="desk">
                        <div className="desktop"></div>
                        <div ref={deskBlock} className="desk-block">
                            <div className="desk-counter"></div>
                            <div className="desk-front">
                                <div className="desk-drawer"></div>
                                <div className="desk-buttons-container">
                                    <button id="upArrow" onClick={handleDeskAdjust}><TiArrowSortedUp /></button>
                                    <button id="downArrow" onClick={handleDeskAdjust}><TiArrowSortedDown /></button> 
                                    <p id="desk-height">{deskHeight}</p>  
                                </div>
                            </div>
                        </div>
                        <div id="desk-leg-left" className="desk-leg">
                            <div className="desk-leg-base"></div>
                            <div className="desk-big-extender"></div>
                            <div className="desk-small-extender"></div>
                        </div>
                        <div id="desk-leg-right" className="desk-leg">
                            <div className="desk-leg-base"></div>
                            <div className="desk-big-extender"></div>
                            <div className="desk-small-extender"></div>
                        </div>

                    </div>
                




                    <div id="chair" className={chairAnimationStatus}>
                            <div className="chair-head"></div>
                            <div className="chair-wing-left"></div>
                            <div className="chair-wing-right"></div>
                            <div className="chair-body"></div>
                            <div id="chair-arm-left" className="chair-arm"></div>
                            <div id="arm-rest-left" className="arm-rest"></div>
                            <div id="chair-arm-right" className="chair-arm"></div>
                            <div id="arm-rest-right" className="arm-rest"></div>
                            <div className="chair-cylinder">
                                <div className="little-cylinder"></div>
                                <div className="medium-cylinder"></div>
                                <div className="big-cylinder"></div>
                            </div>
                            <div className="chair-legs"  onClick={handleLegsClick}>
                                <div id="chair-leg-long-left" className="chair-leg-long">
                                    <div id="chair-leg-long-wheel-left" className="chair-leg-long-wheel"></div>
                                </div>
                                <div id="chair-leg-long-right" className="chair-leg-long">
                                    <div id="chair-leg-long-wheel-right" className="chair-leg-long-wheel"></div>
                                </div>

                            </div>
                    </div>


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