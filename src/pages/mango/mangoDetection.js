import React, { useState } from "react";
import NavBar from "../../components/layout/navbar/navbar";
import { Container, Row, Col, Form, Button, Alert, Image } from "react-bootstrap";
import "./mangoDetection.css";

const MangoDetection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [detectionResult, setDetectionResult] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setDetectionResult(null); // Reset result on new upload
        }
    };

    const handleSubmit = () => {
        // Simulate detection logic (replace this with your backend call)
        setTimeout(() => {
            setDetectionResult({
                ripeness: "Ripe",
                confidence: "95%",
            });
        }, 2000); // Simulate processing time
    };

    return (
        <div>
            <NavBar />
            <Container className="deteksi py-5">
                <Row className="mb-4 text-center">
                    <Col>
                        <h1 className="display-4">Mango Ripeness Detection</h1>
                        <p className="lead">Upload an image of your mango and let our system analyze its ripeness.</p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload Mango Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </Form.Group>
                            <Button
                                variant="warning"
                                disabled={!selectedImage}
                                onClick={handleSubmit}
                                className="btn-detect"
                            >
                                Detect Ripeness
                            </Button>
                        </Form>
                        {selectedImage && (
                            <div className="mt-4">
                                <h5>Selected Image:</h5>
                                <Image
                                    src={selectedImage}
                                    alt="Selected Mango"
                                    className="uploaded-image"
                                    fluid
                                />
                            </div>
                        )}
                    </Col>
                </Row>

                {detectionResult && (
                    <Row className="mt-5">
                        <Col md={8} className="mx-auto">
                            <Alert variant="success" className="text-center">
                                <h4>Detection Result</h4>
                                <p><strong>Ripeness:</strong> {detectionResult.ripeness}</p>
                                <p><strong>Confidence:</strong> {detectionResult.confidence}</p>
                            </Alert>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default MangoDetection;
