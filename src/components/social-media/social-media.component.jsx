import React from "react";
import './social-media.styles.css'
import GoogleIcon from '../../assets/img/google-brands-solid-full.svg'
import FacebookIcon from '../../assets/img/facebook-brands-solid-full.svg'
import InstagramIcon from '../../assets/img/instagram-brands-solid-full.svg'
import TwitterIcon from '../../assets/img/x-twitter-brands-solid-full.svg'

const SocialMediaButtons = () => {
    return (
        <div className="sso-login">
            <div className="icon-circle"><img src={GoogleIcon} alt="Google" /></div>
            <div className="icon-circle"><img src={FacebookIcon} alt="Facebook" /></div>
            <div className="icon-circle"><img src={InstagramIcon} alt="Instagram" /></div>
            <div className="icon-circle"><img src={TwitterIcon} alt="Twitter" /></div>
        </div>
    )
}

export default SocialMediaButtons;