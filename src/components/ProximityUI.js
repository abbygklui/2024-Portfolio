import React from 'react';
import './Home.css';
import './Content.css';
import lockscreen from '../assets/Proximity-UI/lockscreen.mov';
import article from '../assets/Proximity-UI/article.mov';

const Home = () => {
    return (
        <div className="container content">
            <div className="row align-items-start text-content">
                <div className="col-md-6 right-column ">
                    <div>
                        <div className="text-content">
                            <h2>Research, Development(React), UI</h2>
                            <h1>Proximity Design</h1>
                            <h3>Personal Project</h3>
                        </div>
                        {/* Add your right column content here */}
                        <h3>Proximity UI solves the problem of needing to continously access information from a distance away from their screen.</h3>
                        <h3>   Inspired by my interest in distance based interactions, I developed an idea for the UI to change based on the user's current content for scenarios where the user moves away from their display.</h3>

                    </div>
                </div>
            </div>
            <div className="row align-items-start text-content">

                <div className="col-md-6 left-column">
                    {/* <div className="fixed-content">



                    </div> */}

                    <div className="scrolling-content">
                        {/* <img src="path-to-eiffel-tower-placeholder.jpg" alt="Eiffel Tower Bottom 2" className="bottom-image" /> */}
                        <video src={article} className="img-fluid w-100" controls loop muted>
                            Your browser does not support the video tag.
                        </video>

                        <h3>This scenario depicts how the display would change when the user moves away from their web browser. In this example, key information from the news website is taken to adapt to the full lock screen. The information shown is not soley based on the article they were reading, but adapts to changing content within different pages of this website, such as the top news stories of the day and the weather. </h3>



                    </div>
                </div>
                <div className="col-md-6 right-column">
                    {/* <div className="fixed-content">



                    </div> */}

                    <div className="scrolling-content">
                        {/* <img src="path-to-eiffel-tower-placeholder.jpg" alt="Eiffel Tower Bottom 2" className="bottom-image" /> */}

                        <video src={lockscreen} className="img-fluid w-100" controls loop muted>
                            Your browser does not support the video tag.
                        </video>

                        <h3> The second scenario shows an example for a lock screen. The widgets adapt to the the shape of the screen when the user moves away from their laptop, displaying their schedule, and tasks for them to view at a glance. </h3>

                    </div>
                </div>

                {/* Right Column */}



            </div>
        </div >
    );
};

export default Home;
