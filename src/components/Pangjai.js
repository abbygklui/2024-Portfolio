import React from 'react';
import './Home.css';
import './Content.css';
import bags from '../assets/pangjai/bags.png';
import cloths from '../assets/pangjai/cloths.png';
import entrance from '../assets/pangjai/entrance.png';
import fabricsellers from '../assets/pangjai/fabricsellers.png';
import finalshow from '../assets/pangjai/finalshow.png';
import map from '../assets/pangjai/map.png';
import map2 from '../assets/pangjai/map2.png';
import measuring from '../assets/pangjai/measuring.png';
import mewithsweater from '../assets/pangjai/mewithsweater.png';
import oldmarket from '../assets/pangjai/oldmarket.png';
import printing from '../assets/pangjai/printing.png';
import puttingmapup from '../assets/pangjai/puttingmapup.png';
import workingtogethermeasuring from '../assets/pangjai/workingtogethermeasuring.png';
import worksesh from '../assets/pangjai/worksesh.png';
import worksesh2 from '../assets/pangjai/worksesh2.png';
import worksesh3 from '../assets/pangjai/worksesh3.png';

const Home = () => {
    return (
        <div className="container content">

            <div className="row align-items-start">
                <div className="col-md-6 left-column">

                    <div className="text-content">

                        <h2>Research, Social Design</h2>
                        <h1>Pang Jai Fabric Market</h1>
                    </div>

                </div>

            </div>

            <div className="row align-items-start ">
                <div className="col-md-6 left-column">
                    <img src={oldmarket} alt="market" className="bottom-image" />


                </div>

                {/* Right Column */}
                <div className="col-md-6 right-column ">
                    <img src={fabricsellers} alt="market" className="bottom-image" />

                </div>
            </div>




            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-6 left-column">

                        <div className="text-content">
                            <h2>The Problem</h2>

                        </div>

                    </div>


                    <div className="col-md-6 right-column ">

                        <div className="text-content">
                            <h3>The cloth vendors of Pang Jai, who were displaced from their original location due to government redevelopment,  are struggling to sustain their enterprises in their new location.

                            </h3>

                        </div>


                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-6 left-column">

                        <div className="text-content">
                            <h2>The Solution</h2>

                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="col-md-6 right-column ">

                        <div className="text-content">
                            <h3>
                                To improve user navigation, we designed a wayfinding system with directories and storefront signages. we created tote bags using the fabrics sold at the market for the store vendors to sell providing both an additional way to showcase and sell their products. We organized a community workshop to create an engaging art installation for the market's front entrance, drawing in more visitors while promoting Pang Jai's cultural spirit.

                            </h3>

                        </div>


                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-6 left-column">

                        <div className="text-content">
                            <h2>How did we get there?</h2>

                        </div>

                    </div>

                    <div className="col-md-6 right-column ">

                        <div className="text-content">
                            <h3>We started off by conducting a site visit and researching about the history of Pang Jai, revealing the challenges faced by displaced cloth vendors. Drawing insights from our research and a relevant case study, we created a strategy that focused on improving the market design and conducting collaborative workshops with people in the district, while preserving its unique cultural heritage. We then discussed with the store venders and drafted a proposal to create a final design.
                            </h3>
                            {/* that blends practical interventions with community-driven initiatives to create a vibrant and inclusive space */}

                        </div>


                    </div>
                </div>
            </div>






            <div className="row align-items-start">
                <div className="col-md-6">
                    <img src={bags} alt="market" className="bottom-image" />
                </div>
                <div className="col-md-6 ">
                    <img src={map} alt="market" className="bottom-image" />
                </div>

            </div>
            <div className="row align-items-start">
                <div className="col-md-12">
                    <img src={entrance} alt="market" className="bottom-image" />
                </div>
            </div>
            <div className="row align-items-start large-content">
                <div className="col-md-6 left-column">

                    <div className="text-content">
                        <h2>Reflecting</h2>
                    </div>
                </div>


                <div className="col-md-6 right-column ">

                    <div>
                        <div className="text-content">

                            <h3>
                                The Pang Jai project aimed to revitalize market infrastructure to attract customers, enhance browsing experiences, and promote traditional Chinese culture. The collaborative project involved working with store owners and designers across multiple disciplines, including digital flyers, print, product design, and wayfinding. This teamwork led to innovative solutions by integrating diverse perspectives and skills throughout the research and design phases. The ultimate goal was to create design elements that not only serve functional purposes but also amplify Pang Jai's community spirit, contributing to its preservation and cultural significance within Hong Kong.
                            </h3>

                        </div>

                    </div>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-md-6">
                    <img src={cloths} alt="market" className="bottom-image" />
                </div>
                <div className="col-md-6 ">
                    <img src={measuring} alt="market" className="bottom-image" />
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-md-6">
                    <img src={printing} alt="market" className="bottom-image" />
                </div>
                <div className="col-md-6 ">
                    <img src={puttingmapup} alt="market" className="bottom-image" />
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-md-6">
                    <img src={workingtogethermeasuring} alt="market" className="bottom-image" />
                </div>
                <div className="col-md-6 ">
                    <img src={worksesh} alt="market" className="bottom-image" />
                </div>
            </div>
            <div className="row align-items-start">

                <div className="col-md-6 ">
                    <img src={worksesh2} alt="market" className="bottom-image" />
                </div>
                <div className="col-md-6 ">
                    <img src={worksesh3} alt="market" className="bottom-image" />
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-md-6">
                    <img src={finalshow} alt="market" className="bottom-image" />
                </div>
                <div className="col-md-6 ">
                    <img src={mewithsweater} alt="market" className="bottom-image" />
                </div>
            </div>
            <br></br>
        </div>
    );
};

export default Home;
