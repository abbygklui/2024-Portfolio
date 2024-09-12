import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have this CSS file for custom styles
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';
import image4 from '../assets/img4.png';
import image5 from '../assets/img5.png';
import image6 from '../assets/img6.png';

function Home() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Vertex Shader
        const vertexShader = `
      uniform vec3 lightPosition;
      varying float vDist;

      void main() {
          vec3 transformedPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;

          // Calculate the distance from the light source to the vertex
          float dist = distance(lightPosition, transformedPosition);
          vDist = dist;

          // Apply a warp based on distance
          vec3 direction = normalize(lightPosition - transformedPosition);
          vec3 offset = direction * (1.0 / (dist + 0.1)) * 1.2; // Warp effect
          transformedPosition += offset;

          gl_Position = projectionMatrix * vec4(transformedPosition, 1.0);
      }
    `;

        // Fragment Shader
        const fragmentShader = `
      varying float vDist;
      uniform vec3 lightColor; // Uniform to receive light color

      void main() {
          // Calculate intensity based on distance
          float intensity = 1.0 / (vDist * vDist + 0.1);
          intensity = intensity * 40.0;
          intensity = clamp(intensity, 0.0, 1.0);

          // Apply the light color and intensity to the output color
          vec3 color = lightColor * intensity; // Multiply the light color by the intensity

          gl_FragColor = vec4(color, 1.0); // Use the calculated color for the fragment
      }
    `;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Add a point light to act as the dynamic light source
        const pointLight = new THREE.PointLight(0xffffff, 2, 100);
        pointLight.decay = 1;
        pointLight.castShadow = false;
        scene.add(pointLight);

        const uniforms = {
            lightPosition: { value: new THREE.Vector3(0, 0, 0) },
            lightColor: { value: new THREE.Color(0xffffff) },
        };

        const loader = new FontLoader();
        loader.load(
            'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
            function (font) {
                const textGeometry = new TextGeometry(
                    'Human-computer Interaction Explorer of digital-physical experiences',
                    {
                        font: font,
                        size: 0.2,
                        height: 0.0,
                        curveSegments: 12,
                        bevelEnabled: false,
                    }
                );

                textGeometry.computeBoundingBox();
                const textWidth =
                    textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
                const xPosition = -textWidth / 2;

                const textMaterial = new THREE.ShaderMaterial({
                    vertexShader: vertexShader,
                    fragmentShader: fragmentShader,
                    uniforms: uniforms,
                });

                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                textMesh.position.set(xPosition, 2.5, 0);
                textMesh.castShadow = false;
                scene.add(textMesh);
            }
        );

        camera.position.z = 5;

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setPixelRatio(window.devicePixelRatio / 2);
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
            vector.unproject(camera);
            const dir = vector.sub(camera.position).normalize();
            const distance = -camera.position.z / dir.z;

            const pos = camera.position.clone().add(dir.multiplyScalar(distance));
            pos.z += 1;
            pointLight.position.copy(pos);

            uniforms.lightPosition.value.copy(pos);
        };

        document.addEventListener('mousemove', onMouseMove);

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div className="background">
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
}

export default Home;
