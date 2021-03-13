import React, { useState, useEffect, SetStateAction } from 'react'
import NavbarCSS from "../styles/navbar.module.css";
import { Link, animateScroll as scroll  } from "react-scroll";
import DarkMode from "./DarkMode";

interface Props {
    toggleDark: boolean;
    setToggleDark: React.Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ toggleDark, setToggleDark}: Props) => {

    const [show, setShow] = useState(true);

    const scrollFunction = () => {
       if(window.scrollY > 180){
           setShow(false);
       }else {
           setShow(true);
       }
      }


    useEffect(() => {
       window.addEventListener("scroll", scrollFunction);

       return () => {
           window.removeEventListener("scroll", scrollFunction);
       }
    }, [])

    return (
        <header id="header" className={NavbarCSS.container} style={show ? {top: "0px"} : {top: "-80px"}}>
            <h1 className={NavbarCSS.title}>Nicholas Codes</h1>
            <nav>
                <ul className={NavbarCSS.list}>
                    <li>
                        <a onClick={() =>  scroll.scrollToTop()}>Home</a>
                    </li>
                    <li>
                        <Link to="about" smooth={true}>About</Link>
                    </li>
                    <li>
                        <Link to="experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="work">Work</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                    <li className={NavbarCSS.resume}>Resume</li>
                    <li>
                        <DarkMode toggleDark={toggleDark} setToggleDark={setToggleDark}/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;