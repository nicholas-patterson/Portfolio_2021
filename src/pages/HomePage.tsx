import { useState } from "react";
import EmailPillar from "../components/EmailPillar";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SocialPillar from "../components/SocialPillar";
import MainContent from "../components/MainContent";
import Hero from "../components/Hero";
import About from "../components/About";



const HomePage = () => {
    const [toggleDark, setToggleDark] = useState(true);

    return (
        <>
        <Navbar setToggleDark={setToggleDark} toggleDark={toggleDark}/>
        <Layout toggleDark={toggleDark}>
            <MainContent>
                <Hero/>
                <About/> 
            </MainContent>
            <SocialPillar/>
            <EmailPillar/>
        </Layout>
        </>
    );
}


export default HomePage;