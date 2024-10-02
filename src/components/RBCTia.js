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
                    <div className="fixed-content">
                        {/* 
                        <video src={article} className="img-fluid w-100" controls loop muted>
                            Your browser does not support the video tag.
                        </video>
                        <video src={lockscreen} className="img-fluid w-100" controls loop muted>
                            Your browser does not support the video tag.
                        </video> */}

                    </div>

                    <div className="scrolling-content">
                        {/* <img src="path-to-eiffel-tower-placeholder.jpg" alt="Eiffel Tower Bottom 2" className="bottom-image" /> */}
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6 right-column ">
                    <div>
                        <div className="text-content">
                            <h2>Royal Bank of Canada - Tia the Tech Assistant</h2>
                            <p>UI/UX Design</p>
                            <p>Teammates: Valeria Gonzala</p>
                        </div>
                        {/* Add your right column content here */}
                        <h2>The Problem</h2>
                        <p>The current chat interface is confusing and difficult to understand, ineffective in improving how users experience Tia.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
