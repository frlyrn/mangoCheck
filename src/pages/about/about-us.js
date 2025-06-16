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
                                Di MangoCheck, kami sangat mencintai salah satu buah paling disukai di dunia – mangga. Misi kami adalah merevolusi cara mangga dipanen, dikonsumsi, dan diperdagangkan dengan menyediakan sistem deteksi kematangan mangga yang cerdas dan mudah digunakan.
                            </p>
                        </Col>
                    </Row>
                </Container>


                <div className='container-fluid'>
                    <Row className="mb-5">
                        <Col className="technology-section">
                            <h2>Teknologi Kami</h2>
                            <p>
                                Kami menggunakan kecerdasan buatan (AI) canggih untuk menganalisis kematangan mangga dari gambar. Dengan hanya mengunggah foto mangga, sistem kami yang didukung AI mendeteksi dan memberikan analisis yang akurat tentang kematangan buah tersebut. Ini membantu petani untuk menentukan waktu panen yang terbaik, memungkinkan konsumen memilih mangga yang ideal, dan memberikan wawasan berharga kepada bisnis tentang kualitas produk.
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className='container'>
                    <Row className="why-choose-section">
                        <Col>
                            <h2>Mengapa Memilih MangoCheck?</h2>
                            <ul>
                                <li><strong>Deteksi Kematangan yang Akurat:</strong> Sistem AI kami menjamin hasil yang tepat setiap saat, sehingga Anda dapat menikmati mangga pada tingkat kematangan yang sempurna.</li>
                                <li><strong>Menghemat Waktu dan Mengurangi Limbah:</strong> Dengan mengetahui waktu ideal untuk konsumsi atau panen, kami membantu mengurangi jumlah mangga yang belum matang atau terlalu matang.</li>
                                <li><strong>Efisiensi untuk Bisnis:</strong> Baik Anda petani, distributor, atau pengecer, teknologi kami membantu meningkatkan kualitas produk dan efisiensi di pasar.</li>
                                <li><strong>Mudah Digunakan:</strong> Teknologi yang sederhana dan mudah diakses oleh siapa saja—baik pecinta mangga maupun profesional.</li>
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
