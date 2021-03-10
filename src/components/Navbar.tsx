import React from 'react'
import NavbarCSS from "../styles/navbar.module.css";


const Navbar = () => {
    return (
        <div className={NavbarCSS.container}>
            <h1 className={NavbarCSS.title}>Logo Here</h1>
            <ul className={NavbarCSS.list}>
                <li>About</li>
                <li>Work</li>
                <li>Experienvce</li>
                <li>Resume</li>
            </ul>
        </div>
    )
}

export default Navbar;