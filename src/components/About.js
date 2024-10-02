import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';  // Import custom styles
import './Home.css';
import './Content.css';
function About() {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = window.innerWidth / 2; // Adjust width for the graph (half of the screen)
        const height = window.innerHeight;

        // Clear the SVG before drawing
        svg.selectAll('*').remove();

        svg.attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet");

        const nodes = [
            { id: 1, label: "Studied at the OCAD University" },
            { id: 2, label: "Worked as a Conversation and UX Designer at RBC" },
            { id: 3, label: "Worked as a UX Designer at Nokia" },
            { id: 4, label: "Studied abroad at the Hong Kong Polytechnic University" },
            { id: 5, label: "Working as an Interaction Designer/Researcher at Huawei R&D labs" },
            { id: 6, label: "Worked as a Designer at Jack/Cover Health" },
            { id: 7, label: "Co-redesigned the Pang Jai Fabric Market" },
            // { id: 8, label: "Read Speculative Design" },
            // { id: 9, label: "Category winner at several hackathons" },
            // { id: 14, label: "Winner of the 2021 ADA mentorship program" },
            { id: 10, label: "Started HCI coding projects" },
            { id: 11, label: "Co-founded the UX Student Association" },
            { id: 12, label: "Founded the OCADU Undergraduate Research Association" },
            // { id: 13, label: "Read Design Justice and 99% Invisible Cities" },
            { id: 15, label: "Human-centred design" },
            { id: 16, label: "Research" },
            { id: 17, label: "Co-Design" },
            { id: 18, label: "Speculative Innovation" }
        ];

        const links = [
            { source: 1, target: 2 },
            { source: 2, target: 3 },
            { source: 3, target: 4 },
            { source: 4, target: 5 },
            { source: 1, target: 6 },
            { source: 4, target: 7 },
            // { source: 1, target: 8 },
            // { source: 1, target: 9 },
            { source: 1, target: 10 },
            { source: 1, target: 11 },
            { source: 1, target: 12 },
            // { source: 7, target: 13 },
            // { source: 9, target: 14 },
            // { source: 1, target: 9 },
            { source: 15, target: 1 },
            { source: 15, target: 2 },
            { source: 15, target: 3 },
            { source: 15, target: 5 },
            { source: 15, target: 7 },
            { source: 15, target: 11 },
            { source: 16, target: 5 },
            { source: 16, target: 2 },
            { source: 16, target: 12 },
            // { source: 17, target: 13 },
            { source: 17, target: 7 },
            // { source: 18, target: 8 },
            { source: 18, target: 5 },
            { source: 18, target: 10 }
        ];

        // Main force simulation for nodes and links
        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(2))  // Spread out linked nodes
            .force("charge", d3.forceManyBody().strength(-100))  // Strong repulsion to scatter nodes
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide().radius(90))  // Avoid node overlap
            .on("tick", ticked);

        // Create link elements
        const link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("class", "link");

        // Create node elements
        const node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", 4)
            .call(d3.drag()
                .on("start", dragStarted)
                .on("drag", dragged)
                .on("end", dragEnded))
            .on("mouseover", function (event, d) {
                simulation.alphaTarget(0.3).restart();
                d.fx = d.x - (Math.random() * 10 - 5);  // Slight random move on hover
                d.fy = d.y - (Math.random() * 10 - 5);
            })
            .on("mouseout", function (event, d) {
                simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            });

        // Create text labels
        const label = svg.append("g")
            .attr("class", "labels")
            .selectAll("text")
            .data(nodes)
            .enter().append("text")
            .attr("class", d => [15, 16, 17, 18].includes(d.id) ? "label header-label" : "label")
            .attr("dx", 12)
            .attr("dy", ".35em")
            .text(d => d.label);

        // Separate simulation for labels to prevent overlap
        const labelForce = d3.forceSimulation(nodes)
            .force("labelCollision", d3.forceCollide().radius(30))  // Prevent label overlap
            .on("tick", () => {
                label
                    .attr("x", d => d.x)
                    .attr("y", d => d.y);
            });

        // Function to update positions on each tick of the simulation
        function ticked() {
            const padding = 10;  // Adjust this value to increase or decrease padding

            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x = Math.max(padding, Math.min(d.x, width - padding)))  // Clamp x position with padding
                .attr("cy", d => d.y = Math.max(padding, Math.min(d.y, height - padding))); // Clamp y position with padding

            label
                .attr("x", d => d.x)
                .attr("y", d => d.y);
        }

        // Drag functions to allow nodes to be dragged
        function dragStarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = Math.max(0, Math.min(event.x, width));  // Clamp x position
            d.fy = Math.max(0, Math.min(event.y, height));  // Clamp y position
        }


        function dragEnded(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

    }, []);

    return (
        <div className='background'>
            <Container className="about-container" >
                <Row >
                    <Col md={4} className="d-flex flex-column align-items-start" style={{ padding: '6rem 0 0 0' }} >
                        <h1>Hello!</h1>
                        <h3>
                            I am an Interaction Designer at Huawei’s R&D Human Machine Interaction lab. I research and design how digital and physical products interact with humans by implementing user interfaces, haptics, voice, text, and gesture solutions.
                            Previously, I worked at the Royal Bank of Canada and Nokia. On the side, I am the President of the OCADU Undergraduate Technology Research Association and Co-Founder of the UX Student Association.
                            I am reading Speculative Everything by Anthony Dunne and Fiona Raby.
                        </h3>
                        <h3>
                            I am open to virtual or in-person chats over coffee. Feel free to reach out via LinkedIn or Email.
                        </h3>
                    </Col>
                    <Col md={8} className="d-flex justify-content-end align-items-end" >
                        <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: 'calc(100vh - 20px)' }}></svg>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;