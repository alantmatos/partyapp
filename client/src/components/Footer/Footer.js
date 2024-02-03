import React from "react";
import './index.css';


function Footer() {
    return (<>
        <footer>
            <div class="footer-content">
                <div class="footer-logo">OnMyWay</div>
                <div class="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <ul class="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div class="footer-social">
                    <a href="#" target="_blank">Facebook</a>
                    <a href="#" target="_blank">Twitter</a>
                    <a href="#" target="_blank">Instagram</a>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;