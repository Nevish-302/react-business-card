import Email from "../assets/Email.png" 
import LinkedIn from "../assets/LinkedIn.png"

export default function Contact () {
    return(
        <div className="contact">
        <div className="contact-name">
            Laura Smith
        </div>
        <div className="contact-job">
            Frontend Developer
        </div>
        <div className="contact-website">
            laurasmith.website
        </div>
        <div className="contact-buttons">
            <button className="contact-buttons-email">
                <img src= {Email} alt ="Email" ></img>
                <div className="contact-buttons-description" >
                Email
                </div>
            </button>
            <button className="contact-buttons-linkedin">
                <img src= {LinkedIn} alt ="LinkedIn" ></img>
                <div className="contact-buttons-description" >
                LinkedIn
                </div>
            </button>
        </div>

        </div>
    )
}   