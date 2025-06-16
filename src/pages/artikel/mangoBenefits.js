import NavBar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import "../artikel/mangoFacts.css";
import icon1Image from "../../images/artikel-icon1.jpg";
import icon2Image from "../../images/artikel-icon2.jpg"
import icon3Image from "../../images/artikel-icon3.jpg"
import icon4Image from "../../images/artikel-icon4.jpg"
import icon5Image from "../../images/artikel-icon5.jpg"
import icon6Image from "../../images/artikel-icon6.jpg"
import { Carousel } from "react-bootstrap";

const MangoBenefits = () => {
    const articles = [
        {
            title: "Top 10 Jenis Mangga",
            text: "Jelajahi 10 jenis mangga terbaik.",
            img: icon3Image,
            href: "/jenisMangga"
        },
        {
            title: "Fakta menarik buah mangga",
            text: "Jelajahi fakta menarik buah mangga.",
            img: icon1Image,
            href: "/faktaMangga"
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
            <NavBar />

            <div className="container benefits py-5">
                <h2 className="text-center mb-4">Manfaat Kesehatan dari Mangga</h2>
                <p className="text-center text-muted mb-5">Temukan manfaat kesehatan dari makan mangga.</p>

                <div className="row align-items-center">
                    {/* Gambar Utama */}
                    <div className="col-lg-5 text-center mb-4">
                        <img
                            src={icon2Image}
                            alt="Mango Health Benefits"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>

                    {/* Konten Utama */}
                    <div className="col-lg-7">
                        <div className="benefit-box mb-4">
                            <h5>1. Meningkatkan Sistem Kekebalan Tubuh</h5>
                            <p>
                                Mangga kaya akan Vitamin C, A, dan antioksidan lainnya yang membantu memperkuat sistem kekebalan tubuh, melindungi Anda dari penyakit umum seperti flu dan pilek.
                            </p>
                        </div>
                        <div className="benefit-box mb-4">
                            <h5>2. Meningkatkan Pencernaan</h5>
                            <p>
                                Enzim dalam mangga, seperti amilase, membantu memecah karbohidrat kompleks dan protein, mendukung sistem pencernaan yang sehat. Kandungan seratnya juga mencegah sembelit.
                            </p>
                        </div>
                        <div className="benefit-box mb-4">
                            <h5>3. Mendukung Kesehatan Kulit</h5>
                            <p>
                                Kaya akan Vitamin A dan Vitamin E, mangga membantu menjaga kesehatan kulit, mengurangi jerawat, dan memberikan rona alami. Antioksidannya melawan radikal bebas yang menyebabkan penuaan dini.
                            </p>
                        </div>
                        <div className="benefit-box">
                            <h5>4. Menjaga Kesehatan Mata</h5>
                            <p>
                                Mangga adalah sumber Vitamin A dan beta-karoten yang sangat baik, penting untuk menjaga penglihatan yang baik dan mencegah mata kering.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fakta Tambahan */}
                <div className="mt-5">
                    <h3 className="text-center mb-4" style={{ color: "#eebd2b" }}>Alasan Lain untuk Mengonsumsi Mangga</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Kaya Antioksidan</h6>
                                <p>
                                    Mangga mengandung antioksidan kuat seperti zeaxanthin dan lutein, yang melindungi tubuh Anda dari radikal bebas berbahaya.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Mendukung Kesehatan Jantung</h6>
                                <p>
                                    Kalium dan magnesium dalam mangga membantu mengatur tekanan darah dan mendukung kesehatan kardiovaskular.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Membantu Menjaga Berat Badan</h6>
                                <p>
                                    Meski manis, mangga rendah kalori dan tinggi serat, sehingga cocok sebagai camilan yang membuat kenyang untuk pengelolaan berat badan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-section container-fluid py-5">
                <h2 className="text-center my-5" style={{ color: "#346c4e" }}
                >Jelajahi Artikel Lainnya</h2>
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

            <Footer />
        </div>
    );
};

export default MangoBenefits;
