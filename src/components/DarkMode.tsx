import React from 'react'
import DarkModeCSS from "../styles/dark-mode.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";




const DarkMode = () => {
    return (
        <div className={DarkModeCSS.container}>
            <FontAwesomeIcon className={DarkModeCSS.sun} icon={faSun}/>
            <FontAwesomeIcon className={DarkModeCSS.moon} icon={faMoon}/>
        </div>
    );
}


export default DarkMode;