import React from "react";
import './style.css';

const ContactSection = () => {
    return (
        // Contact section
        <div class="w3-container w3-light-grey w3-padding-32 w3-padding-large" id="contact">
            <div class="w3-content" style={{maxWidth:600}}>
                <h4 class="w3-center"><b>Contact Me</b></h4>
                <p>Do you need some coding done? Send me a message!</p>
                <form action="/action_page.php" target="_blank">
                    <div class="w3-section">
                        <label>Name</label>
                        <input class="w3-input w3-border" type="text" name="Name" required />
                    </div>
                    <div class="w3-section">
                        <label>Email</label>
                        <input class="w3-input w3-border" type="text" name="Email" required />
                    </div>
                    <div class="w3-section">
                        <label>Message</label>
                        <input class="w3-input w3-border" type="text" name="Message" required />
                    </div>
                    <button type="submit" class="w3-button w3-block w3-black w3-margin-bottom">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactSection;