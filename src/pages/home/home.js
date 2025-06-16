import { Button } from "react-bootstrap";
import NavBar from "../../components/layout/navbar/navbar";
import "../home/home.css"
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import icon1Image from "../../images/artikel-icon1.jpg"
import icon2Image from "../../images/artikel-icon2.jpg"
import icon3Image from "../../images/artikel-icon3.jpg"
import icon4Image from "../../images/artikel-icon4.jpg"
import icon5Image from "../../images/artikel-icon5.jpg"
import icon6Image from "../../images/artikel-icon6.jpg"
import Footer from "../../components/layout/footer/footer";

const Home = () => {
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

    return (
        <div>
            <NavBar></NavBar>

            <div className="banner">
                <div className="banner-text">
                    <h5>Mari mulai memeriksa kematangan mangga Anda</h5>
                    <h1>MangoCheck</h1>
                    <p>A Smart Ripeness Detection for Mango</p>
                    <Link to="/deteksiKematangan">
                        <Button variant="outline-light" className="me-2 mt-lg-0 mt-2 banner-button">
                            Mulai Deteksi Kematangan
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="how-it-works-section container my-5">
                <h2 className="text-center mb-5">How It Works</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="mb-3">Bagaimana Cara Menggunakan Website MangoCheck?</h5>

                        <ul>
                            <li>Langkah 1:
                                Login ke akun anda, lakukan registrasi akun bila anda belum mempunyai akun.
                            </li>
                            <li>Langkah 2:
                                Upload gambar buah mangga yang akan di deteksi.
                            </li>
                            <li>Langkah 3:
                                Sistem akan mendeteksi kematangan. Anda akan mendapatkan hasil deteksi kematangan buah mangga anda.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 mt-lg-0 mt-3">
                        <h5 className="mb-3">Keuntungan Menggunakan Website MangoCheck</h5>
                        <ul>
                            <li>Membantu Panen:
                                Sistem ini dapat memudahkan petani untuk menentukan waktu panen, sehingga mereka dapat memanen buah pada tingkat kematangan yang diinginkan untuk kebutuhan pasar.
                            </li>
                            <li>Mengurangi Limbah:
                                <br></br>
                                Dengan mengetahui tingkat kematangan secara akurat, sistem ini membantu untuk menghindari mengonsumsi buah sebelum matang atau setelah terlalu matang, dengan demikian mengurangi limbah.
                            </li>
                            <li>Kecepatan Mengetahui Kematangan
                                <br></br>
                                Bagi konsumen dapat dengan cepat mengetahui tingkat kematangan buah sebelum membeli, sehingga dapat memilih buah yang sesuai dengan kebutuhan dan preferensi mereka. Hal ini membantu menghindari pembelian buah yang belum matang atau sudah terlalu matang.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="blog-section container-fluid py-5">
                <h2 className="text-center my-5" style={{ color: "#346c4e" }}
                >Artikel</h2>
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
                                                <a href={article.href} className="btn btn-warning">Baca Selengkapnya</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;