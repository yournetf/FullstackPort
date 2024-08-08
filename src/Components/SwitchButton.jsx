import "../Styles/SwitchButton.css";
import { useState } from "react";

function SwitchButton(){

    const[buttonSetting, setButtonSetting] = useState("night");

    return(
        <>
            <button className="switchButton">
                <div className="switchSlider">
                    <i></i>
                    <i></i>
                </div>
            </button>
        </>
    );
}
export default SwitchButton;