import React from 'react'
import HeroCSS from "../styles/hero.module.css";

export default function Hero() {
    return (
        <section className={HeroCSS.container}>
            <div className={HeroCSS.sectionNumber}>
                1
            </div>
            <div className={HeroCSS.sectionInfo}>
                <span>Hi, my name is</span>
                <h1>Nicholas Patterson.</h1>
                <h2>I build cool things for the web.</h2>
                <p>I'm a software developer based in Pennsylvania, specializing in frontend development. </p>
                <button className={HeroCSS.button} type="button">Resume</button>
            </div>
        </section>
    )
}
