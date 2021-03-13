import React, { SetStateAction } from 'react'
import "../styles/dark-mode.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


interface Props {
    toggleDark: boolean;
    setToggleDark: React.Dispatch<SetStateAction<boolean>>;
}

const DarkMode = ({toggleDark, setToggleDark}: Props) => {
    return (
        <div className="container">
            <div className={`container-switch ${toggleDark ? "container-switch--hide-moon" : "container-switch--show-moon"}`}></div>
            <FontAwesomeIcon className="container-sun" icon={faSun} onClick={() => setToggleDark(false)}/>
            <FontAwesomeIcon className="container-moon" icon={faMoon} onClick={() => setToggleDark(true)}/>
        </div>
    );
}


export default DarkMode;