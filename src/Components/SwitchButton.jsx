import "../Styles/SwitchButton.css";
import { useState } from "react";
import PropTypes from "prop-types";

function SwitchButton(){

    const[buttonSetting, setButtonSetting] = useState("buttonSliderDay");

    function handleSliderClick(e){
        if(buttonSetting === "buttonSliderDay"){
            setButtonSetting("buttonSliderNight");
        }
        else{
            setButtonSetting("buttonSliderDay");
        }
    }

    return(
        <>
            <button className="switchButton">
                <div className="switchSlider" >
                    <button onClick={handleSliderClick} className="sliderContents" id={buttonSetting}></button>
                    <i className="sliderContents" id="leftIcon"></i>
                    <i className="sliderContents" id="rightIcon"></i>
                </div>
            </button>
        </>
    );
}

SwitchButton.PropTypes = {
}

export default SwitchButton;