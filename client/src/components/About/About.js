import React from "react";
import './index.css';


function About() {

    return (<>
        <div class="about-container">
            <img src="path/to/your/image.jpg" alt="About Us Image" class="about-image" />
            <div class="about-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare,
                    quae sunt a te dicta?</p>
                <p>Et quidem, inquit, vehementer errat; An me, inquam, nisi te audire vellem, censes haec dicturum fuisse?
                </p>
            </div>
            <div class="contact-info">
                <h2>Contact Information</h2>
                <p>Email: contact@example.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Main Street, Cityville, Country</p>
            </div>
        </div>
    </>);
}


export default About;