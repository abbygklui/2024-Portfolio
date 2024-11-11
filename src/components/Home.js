import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have this CSS file for custom styles
import vid1 from '../assets/ProxUI-Cover.mov';
import tiacover from '../assets/Tia-Cover.png';
import pangjaicover from '../assets/PangJai-Cover.png';
import quannecover from '../assets/Quanne-Cover.png';
import blinkcameracover from '../assets/BlinkCamera-Cover.png';
import thinkingcover from '../assets/Thinking-Cover.png';


const ParticleText = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const attractionStrengthRef = useRef(0.1);
    const mouseRadius = 1000; // Adjust this value to control proximity sensitivity

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showCanvas, setShowCanvas] = useState(true); // Manage canvas visibility

    // Handle resize event to determine if the device is mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mouseDownHandler = () => {
        attractionStrengthRef.current += -0.3; // Increase attraction strength
    };

    const mouseUpHandler = () => {
        attractionStrengthRef.current = 0.1; // Reset attraction strength
    };

    const mouseMoveHandler = (event) => {
        const rect = canvasRef.current.getBoundingClientRect();
        mouseRef.current.x = event.clientX - rect.left;
        mouseRef.current.y = event.clientY - rect.top;
    };

    useEffect(() => {
        if (!showCanvas) return; // Skip the effect if the canvas is hidden or if on mobile


        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (window.innerWidth < 768) {
            canvas.width = 0;
            canvas.height = 0;
            return;

        }




        if (window.innerWidth > 768) {
            canvas.width = 1024;

        }

        if (window.innerWidth > 1024) {
            canvas.width = 1320;

        }
        // Create an offscreen canvas for text rendering
        const bufferCanvas = document.createElement('canvas');
        const bufferCtx = bufferCanvas.getContext('2d');
        bufferCanvas.width = canvas.width;
        bufferCanvas.height = canvas.height;

        const particles = [];
        const numParticles = 5000;

        const text = "HCI Explorer of Digital-Physical Experiences";

        // Step 1: Adjust the font size based on the canvas width
        let fontSize = 40; // Default font size
        if (canvas.width <= 1000) {
            fontSize = 40; // Smaller font size for medium screens (tablet size)
        }
        if (canvas.width <= 800) {
            fontSize = 40; // Even smaller font size for smaller screens
        }

        // Step 2: Draw the text on the offscreen buffer canvas
        bufferCtx.font = `${fontSize}px Arial`;
        bufferCtx.fillStyle = 'white';
        bufferCtx.textAlign = 'center';
        const paddingTop = 150; // Adjust this value for the desired padding from the top

        bufferCtx.fillText(text, canvas.width / 2, paddingTop);

        // Step 3: Get pixel data of the text from the buffer canvas
        const imageData = bufferCtx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Step 4: Map particles to the text pixels and initialize them near their target
        for (let y = 0; y < canvas.height; y += 4) {
            for (let x = 0; x < canvas.width; x += 4) {
                const index = (y * canvas.width + x) * 4;
                if (data[index + 3] > 150) { // Check if the pixel is opaque
                    const randomOffset = 20; // Control how far the particles start from their final position

                    particles.push({
                        // Start near the target position with a small random offset
                        x: x + (Math.random() - 0.5) * randomOffset,
                        y: y + (Math.random() - 0.5) * randomOffset,
                        bx: x, // Base x position (where the text is)
                        by: y, // Base y position (where the text is)
                        vx: 0,
                        vy: 0,
                        radius: 1.5,
                        friction: 0.85,
                        bounciness: 0.5,
                        bouncinessDecayFactor: 0.98,
                        minBounciness: 0.1,
                    });
                }
            }
        }

        // Add event listeners for mouse down and up
        window.addEventListener('mousedown', mouseDownHandler);
        window.addEventListener('mouseup', mouseUpHandler);
        window.addEventListener('mousemove', mouseMoveHandler);

        // Animation loop with mouse interaction
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            particles.forEach(particle => {
                // Lerp particles back to their original positions with bounciness
                const dx = particle.bx - particle.x;
                const dy = particle.by - particle.y;
                const distToBase = Math.sqrt(dx * dx + dy * dy);

                particle.vx += dx * 0.05 * particle.bounciness;
                particle.vy += dy * 0.05 * particle.bounciness;

                // Check if the particle is close to the mouse and repel it
                const mouseDx = particle.x - mouseRef.current.x;
                const mouseDy = particle.y - mouseRef.current.y;
                const distToMouse = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

                if (distToMouse < mouseRadius) {
                    const force = (mouseRadius - distToMouse) / mouseRadius;
                    const angle = Math.atan2(-mouseDy, -mouseDx); // Reverse the direction for attraction

                    particle.vx += Math.cos(angle) * force * attractionStrengthRef.current;
                    particle.vy += Math.sin(angle) * force * attractionStrengthRef.current;

                }

                // Update particle position based on its velocity
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Apply friction to gradually slow down the particles
                particle.vx *= particle.friction;
                particle.vy *= particle.friction;

                // Draw the particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.closePath();
            });

            requestAnimationFrame(render); // Repeat the render process
        };

        render(); // Start the animation loop

        return () => {
            window.removeEventListener('mousedown', mouseDownHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, [showCanvas, isMobile]);


    return (
        <div className="background">
            {/* <Container> */}
            {showCanvas && <canvas ref={canvasRef} />}
            {/* <div ref={mountRef} className="three-js-container" /> */}

            {/* Overlayed Bootstrap Container for Images and Titles */}
            <div className="overlay-content">
                <Container>
                    <Row className="mt-5">
                        <Col md={4} className="text-center">
                            <Link to="/ProximityUI">
                                <video
                                    src={vid1}
                                    className="img-fluid w-100"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    webkit-playsinline="true" // For older iOS devices
                                >
                                    Your browser does not support the video tag.
                                </video>


                                <div className="label text-content">
                                    <h3>Proximity UI</h3>
                                    <p>Research, Development(React), UI</p>
                                </div>

                            </Link>
                        </Col>
                        <Col md={4} className="text-center">
                            <Link to="/Pangjai">
                                <img src={pangjaicover} alt="Project 2" className="img-fluid w-100" />
                                <div className="label text-content">
                                    <h3>Hong Kong Pang Jai Fabric Market</h3>

                                    <p>Research, Social Design</p>
                                </div>

                            </Link>
                        </Col>
                        <Col md={4} className="text-center ">
                            <Link to="/RBCTia">
                                <img src={tiacover} alt="Project 3" className="img-fluid w-100" />
                                <div className="label text-content">
                                    <h3>RBC - Tia the Tech Assistant</h3>

                                    <p>UI/UX Design</p>
                                </div>

                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4} className="text-center">
                            <Link to="/quanne">
                                <img src={quannecover} alt="Project 4" className="img-fluid w-100" />
                                <h3>Designing a Serif Typeface for Modern Editorial Use</h3>
                                {/* <h3>Quanne</h3> */}

                                <p>Research, Typeface Design</p>
                            </Link>
                        </Col>
                        <Col md={4} className="text-center">
                            <Link to="/Thinking">
                                <img src={thinkingcover} alt="Project 4" className="img-fluid w-100" />
                                <h3>Building an tool that uses AI to boost rather than disrupt creativity</h3>

                                <p>Research, Development</p>
                            </Link>
                        </Col>

                        <Col md={4} className="text-center">
                            <Link to="/Blink">
                                <img src={blinkcameracover} alt="Project 4" className="img-fluid w-100" />
                                <h3>Blink!</h3>
                                {/* <h3>Quanne</h3> */}

                                <p>Development(Python), Concept</p>
                            </Link>
                        </Col>

                    </Row>
                </Container>
            </div>
            {/* </Container> */}
        </div>
    );
};

export default ParticleText;
