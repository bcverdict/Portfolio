import {useEffect, useState} from "react";
import AppError from "../../Errors/AppError";
import ElementFactory from "../../Factories/ElementFactory";
import "./Contact.css"

function Contact(){

    const [contactCardContent, setContactCardContentContent] = useState<JSX.Element>(ElementFactory.CreateEmptyElement());

    useEffect(() => {
        const fetchElement = async () => {
            try {
                const contactCardElement = await ElementFactory.CreateContactCardElement();
                setContactCardContentContent(contactCardElement);
            } catch (err) {
                if(err instanceof AppError) {
                    console.error(err.message);
                } else {
                    console.error(err);
                }
            }
        }
        fetchElement();
    }, [])

    return(
        <div className="contact-page">
            <div className="contact-page-card">
                {contactCardContent}
            </div>
        </div>
    )
}

export default Contact;