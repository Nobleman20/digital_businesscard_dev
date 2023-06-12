import React from "react";
import twittericon from "../images/Twitter-Icon.png";
import facebookicon from "../images/Facebook-Icon.png";
import instagramicon from "../images/Instagram-Icon.png";
import githubicon from "../images/GitHub-Icon.png";

function Footer() {
    return(
        <figure className="footer--icons">
            <a href="https://twitter.com/EOluyege" target="_blank">
                <img className="twitter--icon" src={twittericon} />
            </a>
            <a href="https://web.facebook.com/ibnoble20" target="_blank">
                <img className="facebook--icon" src={facebookicon} />
            </a>
            <a href="http://instagram.com/noblestudeouz" target="_blank">
                <img className="instagram--icon" src={instagramicon} />
            </a>
            <a href="https://github.com/Nobleman20" target="_blank">
                <img className="github--icon" src={githubicon} />
            </a>
        </figure>
    )
}

export default Footer;