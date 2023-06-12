import React from "react";
import profilePix from "../images/Profile-pix.png";
import linkedinButton from "../images/linkedin-button.png";
import emailButton from "../images/email-button.png";

function Info() {
    return(
        <div>
            <figure>
                <img src={profilePix} className="info--pix"/>
                <h3 className="info--name">Emmanuel Oluyege</h3>
                <p className="info--job">Full stack Software Engineer</p>
                <span className="link-wrapper">
                    <a className="info--web" href="https://www.noblestudeouz.com" target="_blank">
                        www.noblestudeouz.com
                    </a>
                </span>
                <main>
                    <a href="mailto:emmanueloluyege@gmail.com" target="_blank">
                        <img className="info--button1" src={emailButton} alt="Mail me" />
                    </a>
                    <a  href="https://www.linkedin.com/in/oluyege-emmanuel-a24769244/" target="_blank"> 
                        <img className="info--button2" src={linkedinButton} />
                    </a>
                </main>
            </figure>
        </div>
    )
}

export default Info;