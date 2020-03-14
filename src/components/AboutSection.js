import React from "react";
import './style.css';

const AboutSection = () => {
    return (
        // About Section
        <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
            <h4><b>About Me</b></h4>
            <img src="https://issaissa-issa.github.io/Portfolio/assets/images/profile.jpg" alt="Me" class="w3-image w3-padding-32" width="600" height="650" />
            <div class="w3-content w3-justify" style={{ maxWidth: 600 }}>
                <h4><b>Issa Issa</b></h4>
                <p>Full-stack developer with a background in Biology
        working towards gaining an increased amount of knowledge and skill within the ever expanding
        world of programming. Fully certified as a Full-stack developer who completed the “MERN”
        coursework, through Bootcamp Spot partnering with the University of Minnesota. I am driven
        by a craving to gather more skills and learn more and more everyday. I have worked in the
        past with other developers to create fully responsive websites that provide features that
        were requested and applying as much personality to the page as possible.</p>    
                <p><b>email: </b>issa.issa1901@gmail.com</p>
                <p><b>phone: </b>(651) 361-0299</p>
                <p><b>GitHub Profile Link: </b><a href="https://github.com/IssaIssa-Issa">github.com/IssaIssa-Issa</a></p>
                <p><b>LinkedIn Profile Link: </b><a href="https://www.linkedin.com/in/issa-issa-06159718b/">linkedin.com/in/IssaIssa-Issa</a></p>
                <p><b>My Résumé: </b><a href="https://issaissa-issa.github.io/Portfolio/assets/resume.pdf">Read It Here</a></p>

            </div>
        </div>
    )
}

export default AboutSection;