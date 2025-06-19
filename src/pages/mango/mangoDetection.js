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
import icon5Image from "../../images/artikel-icon5.jpg"
import icon6Image from "../../images/artikel-icon6.jpg"

const MangoDetection = () => {
    const articles = [
        {
            title: "Fakta menarik buah mangga",
            text: "Jelajahi fakta menarik buah mangga.",
            img: icon1Image,
            href: "/faktaMangga"
        },
        {
            title: "Top 10 Jenis Mangga",
            text: "Jelajahi 10 jenis mangga terbaik.",
            img: icon3Image,
            href: "/jenisMangga"
        },
        {
            title: "Manfaat Kesehatan",
            text: "Menyingkap manfaat kesehatan dari makan mangga.",
            img: icon2Image,
            href: "/manfaatMangga"
        },
        {
            title: "Menanam Pohon Mangga",
            text: "Tips dan trik menanam pohon mangga.",
            img: icon4Image,
            href: "/menanamPohonMangga"
        },
        {
            title: "Resep Olahan Mangga",
            text: "Intip beberapa resep yang dapat anda coba.",
            img: icon5Image,
            href: "/resepOlahanMangga"
        },
        {
            title: "Penyakit dan Hama Tanaman Mangga",
            text: "temukan cara mengatasinya.",
            img: icon6Image,
            href: "/penyakitHamaTanamanMangga"
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
        formData.append("file", imageFile); 

        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            };

            const response = await axios.post(
                "https://mango-backend-374006059960.asia-southeast2.run.app/predict",
                formData,
                config
            );

            setDetectionResult(response.data); 
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
                        <h1 className="display-4 font-weight-bold">Deteksi Kematangan Buah Mangga</h1>
                        <p className="lead text-secondary">Unggah gambar mangga Anda dan biarkan sistem kami menganalisis kematangannya.</p>
                    </Col>
                </Row>

                <Row className="justify-content-between">
                    <Col md={5} className="text-center">
                        {selectedImage && (
                            <div className="mt-4 mb-3">
                                <h5 className="text-success">Mangga yang dipilih:</h5>
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
                                <Form.Label>Unggah Gambar Buah Mangga</Form.Label>
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
                                {loading ? "Processing..." : "Deteksi Kematangan"}
                            </Button>
                        </Form>

                        {/* History Button */}
                        <div className="text-center mt-4">
                            <Button
                                href="/historyDetection"
                                variant="outline-primary"
                                className="btn-history"
                            >
                                Lihat Semua Riwayat Deteksi Anda
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
                                <h4 className="text-center font-weight-bold">Hasil Deteksi</h4>
                                <p><strong>Kematangan:</strong> {detectionResult.result}</p>
                                <p> {detectionResult.suggestion}</p>

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
