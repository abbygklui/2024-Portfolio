import React from 'react';
import './Home.css';
import './Content.css';
import cover from '../assets/Thinking/cover.png';
import creativeflow from '../assets/Thinking/CreativeFlow.png';
import demo from '../assets/Thinking/demoui.mov';
import gesuredemo from '../assets/Thinking/GestureRecognition.mov';
import toolcreationflow from '../assets/Thinking/ToolCreationFlow.png';


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

                        <h2>Research, Development</h2>
                        <h1>Building an tool that uses AI to boost rather than disrupt creativity</h1>
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
                            <h2>
                                Artificial intelligence has started to become a major collaborator in creative processes, disrupting how ideas are formed.
                            </h2>
                            <h3>
                                Every day, we experience media that influences our thoughts and actions.

                            </h3>

                            <h3>A common example of these influences is the predictive text shown when using a keyboard; while this feature is minor, the suggestions shown lead you change the way you respond to messages. In the 2010s, during the rise of the internet, social media sources started to change their algorithm, changing user perception and relationships towards creators. A “creative” example might be Pinterest, in which the algorithm is tailored around the user and returns content in a consistent manner and unrealistic style.
                            </h3>

                            <h3>
                                With the developments of AIGC in the last few years, we experienced the rise of predictive text-to-image and text-to-text solutions during our day-to-day tasks. However, AI features have been primarily non-deterministic, as it is used to generate varying content based on predictive text. While it is helpful for AI to interpret what we say at a higher level, I would like to focus on my concern that AI will stifle creativity. As people start to rely on AI to generate new ideas and solutions, we will start to focus on concepts formed through patterns of previous data that AI judges as creative.
                            </h3>
                        </div>


                    </div>
                </div>

            </div>


            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>Problem Statement
                            </h2>

                        </div>

                    </div>


                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>
                                How can we incorporate AI in our design thinking process to assist rather than hinder our creative thinking?
                            </h3>
                        </div>


                    </div>
                </div>

            </div>





            {/* <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>The Solution</h2>

                        </div>

                    </div>


                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>
                                A brainstorming application that builds tools itself.
                            </h3>
                            <video src={demo} className="img-fluid w-100" controls loop muted>
                                Your browser does not support the video tag.
                            </video>
                        </div>


                    </div>
                </div>

            </div> */}



            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>The Design Process
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-8 right-column ">
                    </div>

                </div>


            </div>

            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>For humans, where does creativity come from?
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>
                                Creativity is defined as the interconnection of seemingly unrelated ideas  in a way that is original and valuable. Human creativity generally relies on the prior knowledge of various domains, personal experiences, memories and our current perception. Both an overload and a lack of information can stifle creativity, and the level of creativity varies between people.
                            </h3>
                            <h3>
                                According to The Creative Brain, creative thinking is supported by our ability to envision the future by looking into past events. There are two parts of this process, “idea generation” and “idea evaluation.”
                            </h3>
                            <h3>
                                Idea generation involves letting our minds drift into new thoughts by relaxing, allowing for ideas that may not come to mind otherwise.
                            </h3>
                            <h3>
                                Idea evaluation involves thinking about what we know and questioning if these ideas would be effective.
                            </h3>
                        </div>
                    </div>
                </div>


            </div>

            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>What is the user flow of being creative?
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>

                            </h3>
                            <img src={creativeflow} alt="creativeflow" className="bottom-image" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>
                                What is currently used for creativity?
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h3>
                                In our current industry, mind maps and brainstorming software applications are commonly used to form ideas. This practice enables connects both idea generation and idea evaluation, as this visual method can lead to freely connecting thoughts through its varying, informal structure, while ideas can be further analyzed and broken down to assess it’s level of effectiveness.


                            </h3>
                            <h3>
                                These applications help improve understanding of complex tasks by allowing a focus on different parts and specific aspects. Information is also organized, making it easier to reference and remember.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>
                                What is the problem with digital brainstorming applications today?
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-8 right-column ">

                        <div className="text-content">
                            <h2>
                                Use of AI to generate and form connections between ideas
                            </h2>
                            <h3>
                                Recently, mindmapping applications have began to implement AI for automatic clustering, idea generation, and text summarization. This leads to unoriginal concepts during the brainstorming and evaluation part of the creativity process.
                            </h3>
                        </div>
                        <div className="text-content">
                            <h2>
                                Lack of Organization
                            </h2>
                            <h3>
                                Although these applications are useful for visual comprehension, as more things are added to the canvas, they can become cluttered and difficult to follow.
                            </h3>
                        </div>
                        <div className="text-content">
                            <h2>
                                Software Limitationss
                            </h2>
                            <h3>
                                These applications all have features that try to be tailored to all sorts of users, leading to limitations of more specific use cases.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>



            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>
                                Where can AI help?
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-8 right-column ">

                        <div className="text-content">

                            <h3>
                                AI can help this creative process by generate tools that customize the application into their personal brainstorming style. As mindmapping tools enable creative people to use <b>visual senses</b> to perceive information, having the software <b>visually adapt</b> to their needs can encourage them to explore ideas without being limited by software.
                            </h3>
                            <h3>
                                This solution solves all three major problems in current brainstorming applications. Rather than using AI to directly intervene with thinking, AI is used to improve a creative's the user experience.
                            </h3>

                        </div>

                    </div>
                </div>
            </div>

            <div className="large-content">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">

                        <div className="text-content">
                            <h2>
                                Tool Creation
                            </h2>

                        </div>

                    </div>

                    <div className="col-md-8 right-column ">

                        <div className="text-content">

                            <h3>
                                When creating a tool, there are two steps that need to be defined. First, the creative must define how this tool should be triggered. Second, they must state the function of the tool.
                            </h3>

                            <h3>
                                To design this flow, I have selected two forms of common visual interaciton - graphic user interfaces and hand gestures.

                                As the creative is already interacting with the interface to brainstorm,  using the interface components on the screen leads to seamless interacitons that do not interrupt their thoughts.

                                I chose to use hand gesture interaction because it is a natural way of visual communication. For example, we can use our hands to wave, convey different numbers, relay if something is good or bad, etc.
                            </h3>
                            <img src={toolcreationflow} alt="tool creation" className="bottom-image" />
                        </div>

                    </div>
                </div>
            </div>



            <div className="large-content">
                <div className="row align-items-start large-content">
                    <h3>
                        Custom UI to trigger actions
                    </h3>
                    <video src={demo} className="img-fluid w-100" controls loop muted>
                        Your browser does not support the video tag.
                    </video>

                </div>
                <div className="row align-items-start large-content">
                    <h3>
                        Custom gestures to trigger actions
                    </h3>
                    <video src={gesuredemo} className="img-fluid w-100" controls loop muted>
                        Your browser does not support the video tag.
                    </video>

                </div>

            </div>

        </div >
    );
};

export default Home;
