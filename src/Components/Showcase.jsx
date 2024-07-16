import PropTypes from "prop-types";
import "../Styles/Showcase.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";


function Showcase(props){
    return(
        <>
            <div className="showcaseDiv">
                <button id="leftArrow" className="arrowButton"><BiSolidLeftArrow /></button>
                <div className="videoDiv">
                    <video src="/assets/battleship.mp4"></video>
                </div>
                <button id="rightArrow" className="arrowButton"><BiSolidRightArrow /></button>
            </div>
        </>
    )
}
Showcase.propTypes = {
    video1: PropTypes.string,
    video2: PropTypes.string,
    video3: PropTypes.string
};

export default Showcase;