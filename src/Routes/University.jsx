import { useState } from "react";
import Showcase from "../Components/Showcase.jsx";
import { universityVideoPaths } from "../DataFiles/UniversityPageData.js";
import { universityVideoNames } from "../DataFiles/UniversityPageData.js";

function University(){

    return(
    <>
        <Showcase arrayNames={universityVideoNames} arrayPaths={universityVideoPaths}></Showcase>
        <div className="chairSection">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>
    )
}


export default University;