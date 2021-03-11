import EmailPillarCSS from "../styles/email-pillar.module.css";


const EmailPillar = () => {
    return  (
        <div aria-orientation="vertical" className={EmailPillarCSS.container}>
            <a href="mailto:nicholaspatterson36@gmail.com">nicholaspatterson36@gmail.com</a>
        </div>
    );
}


export default EmailPillar;