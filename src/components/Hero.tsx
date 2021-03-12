import React from 'react'
import HeroCSS from "../styles/hero.module.css";

export default function Hero() {
    return (
        <section className={HeroCSS.container}>
            <div className={HeroCSS.sectionNumber}>
                1
            </div>
            <div>
                <span>Hi, my name is</span>
            </div>
            <div>
                <h1>Nicholas Patterson.</h1>
            </div>
            <div>
                <h2>I build cool things for the web.</h2>
            </div>
            <div className={HeroCSS.copy}>
                <p>I'm a software developer based in Pennsylvania, specializing in frontend development. </p>
            </div>
                <button className={HeroCSS.button} type="button">Resume</button>
        </section>
    )
}
