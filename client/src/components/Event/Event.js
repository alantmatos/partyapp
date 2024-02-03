import React from "react";
import './index.css';


function Event() {
    return (
        <div className="event">
            <div className="eventFinder">
                <label for="inputField">Search for an Event:</label>
                <input type="text" id="inputField" name="inputField" placeholder="Type here..." />
            </div>

            <div className="card-container">
                <div className="card">
                    <img src="path/to/your/photo1.jpg" alt="Event Card" />
                    <div className="card-content">
                        <div className="card-title">Card Title 1</div>
                        <div className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare,
                            quae sunt a te dicta?
                        </div>
                        <div className="card-location">Location: City, Country</div>
                    </div>
                </div>

                <div className="card">
                    <img src="path/to/your/photo2.jpg" alt="Event Card" />
                    <div className="card-content">
                        <div className="card-title">Card Title 2</div>
                        <div className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare,
                            quae sunt a te dicta?
                        </div>
                        <div className="card-location">Location: City, Country</div>
                    </div>
                </div>

                <div className="card">
                    <img src="path/to/your/photo2.jpg" alt="Event Card" />
                    <div className="card-content">
                        <div className="card-title">Card Title 2</div>
                        <div className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare,
                            quae sunt a te dicta?
                        </div>
                        <div className="card-location">Location: City, Country</div>
                    </div>
                </div>

                <div className="card">
                    <img src="path/to/your/photo2.jpg" alt="Event Card" />
                    <div className="card-content">
                        <div className="card-title">Card Title 2</div>
                        <div className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare,
                            quae sunt a te dicta?
                        </div>
                        <div className="card-location">Location: City, Country</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Event;