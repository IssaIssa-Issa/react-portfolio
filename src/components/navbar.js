import React from "react";
import './style.css'



const Navbar = () => {
    return (
        <div>
              {/* Sidebar/menu */}
            <nav className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center" style={{ zIndex: 3, width: 300, fontWeight: "bold" }} id="mySidebar"><br />
                <h3 class="w3-padding-64 w3-center brand-name"><b>Issa<br />Issa</b></h3>
                <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button w3-padding w3-hide-large">CLOSE</a>
                <a href="https://github.com/IssaIssa-Issa" onclick="w3_close()" className="w3-bar-item w3-button">PROJECTS</a>
                <a href="https://www.google.com" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT ME</a>
                <a href="https://www.linkedin.com/in/issa-issa-06159718b/" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
            </nav>
            {/* Top menu on small screens */}
            <header class="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
                <span class="w3-left w3-padding">Issa Issa</span>
                <a href="javascript:void(0)" class="w3-right w3-button w3-white" onclick="w3_open()">☰</a>
            </header>
            {/* Overlay effect when opening sidebar on small screens */}
            <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>
        </div>
    )
}

export default Navbar;