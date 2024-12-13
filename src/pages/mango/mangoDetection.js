import React, { useState } from "react";
import NavBar from "../../components/layout/navbar/navbar";
import { Container, Row, Col, Form, Button, Alert, Image } from "react-bootstrap";
import axios from "axios";

import detectImage from "../../images/detect.jpg"
import "./mangoDetection.css";
import Footer from "../../components/layout/footer/footer";
import { Carousel } from "react-bootstrap";
import icon1Image from "../../images/artikel-icon1.jpg"
import icon2Image from "../../images/artikel-icon2.jpg"
import icon3Image from "../../images/artikel-icon3.jpg"
import icon4Image from "../../images/artikel-icon4.jpg"

const MangoDetection = () => {
    const articles = [
        {
            title: "Interesting facts about mangoes",
            text: "Explore fun facts about mangoes.",
            img: icon1Image,
            href: "/mangoFacts"
        },
        {
            title: "Top 10 Mango Varieties",
            text: "Explore the top 10 varieties of mangoes.",
            img: icon3Image,
            href: "/mangoVarieties"
        },
        {
            title: "Health Benefits of Mangoes",
            text: "Uncover the health benefits of eating mangoes.",
            img: icon2Image,
            href: "/mangoBenefits"
        },
        {
            title: "How to Grow Mango Trees",
            text: "Learn tips and tricks for growing your own mango trees at home.",
            img: icon4Image,
            href: "/mangoTrees"
        },
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [detectionResult, setDetectionResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setSelectedImage(URL.createObjectURL(file));
            setDetectionResult(null);
        }
    };

    const handleSubmit = async () => {
        if (!imageFile) return;

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            };

            const response = await axios.post("http://34.101.214.48:3000/predict", formData, config);
            console.log(response.data);

            if (response.data.status === "success") {
                setDetectionResult(response.data.data);
            } else {
                setError("Gagal melakukan deteksi. Silakan coba lagi.");
            }
        } catch (err) {
            console.error("Error during prediction:", err);
            setError("Terjadi kesalahan saat melakukan prediksi. Silakan coba lagi.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavBar />
            <Container className="deteksi py-5">
                <Row className="mb-4 text-center">
                    <Col>
                        <h1 className="display-4 font-weight-bold">Mango Ripeness Detection</h1>
                        <p className="lead text-secondary">Upload an image of your mango and let our system analyze its ripeness.</p>
                    </Col>
                </Row>

                <Row className="justify-content-between">
                    <Col md={5} className="text-center">
                        {selectedImage && (
                            <div className="mt-4 mb-3">
                                <h5 className="text-success">Selected Mango:</h5>
                                <Image
                                    src={selectedImage}
                                    alt="Selected Mango"
                                    className="uploaded-image"
                                    fluid
                                />
                            </div>
                        )}
                        {/* Form */}
                        <Form>
                            <Form.Group className="mb-4">
                                <Form.Label>Upload Mango Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="upload-input"
                                />
                            </Form.Group>
                            <Button
                                variant="warning"
                                disabled={!selectedImage || loading}
                                onClick={handleSubmit}
                                className="btn-detect w-100"
                            >
                                {loading ? "Processing..." : "Detect Ripeness"}
                            </Button>
                        </Form>

                        {/* History Button */}
                        <div className="text-center mt-4">
                            <Button
                                href="/historyDetection"
                                variant="outline-primary"
                                className="btn-history"
                            >
                                View all your detection history
                            </Button>
                        </div>
                    </Col>

                    <Col md={5} className="d-flex flex-column align-items-center justify-content-center">
                        <div className="result-decoration mb-3">
                            <h5 className="font-weight-bold">How ripe is your mango?</h5>
                            <Image
                                src={detectImage}
                                alt="Mango Icon"
                                className="result-icon"
                                width="50%"
                            />
                        </div>

                        {detectionResult && (
                            <Alert variant="success" className="result-alert">
                                <h4 className="text-center font-weight-bold">Detection Result</h4>
                                <p><strong>Ripeness:</strong> {detectionResult.result}</p>
                                <p><strong>Suggestion:</strong> {detectionResult.suggestion}</p>

                            </Alert>
                        )}

                        {error && (
                            <Alert variant="danger" className="error-alert">
                                {error}
                            </Alert>
                        )}
                    </Col>
                </Row>
            </Container>

            <div>
                <div className="blog-section container-fluid py-5">
                    <h2 className="text-center my-5" style={{ color: "#346c4e" }}
                    >Latest Articles</h2>
                    <Carousel interval={null} indicators={false}>
                        {/* Loop articles in groups of 3 */}
                        {[0, 3].map((startIndex) => (
                            <Carousel.Item key={startIndex}>
                                <div className="row justify-content-center">
                                    {articles.slice(startIndex, startIndex + 3).map((article, index) => (
                                        <div className="col-lg-3 col-md-6 mb-4 artikel" key={index}>
                                            <div className="card">
                                                <img
                                                    src={article.img}
                                                    className="card-img-top"
                                                    alt={`Article ${index + 1}`}
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{article.title}</h5>
                                                    <p className="card-text">{article.text}</p>
                                                    <a href={article.href} className="btn btn-warning">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default MangoDetection;
