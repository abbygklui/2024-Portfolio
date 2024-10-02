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
                    {/* <div className="fixed-content">

  
                    </div> */}

                    <div className="scrolling-content">
                        {/* <img src={bags} alt="bags" className="bottom-image" /> */}
                        <img src={oldmarket} alt="market" className="bottom-image" />
                        <div className="text-content">
                            <h2>Pang Jai Fabric Market</h2>
                            <p>Research, Social Design</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6 right-column ">
                    <img src={fabricsellers} alt="market" className="bottom-image" />

                    <div>
                        <div className="text-content">
                            <h2>The Problem</h2>
                            <p>The cloth vendors of Pang Jai, who were displaced from their original location due to government redevelopment,  are struggling to sustain their enterprises in their new location.</p>

                        </div>
                        <div className="text-content">
                            <h2>The Solution</h2>
                            <p>We designed a wayfinding system with directories and storefront signages. Using the fabrics sold at the market, we created tote bags for the store vendors to sell providing both an additional revenue stream and a means of showcasing their products. Furthermore, we organized a community workshop to create an engaging art installation for the market's front entrance, enhancing its visual appeal and drawing in more visitors.
                            </p>

                        </div>
                        <div className="text-content">
                            <h2>How did I get there?</h2>
                            <p>We started off by conducting a site visit and researching about the history of Pang Jai, revealing the challenges faced by displaced cloth vendors. Drawing insights from our research and a relevant case study, we created a strategy that focused on improving the market design and conducting collaborative workshops with people in the district, while preserving its unique cultural heritage. We then drafted proposal and collaborated with the store venders to create a final design that blends practical interventions with community-driven initiatives to create a vibrant and inclusive space.
                            </p>

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
            <div className="row align-items-start">
                <div className="col-md-6 left-column">


                    <br></br>
                </div>

                {/* Right Column */}
                <div className="col-md-6 right-column ">

                    <div>
                        <div className="text-content">
                            <h2>Reflecting</h2>
                            <p>The Pang Jai project focuses on the need to revitalize and improve the market infrastructure as an opportunity to attract customers, improve browsing experiences, and engage people with traditional Chinese culture. The project played a crucial role in helping me learn from and collaborate with store owners and designers of different disciplines on a design project that spanned various communication media, including digital flyers, print, product design and way finding. Working with all disciplines in each step of the project resulted in innovative solutions that brought together what was needed for Pang Jai. As all of us had separate ideas on the research and design phases of the project, collaboration resulted in diverse ideas, skills, and resources when working together.</p>
                            <p>Upon reflection, our goal is for these design elements to not only serve as functional equipment but also embody and amplify Pang Jai's enduring community spirit. By revitalizing the signage and enhancing the overall visual appeal of the market, we aim to contribute to the preservation and continued significance of Pang Jai within Hong Kong's cultural landscape.</p>

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
