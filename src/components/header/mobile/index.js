import React from 'react'
import "./mobile.css"
function Mobile({ isOpen, setIsOpen }) {
    function SetIsOpen(){
        setIsOpen(!isOpen)
    }
    return (
        <div className="mobile">
            <div className="close-icon" onClick={SetIsOpen}>
                <i class="fi-rr-cross"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#home" onClick={SetIsOpen}>Home</a>
                </div>
                <div className="mobile-option">
                    <a href="#services" onClick={SetIsOpen}>Services</a>
                </div>
                <div className="mobile-option">
                    <a href="#projects" onClick={SetIsOpen}>RecentProjects</a>
                </div>
                <div className="mobile-option">
                    <a href="#team" onClick={SetIsOpen}>Professionals</a>
                </div>
                <div className="mobile-option">
                    <a href="#contact" onClick={SetIsOpen}>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
