import React from 'react';
import './Home.css';
import './Content.css';
import lockscreen from '../assets/Proximity-UI/lockscreen.mov';
import article from '../assets/Proximity-UI/article.mov';

const Home = () => {
    return (
        <div className="container content">
            <div className="row align-items-start">
                <div className="col-md-6 left-column">
                    {/* <div className="fixed-content">



                    </div> */}

                    <div className="scrolling-content">
                        {/* <img src="path-to-eiffel-tower-placeholder.jpg" alt="Eiffel Tower Bottom 2" className="bottom-image" /> */}
                        <video src={article} className="img-fluid w-100" controls loop muted>
                            Your browser does not support the video tag.
                        </video>
                        <video src={lockscreen} className="img-fluid w-100" controls loop muted>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6 right-column ">
                    <div>
                        <div className="text-content">
                            <h2>Proximity Design</h2>
                            <p>Research, Development(React), UI</p>
                        </div>
                        {/* Add your right column content here */}
                        <p>Proximity UI solves the problem of needing to continously access information from a distance away from their screen.</p>
                        <p>   Inspired by my interest in proximity and dynamic interactions, I developed an idea for the UI to change dynamically based on the user's current content for scenarios where the user moves away from their display.</p>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
