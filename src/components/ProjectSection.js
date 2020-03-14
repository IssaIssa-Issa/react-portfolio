import React from "react";
import './style.css';

const ProjectSection = ({ children }) => {
    return (
        <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="projects">
            {children}
        </div>

    )
}

export default ProjectSection;