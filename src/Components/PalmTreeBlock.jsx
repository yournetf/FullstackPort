import "../Styles/PalmTreeBlock.css";
import PropTypes from "prop-types";

function PalmTreeBlock(props){
    return(
        <>
        <div className="palm-tree-block-div" style={{marginLeft: `${props.marginLeft}px`, marginTop: `${props.marginTop}px`, zIndex: `${props.zIndex}`}}>
            <div className="palm-tree-block" style={{width: `${props.logWidth}px`}}>
                <div className="palm-tree-top" style={{transform: `rotate3d(0,0,1, ${props.topRotationDegree}deg)`, width: `${props.topWidth}%`, height:`${props.width}`, marginLeft: `${props.topMarginLeft}%`}}></div>
                <div className="palm-tree-side"></div>
            </div>
        </div>
        </>
    )
}

PalmTreeBlock.propTypes={
    wholeRotation: PropTypes.number,
    marginLeft: PropTypes.number.isRequired,
    marginTop: PropTypes.number.isRequired,
    logWidth: PropTypes.number.isRequired,
    zIndex: PropTypes.number.isRequired,
    topRotationDegree: PropTypes.number,
    topMarginLeft: PropTypes.number,
    topWidth: PropTypes.number,
    rotationDegree: PropTypes.number
};

export default PalmTreeBlock;