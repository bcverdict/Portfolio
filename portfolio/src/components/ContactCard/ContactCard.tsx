import {ContactCardDataWrapper} from "../../Wrappers/ContactDataWrapper/ContactCardDataWrapper";
import "./ContactCard.css";
function ContactCard(contactCardDataWrapper: ContactCardDataWrapper) {
    return (
        <div className="contact-card">
            <div className="left">
                <img alt={""} src={contactCardDataWrapper.getImagePath()}/>
            </div>
            <div className="right">
                <div>{contactCardDataWrapper.getName()}</div>
                <a href={contactCardDataWrapper.getLinkedIn()} target="_blank">LinkedIn</a>
                <a href={contactCardDataWrapper.getGithub()} target="_blank">Github</a>
            </div>
        </div>
    );
}

export default ContactCard;