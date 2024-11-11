import React from 'react';
import './Home.css';
import './Content.css';
import Legend from './Legend.js';
import demo from '../assets/Blink/blink-demo.mov';


const Home = () => {

    return (

        <div className="container content">

            <div className="row align-items-start ">
                {/* <div className="col-lg-6 col-md-12 left-column">
                    <img src={cover1} alt="cover" className="bottom-image" />
                </div> */}

                <div className="col-lg-12 col-md-12 left-column">
                    {/* <img src={cover} alt="cover" className="bottom-image" /> */}
                </div>
            </div>

            <div className="row align-items-start">
                <div className="col-md-12 left-column">

                    <div className="text-content">

                        <h2>Development(Python), Concept</h2>
                        <h1>Blink!</h1>
                        <h3>Personal Project</h3>

                    </div>



                </div>

            </div>





            <div className="large-content-first">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h3> Blink! is part of my ongoing series of projects that aim to make everyday life more fun through goofy yetobjects that connect with their inner child of every adult.
                            </h3>

                            <h3>
                                An ultrasonic sensor (which I find is a safer alternative to IR sensors) is used to detect long eye blinks, which triggers the camera placed on the glasses to capture a photo.
                            </h3>

                        </div>

                    </div>


                    <div className="col-md-8 right-column ">

                        <video src={demo} className="img-fluid w-100" controls loop muted>
                            Your browser does not support the video tag.
                        </video>


                    </div>
                </div>

            </div>



            {/* <div className="large-content">
                <div className="row align-items-start large-content">

                    <video src={demo} className="img-fluid w-100" controls loop muted>
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div> */}

        </div >
    );
};

export default Home;
