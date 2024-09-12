import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have this CSS file for custom styles
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';
import image4 from '../assets/img4.png';
import image5 from '../assets/img5.png';
import image6 from '../assets/img6.png';

const ParticleText = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const attractionStrengthRef = useRef(0.3);
    const mouseRadius = 1000; // Adjust this value to control proximity sensitivity

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // canvas.addEventListener('click', () => {
        //     attractionStrengthRef.current = 10; // Increase attraction strength on each click
        // });


        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create an offscreen canvas for text rendering
        const bufferCanvas = document.createElement('canvas');
        const bufferCtx = bufferCanvas.getContext('2d');
        bufferCanvas.width = canvas.width;
        bufferCanvas.height = canvas.height;

        const particles = [];
        const numParticles = 5000;

        const text = "HCI Explorer of Digital-Physical Experiences";

        // Step 1: Draw the text on the offscreen buffer canvas
        bufferCtx.font = '50px Arial';
        bufferCtx.fillStyle = 'white';
        bufferCtx.textAlign = 'center';
        const paddingTop = 150; // Adjust this value for the desired padding from the top

        bufferCtx.fillText(text, canvas.width / 2, paddingTop);


        // Step 2: Get pixel data of the text from the buffer canvas
        const imageData = bufferCtx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Step 3: Map particles to the text pixels and initialize them near their target
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

        // Track the mouse position on the canvas
        const mouseMoveHandler = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = event.clientX - rect.left;
            mouseRef.current.y = event.clientY - rect.top;
        };

        // Increase attraction strength on mousedown
        const mouseDownHandler = () => {
            attractionStrengthRef.current += -0.3; // Increase attraction strength
        };

        // Reset attraction strength to 0.3 on mouseup
        const mouseUpHandler = () => {
            attractionStrengthRef.current = 0.3; // Reset attraction strength
        };

        // Add event listeners for mouse down and up
        window.addEventListener('mousedown', mouseDownHandler);
        window.addEventListener('mouseup', mouseUpHandler);


        // Listen for mouse movement
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

        render(); // Start the animation

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    // return <canvas ref={canvasRef}/>;
    return (
        <div className="background">
            <canvas ref={canvasRef} />
            {/* <div ref={mountRef} className="three-js-container" /> */}

            {/* Overlayed Bootstrap Container for Images and Titles */}
            <div className="overlay-content">
                <Container>
                    <Row className="mt-5">
                        <Col md={4} className="text-center">
                            <Link to="/project1">
                                <img src={image1} alt="Project 1" className="img-fluid w-100" />
                                <h5>Project 1 Title</h5>
                            </Link>
                        </Col>
                        <Col md={4} className="text-center">
                            <Link to="/project2">
                                <img src={image2} alt="Project 2" className="img-fluid w-100" />
                                <h5>Project 2 Title</h5>
                            </Link>
                        </Col>
                        <Col md={4} className="text-center">
                            <Link to="/project3">
                                <img src={image3} alt="Project 3" className="img-fluid w-100" />
                                <h5>Project 3 Title</h5>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={4} className="text-center">
                            <Link to="/project4">
                                <img src={image4} alt="Project 4" className="img-fluid w-100" />
                                <h5>Project 4 Title</h5>
                            </Link>
                        </Col>
                        <Col md={4} className="text-center">
                            <Link to="/project5">
                                <img src={image5} alt="Project 5" className="img-fluid w-100" />
                                <h5>Project 5 Title</h5>
                            </Link>
                        </Col>
                        <Col md={4} className="text-center">
                            <Link to="/project6">
                                <img src={image6} alt="Project 6" className="img-fluid w-100" />
                                <h5>Project 6 Title</h5>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ParticleText;
