import React from 'react';
import './Home.css';
import './Content.css';
import cover2 from '../assets/rbctia/cover2.png';
import personas from '../assets/rbctia/personas.png';
import oldView from '../assets/rbctia/old-view.png';
import keytakeaway1 from '../assets/rbctia/keytakeaway1.png';
import keytakeaway2 from '../assets/rbctia/keytakeaway2.png';
import keytakeaway3 from '../assets/rbctia/keytakeaway3.png';
import keytakeaway4 from '../assets/rbctia/keytakeaway4.png';
import opportunities from '../assets/rbctia/opportunities.png';
import design1exporation1 from '../assets/rbctia/design1exporation1.png';
import design1exporation2 from '../assets/rbctia/design1exporation2.png';
import design2 from '../assets/rbctia/design2.png';
import design2exploration1 from '../assets/rbctia/design2exploration1.png';
import design2exploration2 from '../assets/rbctia/design2exploration2.png';
import design3 from '../assets/rbctia/design3.png';
import design3closeicon from '../assets/rbctia/design3closeicon.png';
import design3refreshicon from '../assets/rbctia/design3refreshicon.png';
import design3final from '../assets/rbctia/design3final.png';
import design4exploration1 from '../assets/rbctia/design4exploration1.png';
import design4exploration2 from '../assets/rbctia/design4exploration2.png';
import design5exploration1 from '../assets/rbctia/design5exploration1.png';
import design5exploration2 from '../assets/rbctia/design5exploration2.png';
import design5final from '../assets/rbctia/design5final.png';
import finalOldVersion from '../assets/rbctia/final-oldversion.png';
import finalNewVersion from '../assets/rbctia/final-newversion.png';


const Home = () => {

    return (
        <div className="container content">
            <div className="row align-items-start ">
                <div className="col-lg-12 col-md-12 left-column">
                    <img src={cover2} alt="Tia Project" className="bottom-image" />
                </div>
            </div>

            <div className="row align-items-start">
                <div className="col-md-12 left-column">
                    <div className="text-content">
                        <h2>Research, AI-Based Chatbot Design</h2>
                        <h1>Tia - Royal Bank of Canada</h1>
                    </div>
                </div>
            </div>

            <div className="large-content-first">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>The Team</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Abby Lui, Valeria Gonzala</h3>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>About this Project</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>As a designer for RBC's Tia, one of the projects I led was the redesign of the chat support tool.</h3>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>What is Tia?</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Tia (they/them) is a guided AI-based tech support tool that helps all RBC employees resolve common technology issues.</h3>
                            <h3>Insights & Data Driven: Responds to the most common employee issues</h3>
                            <h3>Do what Bots are Good at: Offers both automated & personalized experiences</h3>
                            <h3>Be where Users are: Multi-channel integrations</h3>
                            <h3>Seamless Handover: Always makes it easy to reach a human</h3>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>My Role</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Research + usability tests, ideation, and design</h3>
                            <h3>Research and user testing</h3>
                            <h3>Planning and ideation</h3>
                            <h3>Design execution and prototype</h3>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>The Problem</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h5>The current chat interface is confusing and difficult to understand, ineffective in improving how users experience Tia.</h5>

                            <h3>50% of fallback messages come from users that are using Tia incorrectly.</h3>
                            <h3>Approximately 45% of pilot users stop using Tia after the second month of access.</h3>


                        </div>
                    </div>

                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>The Problem Statement</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">

                        <div className="text-content">
                            <h3>How might we evolve the current chat design to better assist with employee technology issues?</h3>
                        </div>
                    </div>

                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>I split my process into three steps</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>1. Empathise</h3>
                            <h3>2. Conceptualize</h3>
                            <h3>3. Design</h3>
                        </div>
                    </div>
                </div>
            </div>





            <div className="large-content-first">

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>Step 1: Empathise</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>We reviewed our pilot users' chat logs and ran separate testing sessions on the chatbot interface.</h3>
                            <h3>To continue analyzing the problem and determine all considerations, we decided to review the pilot users' chat logs to find any common problems and conduct 7 user testing sessions with both new and pilot employees based on the current chat design. Through these sessions, we gained key information about what employees in different sectors have difficulty with and feel when interacting with the bot.</h3>
                            <h3>We split our users into two groups of employees at RBC for the testing:</h3>
                            <h3>First to those familiar with tech but with negative past experiences with Tia, and second are those that are more senior but less familiar with tech. These focus groups helped us broaden the employees we look for during the testing, as they have different frustrations and levels of comfort.</h3>
                            <div className="row align-items-start">
                                <div className="col-md-12">
                                    <div className="image-content">
                                        <img src={personas} alt="Personas" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>Old Tia</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Our testing scenarios would analyze both:</h3>
                            <h3>How the user interacts with the product interface.</h3>
                            <h3>How the user converses with Tia.</h3>
                            <div className="row align-items-start">
                                <div className="col-md-12">
                                    <div className="image-content">
                                        <img src={oldView} alt="Old View" className="bottom-image" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>





            <div className="large-content-first">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>Key Takeaways</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Key takeaway 1: Some users tend to write lengthy messages, which was difficult for Tia to process.</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-6 col-md-12">
                                    <div className="image-content">
                                        <img src={keytakeaway1} alt="Key Takeaway 1" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Key takeaway 2: Users had difficulty navigating and reading responses with lots of scroll and large passages of text.</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-6 col-md-12">
                                    <div className="image-content">
                                        <img src={keytakeaway2} alt="Key Takeaway 2" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Key takeaway 3: Users had difficulty understanding parts of the chatbot UI.</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-6 col-md-12">
                                    <div className="image-content">
                                        <img src={keytakeaway3} alt="Key Takeaway 3" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Key takeaway 4: Employees wanted somewhere to view their past conversations with Tia.</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-6 col-md-12">
                                    <div className="image-content">
                                        <img src={keytakeaway4} alt="Key Takeaway 4" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>Additional Points to Consider</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Bill 96 - How can we adhere to this new language requirement?</h3>
                            <h3>Branding - How can we update the design to follow RBC's internal brand guidelines?</h3>
                        </div>
                    </div>
                </div>
            </div>





            <div className="large-content-first">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>Step 2: Conceptualize</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Opportunities/Ideas</h3>
                            <h3>Before we continue, we listed out the ideal impact and vision of Tia. All the ideas tied to one vision - bridging the gap between technology support and employees. We then reframed these takeaways into opportunities/ideas to form solutions.</h3>
                            <div className="row align-items-start">
                                <div className="col-md-12">
                                    <div className="image-content">
                                        <img src={opportunities} alt="Opportunities" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                            <h3>1. Some users tend to write lengthy messages, which was difficult for Tia to process.</h3>
                            <h3>Enhance the interface to guide users on how to converse to Tia.</h3>
                            <h3>2. Users had difficulty navigating and reading responses with lots of scroll and large passages of text.</h3>
                            <h3>Condense and simplify conversations and chat elements as much as possible</h3>
                            <h3>3. Users had difficulty understanding parts of the chatbot UI.</h3>
                            <h3>Update the interface to provide users with visual cues on how to use Tia more effectively.</h3>
                            <h3>4. Employees wanted somewhere to view their past conversations with Tia</h3>
                            <h3>Until we are able to fully log the chat history, create a transcript feature.</h3>
                            <h3>5. How can we comply with Bill 96?</h3>
                            <h3>Until French is supported, create a temporary solution for Tia in French.</h3>
                            <h3>6. How can we follow RBC’s internal brand guidelines?</h3>
                            <h3>Update the design and work in conjunction with the brand team.</h3>
                        </div>
                    </div>
                </div>
            </div>





            <div className="large-content-first">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>Step 3: Design</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>1. Some users tend to write lengthy messages, which was difficult for Tia to process.</h3>
                            <h3>Enhance the interface to guide users on how to converse to Tia</h3>

                        </div>
                        <div className="text-content">
                            <h3>Exploration 1: Restrict the number of characters</h3>
                            <h3>✅ Simple solution without cluttering the UI</h3>
                            <h3>✅ Users may paraphrase their text</h3>
                            <h3>❌ Users might not notice and continue typing</h3>
                            <h3>❌ Not fully accessible</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-4 col-md-8">
                                    <div className="image-content">
                                        <img src={design1exporation1} alt="Design Exploration 1" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Exploration 2: Restrict the number of characters, and display the character count to users</h3>
                            <h3>❌ May clutter the UI</h3>
                            <h3>✅ Users may paraphrase their text</h3>
                            <h3>✅ Users will keep this in mind when typing</h3>
                            <h3>✅ Accessible</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-8 col-md-12">
                                    <div className="image-content">
                                        <img src={design1exporation2} alt="Design Exploration 2" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                            <h3>The second exploration was ultimately chosen because it addresses the two design goals most efficiently.</h3>
                            <h3>2. Users had difficulty navigating and reading responses with lots of scroll and large passages of text</h3>
                            <h3>Condense and simplify conversations and chat elements as much as possible</h3>
                            <h3>Changes to Tia’s responses</h3>
                            <h3>Added icons to the link categories to make them easier to identify</h3>
                            <h3>Worked with the conversation designers to limit the number of characters in a response</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-8 col-md-12">
                                    <div className="image-content">
                                        <img src={design2} alt="Design 2" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                            <h3>Changing scenarios with many buttons</h3>
                        </div>
                        <div className="text-content">
                            <h3>Exploration 1</h3>
                            <h3>Window with a list of options for flows with more than 8 buttons</h3>
                            <div className="row align-items-start">
                                <div className="col-md-12">
                                    <div className="image-content">
                                        <img src={design2exploration1} alt="Design Exploration 1" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Exploration 2</h3>
                            <h3>Removing button options when there are more than 8</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-8 col-md-12">
                                    <div className="image-content">
                                        <img src={design2exploration2} alt="Exploration 2" className="bottom-image" />
                                    </div>
                                </div>
                            </div>

                            <div class="text-content">
                                <h3>Testing</h3>
                                <h3>We hosted 6 testing sessions to observe how our users interacted with these changes</h3>
                                <h3>Through these sessions, we found that users:</h3>
                                <h3>Had an easier time with icon categories</h3>
                                <h3>Found it easier to read through shorter text responses and click into the articles to view more on their own</h3>
                                <h3>Preferred a list of options to get a general idea of what it is asking</h3>
                                <h3>With users preferring the scenario with short text responses and lists, we decided to move forward with Exploration 1.</h3>
                                <h3>3. Users had difficulty understanding parts of the chatbot UI</h3>
                                <h3>Update the interface to provide users with visual cues on how to use Tia more effectively</h3>
                                <h3>FAQ Icon</h3>
                                <h3>During testing, users messaged Tia with questions instead of using the FAQ icon.</h3>
                                <h3>Tia has evolved enough to no longer require this icon.</h3>
                                <div className="row align-items-start">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="image-content">
                                            <img src={design3} alt="Design 3" className="bottom-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Close icon</h3>
                            <h3>During the testing, we found that some users confused the “chevron close” button with the “chevron back to chat” button</h3>
                            <div className="row align-items-start">
                                <div className="col-md-12">
                                    <div className="image-content">
                                        <img src={design3closeicon} alt="Close Icon" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                            <h3>Refresh icon</h3>
                            <h3>During the testing, we found that some users did not notice the icon. The icon was also not aligned with RBC’s branding.</h3>
                            <div className="row align-items-start">
                                <div className="col-md-12">
                                    <div className="image-content">
                                        <img src={design3refreshicon} alt="Refresh Icon" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Testing</h3>
                            <h3>Along with the other user testing sessions, we observed how our users interacted with the different iterations</h3>
                            <h3>We found that users:</h3>
                            <h3>Preferred the close icon</h3>
                            <h3>Used the refresh button naturally during the given scenarios</h3>
                            <h3>Through these insights, we moved forward with these new UI placements</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-8 col-md-12">
                                    <div className="image-content">
                                        <img src={design3final} alt="Final Design" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                            <h3>4. Employees wanted somewhere to view their past conversations with Tia</h3>
                            <h3>Until we are able to fully log the chat history, create a transcript feature</h3>
                        </div>
                        <div className="text-content">
                            <h3>Exploration 1: A link to email their transcript is added to certain conversation flows.</h3>
                            <h3>✅ Visible for users when they would need it most</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-4 col-md-8">
                                    <div className="image-content">
                                        <img src={design4exploration1} alt="Design Exploration 1" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Exploration 2: Email transcript button is located in the menu, which will contain more features later on.</h3>
                            <h3>✅ Users can save their transcript at any time</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-8 col-md-12">
                                    <div className="image-content">
                                        <img src={design4exploration2} alt="Design Exploration 2" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Testing</h3>
                            <h3>We hosted 6 testing sessions to observe how our users interacted with these changes. We also spoke with the tech support team to understand how a transcript may help them.</h3>
                            <h3>We found that users:</h3>
                            <h3>Preferred having both options.</h3>
                            <h3>Don’t think it’s necessary for most conversations.</h3>
                            <h3>The menu seems too empty.</h3>
                            <h3>We decided to move forward with the email transcript feature within the flow, but decided not to add a menu until we have more features that require a full menu.</h3>
                            <h3>5. How can we comply with Bill 96?</h3>
                            <h3>Until French is supported, create a temporary solution for Tia in French.</h3>
                        </div>
                        <div className="text-content">
                            <h3>Exploration 1: If the user’s preferred language is French... send the user directly to a live agent chat</h3>
                            <h3>✅ Faster option if their goal is to converse in French</h3>
                            <h3>❌ Users would not be given the option to speak to Tia in english</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-4 col-md-8">
                                    <div className="image-content">
                                        <img src={design5exploration1} alt="Exploration 1" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>Exploration 2: If the user’s preferred language is French... Ask the user if they would like to switch to english first before sending the user directly to a live agent chat</h3>
                            <h3>❌ Slightly longer flow if their goal is to converse in French</h3>
                            <h3>✅ Users would not be given the option to speak to Tia in english</h3>
                            <div className="row align-items-start">
                                <div className="col-lg-6 col-md-12">
                                    <div className="image-content">
                                        <img src={design5exploration2} alt="Exploration 2" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                            <h3>We need to understand - what is the goal of a user that has French set as their preferred language.</h3>
                            <h3>How can this align with our goal of onboarding users to Tia?</h3>
                            <h3>And what exactly is the goal of a user that has French set as their preferred language when they are looking for technology support? What do they prefer?</h3>
                            <h3>To figure this out, I connected with the conversation designers and the technology support team to figure out the flow of a French user when interacting with the help desk</h3>
                            <h3>Calling the french technology support desk is much faster than English - users have a short wait time.</h3>
                            <h3>However, there are less french agents on live chat, wait times may be longer if there are region specific technology issues</h3>
                            <h3>This means that it does not make sense to send the user directly to the live agent chat, instead, we should also provide the phone numbers to the service desk.</h3>
                            <h3>I also took into account one important aspect - We need to align this with our 2nd design goal - to increase retention and onboard more users to Tia.</h3>
                            <h3>Since our ultimate goal is to familiarize users with our product and encourage them to use it, it does not make sense to redirect them to technical support.</h3>
                            <h3>We decided to move forward with the 2nd option, as this option takes both our findings with the tech support desk to provide the phone number but also our goal of onboarding users into account.</h3>
                            <div className="row align-items-start">
                                <div className="col-md-12">
                                    <div className="image-content">
                                        <img src={design5final} alt="Final Design" className="bottom-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-content">
                            <h3>6. How can we follow RBC’s internal brand guidelines?</h3>
                            <h3>Update the design and work in conjunction with the brand team.</h3>
                            <h3>The final task is to redesign the visual UI to align with RBC's brand.</h3>
                            <h3>The palette was chosen based on RBC's main colours. As the RBC blue is commonly used internally, we opted to use the darker blue as the highlight colour instead. This would also improve the visual accessibility.</h3>
                            <h3>Links and text sizes were updated based on RBC's visual hierarchy guidelines.</h3>
                            <h3>RBC's components were used for the form input box and list elements.</h3>
                        </div>
                    </div>
                </div>
            </div>





            <div className="large-content-first">

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>The Final Design</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>We successfully launched Tia to everyone in the enterprise on September 15!</h3>
                            <h3>User abandon rate decreased from 25% last month to 6%.</h3>
                            <h3>Daily interactions with Tia increased by 16 times.</h3>
                            <h3>Around 10000 employees interact with the Tia everyday</h3>
                        </div>

                        <div className="row align-items-start">
                            <div className="col-md-6">
                                <div className="image-content">
                                    <img src={finalOldVersion} alt="Old Version" className="bottom-image" />
                                    {/* <img src={finalNewVersion} alt="New Version" className="bottom-image" /> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image-content">
                                    {/* <img src={finalOldVersion} alt="Old Version" className="bottom-image" /> */}
                                    <img src={finalNewVersion} alt="New Version" className="bottom-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="large-content-first">
                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>My Reflection</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Working with chat support tools made me realize how strong the correlation is between conversation design and UX design.</h3>
                            <h3>Throughout my internship, I've actively collaborated with conversation designers, focusing not only on this project but also on consistently refining the wording and mapping out the flows to ensure the best user experience.</h3>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>Impostor Syndrome</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>This was the first time I had ever been the design lead for a project that would be launched to such a large range of employees. This was also the first time I had ever worked at a corporate company. At the start, I started having feelings of self-doubt that I was the right person to lead the project. I felt slightly intimidated to be working at a financial institution and wasn’t sure if I would know how RBC’s employees operate well enough.</h3>
                            <h3>After receiving advice from internal designers and meeting different employees across the bank when conducting the first stage of user testing, I started to gain more confidence in myself. Instead of comparing how capable I was, I found that any conversation I had became an opportunity for me to listen and learn more. I began to feel more comfortable with not knowing everything, and finding out more as I progressed.</h3>
                            <h3>It’s important to remember that we will always be faced with new challenges, there's nothing wrong with learning new things and asking questions. :)</h3>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-md-4 left-column">
                        <div className="text-content">
                            <h2>In the sight of Launching</h2>
                        </div>
                    </div>

                    <div className="col-md-8 right-column">
                        <div className="text-content">
                            <h3>Last year, slightly after launch, I was asked if I was proud of this project. I have to say that I was. Tia's webpage and branding reflect all of my values. It is purposeful, simple, and places usability first. I recently attended Collision, Toronto's technology conference, and bumped into a lot of employees at RBC. They all know Tia well and it helped them with their technology issues, which made me very happy!</h3>
                            <h3>I am very proud of both what I accomplished for employees and everything I learned along the way.</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;