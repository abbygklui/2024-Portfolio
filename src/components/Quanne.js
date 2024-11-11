import React from 'react';
import './Home.css';
import './Content.css';
import Legend from './Legend.js';
import comparisontest1 from '../assets/Quanne/comparisontest-1.png';
import comparisontest2 from '../assets/Quanne/comparisontest-2.png';
import cover from '../assets/Quanne/cover.png';
import legibilitytest1 from '../assets/Quanne/legibilitytest-1.png';
import legibilitytest2 from '../assets/Quanne/legibilitytest-2.png';
import quanneposter from '../assets/Quanne/quanneposter.png';


const Home = () => {

    return (

        <div className="container content">

            <div className="row align-items-start ">
                {/* <div className="col-lg-6 col-md-12 left-column">
                    <img src={cover1} alt="cover" className="bottom-image" />
                </div> */}

                <div className="col-lg-12 col-md-12 left-column">
                    <img src={cover} alt="cover" className="bottom-image" />
                </div>
            </div>

            <div className="row align-items-start">
                <div className="col-md-12 left-column">

                    <div className="text-content">

                        <h2>Research, Typeface Design</h2>
                        <h1>Designing a Serif Typeface for Modern Editorial Use</h1>
                        <h3>Personal Project</h3>
                    </div>

                </div>

            </div>





            <div className="large-content-first">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>The Problem
                            </h2>

                        </div>

                    </div>


                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>
                                Serif typefaces contain fine details - thin strokes, slim hairlines and short serifs, that become indistinguishable or disappear when displayed in smaller sizes, especially on low-resolution screens and printed content in poor quality. As a result, sans-serif fonts are often preferred in text content.
                            </h3>

                            <h3>Despite this, serif fonts offer distinct advantages. The small serifs used at the ends of a character lead the reader’s eye, improving readability. Serif fonts also hold historical and aesthetic associations related to authenticity and professionalism.
                            </h3>
                            <div className="text-content">
                                <div className="font-size-row">
                                    <h3 className="font-size-label" style={{ fontSize: '0.8rem', lineHeight: "1.2rem" }}>0.8rem</h3>
                                    <p className="text" style={{ fontSize: '0.8rem', fontFamily: 'sans-serif', width: '300px' }}>
                                        This is just a sample line.
                                    </p>
                                    <p className="text" style={{ fontSize: '0.8rem', fontFamily: 'serif', paddingLeft: '1rem', width: '300px' }}>
                                        This is just a sample line.
                                    </p>
                                </div>

                                <div className="font-size-row">
                                    <h3 className="font-size-label" style={{ fontSize: '1rem', lineHeight: "1.4rem" }}>1rem</h3>
                                    <p className="text" style={{ fontSize: '1rem', fontFamily: 'sans-serif', width: '300px' }}>
                                        This is just a sample line.
                                    </p>
                                    <p className="text" style={{ fontSize: '1rem', fontFamily: 'serif', paddingLeft: '1rem', width: '300px' }}>
                                        This is just a sample line.
                                    </p>
                                </div>

                                <div className="font-size-row">
                                    <h3 className="font-size-label" style={{ fontSize: '1.2rem', lineHeight: "2rem" }}>1.2rem</h3>
                                    <p className="text" style={{ fontSize: '1.2rem', fontFamily: 'sans-serif', width: '300px' }}>
                                        This is just a sample line.
                                    </p>
                                    <p className="text" style={{ fontSize: '1.2rem', fontFamily: 'serif', paddingLeft: '1rem', width: '300px' }}>
                                        This is just a sample line.
                                    </p>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>

            </div>


            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>Category of Serif Typefaces
                            </h2>

                        </div>

                    </div>


                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>
                                Humanist and Transitional Serifs: These styles are great for long-form text, but the strong contrast between the thick and thin strokes leads to legibility problems in smaller sizes.
                            </h3>
                            <h3>
                                Slab Serif: This style of type has lost the feeling of history present in other serif typefaces. The serifs are large and thick, making it hard to read in smaller sizes. These fonts are typically bold and grab the viewer’s attention, making them great for titles, logos, and other display purposes rather than for body text content.
                            </h3>


                        </div>


                    </div>
                </div>

            </div>





            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>Problem Statement</h2>

                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>
                                How might I design a serif typeface that adheres to the conventions tied to serif type while improving the legibility of editorial text content, expanding the use of serif fonts in modern contexts and offering more ways to convey character and expression?
                            </h3>

                        </div>


                    </div>
                </div>

            </div>





            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>Design Process
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>
                                I started off by understanding the key rules that define a serif typeface.
                                <ul>
                                    <li>Small strokes attached to the letters</li>
                                    <li>Contrast between thick and thin strokes</li>
                                    <li>Smooth transitions between the letter stroke and the edges of the serifs</li>
                                </ul>

                                Each typeface character also has its own rules.
                            </h3>
                        </div>

                        <div className="text-content">
                            <h3>
                                With this in mind, I needed to think about opportunities to edit a serif typeface to make it more legible.
                            </h3>
                            <h3>

                                The first characters I worked on were the lowercase letters "hamburgefonstiv." These characters covered most design principles, as their individual components can be used as a foundation for designing the remaining characters.
                            </h3>
                            <h3>
                                <ol>
                                    <li>Amount of contrast between thick and thin strokes</li>
                                    <li>Size of the serifs</li>
                                    <li>Thickness of the serifs</li>
                                    <li>Openness of the arches</li>
                                </ol>
                                These characters were then printed to note the quality and legibility of each variation.
                            </h3>

                        </div>
                        <div className="row align-items-start ">
                            <div className="col-lg-6 col-md-12 left-column">

                                <img src={legibilitytest1} alt="legibilitytest" className="bottom-image" />



                            </div>


                            <div className="col-lg-6 col-md-12 left-column">


                                <img src={legibilitytest2} alt="legibilitytest" className="bottom-image" />


                            </div>


                        </div>
                        <div className="text-content">

                            <style>
                                {`
          @font-face {
            font-family: 'Quanne Italic';
            src: url('../assets/Quanne/type/quanne-italic-webfont.woff2') format('woff2'),
                 url('../assets/Quanne/type/quanne-italic-webfont.woff') format('woff'),
                 url('../assets/Quanne/type/quanne-italic-webfont.ttf') format('truetype');
            font-style: italic;
            font-weight: normal;
          }

          @font-face {
            font-family: 'Quanne Regular';
            src: url('../assets/Quanne/type/quanne-regular-webfont.woff2') format('woff2'),
                 url('../assets/Quanne/type/quanne-regular-webfont.woff') format('woff'),
                 url('../assets/Quanne/type/quanne-regular-webfont.ttf') format('truetype');
            font-style: normal;
            font-weight: normal;
          }
        `}
                            </style>
                            <h3>
                                The typeface with thicker serifs and a slight contrast between thick and thin strokes was most legible when read from afar. Using those characters as a base, I designed the rest of my typeface.
                            </h3>
                        </div>
                        <div className="text-content">

                            <div className="font-size-row">
                                <h3 className="font-size-label" style={{ fontSize: '0.8rem', fontFamily: 'Quanne Regular', lineHeight: "1rem" }} >0.8rem</h3> {/* This displays the font size amount */}
                                <p className="text" style={{ fontSize: '0.8rem', fontFamily: 'Quanne Regular' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            <div className="font-size-row">
                                <h3 className="font-size-label" style={{ fontSize: '1rem', fontFamily: 'Quanne Regular', lineHeight: "1.4rem" }}>1rem</h3> {/* This displays the font size amount */}
                                <p className="text" style={{ fontSize: '1rem', fontFamily: 'Quanne Regular' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            <div className="font-size-row">
                                <h3 className="font-size-label" style={{ fontSize: '1.2rem', fontFamily: 'Quanne Regular', lineHeight: "1.8rem" }}>1.2rem</h3> {/* This displays the font size amount */}
                                <p className="text" style={{ fontSize: '1.2rem', fontFamily: 'Quanne Regular', lineHeight: "1.8rem" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>






                <div className="large-content">


                    <div className="row align-items-start">
                        <div className="col-md-4 left-column">

                            <div className="text-content">
                                <h2>Reading Test - Times New Roman vs Arial vs My Font

                                </h2>

                            </div>

                        </div>

                        <div className="col-md-8 right-column ">

                            <div className="text-content">
                                <h3>
                                    To validate the benefit of the final typeface, I needed to conduct a study on reading legibility. I tested ten participants' reading speed for passages in three different typefaces at 10px size.
                                </h3>
                                {/* <img src={comparisontest1} alt="comparisontest" className="bottom-image" /> */}
                            </div>
                            <div className="text-content">
                                <h3>
                                    During the user test, on average participants read the passage with my typeface 700 milliseconds quicker than the other two fonts, with 5/10 participants completing my typeface passage faster than the other two.
                                </h3>
                                <img src={comparisontest2} alt="comparisontest" className="bottom-image" />
                            </div>



                        </div>
                    </div>


                </div>

            </div>



            <div className="large-content">
                <div className="row align-items-start large-content">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>Reflection</h2>
                        </div>
                    </div>


                    <div className="col-md-8 right-column ">

                        <div>
                            <div className="text-content">

                                <h3>
                                    With heavy serifs, thicker overall stroke weight and less contrast between thick and thin, Quanne is a perfect typeface for small font sizes.
                                </h3>
                                <h3>
                                    It was a great project for me to combine research and practicality with learning how to design complex letterforms that each adhere to design conventions. As I reflect further on my experience in typeface design, I realize that there is always room for growth and improvement. Although I am proud of my progress, I know that next time I revisit this project, I will notice additional areas that could benefit from more attention and refinement.
                                </h3>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="large-content">
                <div className="row align-items-start large-content">

                    <img src={quanneposter} alt="comparisontest" className="bottom-image" />

                </div>

            </div>

        </div >
    );
};

export default Home;
