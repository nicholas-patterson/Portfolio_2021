import SocialPillarCSS from "../styles/social-pillar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

const SocialPillar = () => {
    return  (
        <div className={SocialPillarCSS.container}>
            <ul className={SocialPillarCSS.list}>
                <li><FontAwesomeIcon icon={faGithub}/></li>
                <li><FontAwesomeIcon icon={faLinkedin}/></li>
                <li><FontAwesomeIcon icon={faTwitter}/></li>
                <li><FontAwesomeIcon icon={faFacebook}/></li>
            </ul>
        </div>
    );
}


export default SocialPillar;