import EmailPillar from "../components/EmailPillar";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SocialPillar from "../components/SocialPillar";
import MainContent from "../components/MainContent";
import Hero from "../components/Hero";
import About from "../components/About";


const HomePage = () => {
    return (
        <>
        <Navbar/>
        <Layout>
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