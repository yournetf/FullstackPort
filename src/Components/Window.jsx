import "../Styles/Window.css"
import PropTypes from "prop-types";

function Window(props){

    const blinds = Array.from({length:25}, (_, index) => (
        <div key={index} id={`blind${index}`} className="blinds" style={{marginTop: `${(index * 5)}%`}}></div>
    ));

    return(
        <>
            <div className="windowDiv" style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                marginLeft: `${props.moveRight}px`, 
                marginTop: `${props.moveDown}px`}}>

                <div className="windowContent">
                    {blinds}
                    <div className="sun-moon"></div>
                </div>
                <div className="windowSide"></div>
            
            </div>
        </>
    )
}

Window.PropTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    moveRight: PropTypes.number.isRequired,
    moveDown: PropTypes.number.isRequired
}

export default Window;