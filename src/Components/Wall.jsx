import PropTypes from "prop-types";
import "../Styles/Wall.css";

function Wall(props){
    return(
        <>
            <div className="wallDiv" style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                transform: `rotate3d(0,1,0, ${props.angle}deg)`,
                marginLeft: `${props.moveRight}px`, 
                marginTop: `${props.moveDown}px`}}>

                <div className="wallContent">
                    {/* Checks to see if a component is passed, if true than render the component */}
                    {props.Component && <Component />}
                </div>
                <div className="wallSide" style={{marginLeft: `${props.width}px`}}></div>

            </div>
        </>
    )
}

Wall.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    moveRight: PropTypes.number.isRequired,
    moveDown: PropTypes.number.isRequired,
    angle: PropTypes.number.isRequired,
    Component: PropTypes.elementType
}

export default Wall;