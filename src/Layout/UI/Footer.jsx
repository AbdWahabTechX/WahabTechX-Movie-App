import { NavLink } from "react-router";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn
} from "react-icons/fa";

import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-about">
                    <h2>WAHAB<span>TECHX</span></h2>

                    <p>
                        Discover your favorite movies, explore amazing stories,
                        and find all the information about your favorite films
                        in one place.
                    </p>

                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>

                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/movie">Movies</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>

                    <p>
                        <span>✉ support@wahabtechx.com</span>
                    </p>

                    <p>
                        <span>☎ +92 300 1234567</span>
                    </p>

                    <p>
                        <span>📍 Lahore, Pakistan</span>
                    </p>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} WAHABTECHX.
                    All Rights Reserved.
                </p>

                <p>Designed with ❤️ by WAHABTECHX</p>
            </div>

        </footer>
    );
};