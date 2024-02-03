import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div class="party-hat"></div>
            <ul>
                <li><a href="/">Home</a></li>                
                <li><a href="/events">Events</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
