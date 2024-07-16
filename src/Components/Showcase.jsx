import PropTypes from "prop-types";
import "../Styles/Showcase.css"
function Showcase(props){
    return(
        <>
            <div className="showcaseDiv">
                <p>{props.video1}</p>
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