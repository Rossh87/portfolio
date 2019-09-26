import React from "react";

// Get local components
import NavLinkItem from "legos/NavLinkItem";

// Get svg graphics
import { FaGithubSquare, FaLinkedin, FaFilePdf } from "react-icons/fa";

import "./styles.scss";

const Footer = (props) => {
    const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

    return (
        <footer className="c-footer">
            <ul className="c-footer_list e-hover-brackets">
                <NavLinkItem
                    path={`${REACT_APP_API_ENDPOINT}/download/resume`}
                    hasHoverEffect
                    styleClass="c-footer_item"
                >
                    <span className="c-footer_text">Résumé</span>

                    <FaFilePdf className="c-footer_icon" />
                </NavLinkItem>

                <NavLinkItem
                    path="https://www.linkedin.com/in/rhunter-dev"
                    hasHoverEffect
                    styleClass="c-footer_item"
                >
                    <span className="c-footer_text">LinkedIn</span>

                    <FaLinkedin className="c-footer_icon" />
                </NavLinkItem>

                <NavLinkItem
                    styleClass="c-footer_item"
                    path="https://github.com/Rossh87"
                    hasHoverEffect
                >
                    <span className="c-footer_text">GitHub</span>
                    <FaGithubSquare className="c-footer_icon" />
                </NavLinkItem>

                <span className="c-footer_copyright">Ross Hunter, 2019</span>
            </ul>
        </footer>
    );
};

export default Footer;
