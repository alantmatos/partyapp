import React from 'react';
import './index.css';
import imgPizza from "./temp/pizzaparty.jpg";

function Home() {

    return (<div className='home'>

        <div>
            <h2>Hi There, Are you on your way?</h2>
            <h4>Upcoming Events:</h4>
            <h5 className="eventslink"><a href="/events">See Events for more</a></h5>
        </div>


        <div className="card-container">
                <div className="card">
                    <img src={imgPizza} alt="Event Card" />
                    <div className="card-content">
                        <div className="card-title">Jason's Pizza Party </div>
                        <div className="card-description">
                        Indulge in a delightful evening of flavor at our Pizza 
                        Party! Join us for a mouthwatering celebration featuring 
                        a variety of artisanal pizzas, each crafted with the finest 
                        ingredients and baked to perfection. 
                        </div>
                        <div className="card-location">Location: Brooklyn, NY</div>
                    </div>
                </div>
        </div>



    </div>);
}

export default Home;