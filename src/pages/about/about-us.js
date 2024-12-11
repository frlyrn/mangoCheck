import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/layout/navbar/navbar';
import "../about/about.css"
import Footer from '../../components/layout/footer/footer';

const AboutUs = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className="about-us">
                <Container className="py-5">
                    <Row className="text-center mb-5">
                        <Col>
                            <h1 className="display-4">Welcome to MangoCheck!</h1>
                            <p className="lead">
                                At MangoCheck, we are passionate about one of the world's most beloved fruits – the mango. Our mission is to revolutionize the way mangoes are harvested, consumed, and traded by providing an intelligent and easy-to-use mango ripeness detection system.
                            </p>
                        </Col>
                    </Row>
                </Container>


                <div className='container-fluid'>
                    <Row className="mb-5">
                        <Col className="technology-section">
                            <h2>Our Technology</h2>
                            <p>
                                We use state-of-the-art artificial intelligence (AI) to analyze mango ripeness from images. By simply uploading a photo of a mango, our AI-powered system detects and provides an accurate analysis of the fruit's ripeness. This helps farmers to determine the best harvest time, enables consumers to choose the ideal mango, and provides businesses with valuable insights into product quality.
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className='container'>
                    <Row className="why-choose-section">
                        <Col>
                            <h2>Why Choose MangoCheck?</h2>
                            <ul>
                                <li><strong>Accurate Ripeness Detection:</strong> Our AI system ensures precise results every time, so you can enjoy your mango at the perfect ripeness.</li>
                                <li><strong>Save Time and Reduce Waste:</strong> By knowing the ideal time for consumption or harvest, we help reduce the number of underripe or overripe mangoes.</li>
                                <li><strong>Efficiency for Businesses:</strong> Whether you’re a farmer, distributor, or retailer, our technology helps you enhance your product's quality and efficiency in the marketplace.</li>
                                <li><strong>User-Friendly:</strong> Simple and easy-to-use technology that anyone can access—whether you're a mango lover or a professional.</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AboutUs;
