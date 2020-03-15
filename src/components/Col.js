import React from "react";
import './style.css';

const Col = ({ children }) => {
    return (
        <div class="w3-half">
            {children}
        </div>
    )
}

export default Col; 