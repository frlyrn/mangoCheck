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

const MangoVarieties = () => {
    const articles = [
        {
            title: "Fakta menarik buah mangga",
            text: "Jelajahi fakta menarik buah mangga.",
            img: icon1Image,
            href: "/faktaMangga"
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
            <NavBar />

            <div className="container varieties py-5">
                <h2 className="text-center mb-4">Top 10 Jenis Mangga</h2>
                <p className="text-center text-muted mb-5">Jelajahi 10 varietas mangga teratas.</p>

                <div className="row align-items-center">
                    {/* Gambar Utama */}
                    <div className="col-lg-5 text-center mb-4">
                        <img
                            src={icon3Image}
                            alt="Mango Varieties"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>

                    {/* Daftar Varietas Mangga */}
                    <div className="col-lg-7">
                        <ol className="variety-list">
                            <li>
                                <strong>Alphonso (India):</strong> Dikenal sebagai "Raja Mangga," Alphonso terkenal dengan tekstur yang kaya, creamy, dan rasa manisnya yang khas.
                            </li>
                            <li>
                                <strong>Haden (AS):</strong> Mangga berwarna merah dan kuning cerah dengan rasa agak asam dan daging buah yang padat.
                            </li>
                            <li>
                                <strong>Carabao (Filipina):</strong> Varietas ini terkenal dengan rasa manisnya yang ekstrem dan sangat juicy, sering dianggap sebagai mangga paling manis di dunia.
                            </li>
                            <li>
                                <strong>Kesar (India):</strong> Dikenal dengan warna kuning keemasan seperti saffron dan rasa manisnya, sering digunakan untuk membuat makanan penutup.
                            </li>
                            <li>
                                <strong>Tommy Atkins (AS):</strong> Varietas populer yang dikenal karena masa simpan yang lama dan tekstur yang sedikit berserat.
                            </li>
                            <li>
                                <strong>Ataulfo (Meksiko):</strong> Juga dikenal sebagai "Mangga Madu," varietas ini kecil, manis, dan bertekstur lembut seperti mentega.
                            </li>
                            <li>
                                <strong>Keitt (AS):</strong> Mangga besar yang matang di akhir musim dengan rasa manis yang ringan dan kandungan serat yang rendah.
                            </li>
                            <li>
                                <strong>Francis (Haiti):</strong> Mangga berwarna kuning cerah dengan aksen hijau dan rasa manis pedas.
                            </li>
                            <li>
                                <strong>Irwin (Australia):</strong> Mangga dengan warna cantik, tekstur halus, dan rasa manis yang seimbang.
                            </li>
                            <li>
                                <strong>Palmer (Brasil):</strong> Dikenal dengan bentuknya yang memanjang, rasa yang lembut, dan daging buah yang tidak berserat.
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Info Tambahan */}
                <div className="mt-5">
                    <h3 className="text-center mb-4" style={{ color: "#eebd2b" }}>Fakta Menarik Tentang Varietas Mangga</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Musim Terpanjang</h6>
                                <p>
                                    Varietas Tommy Atkins memiliki salah satu musim tumbuh terpanjang, sehingga menjadi favorit untuk ekspor.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Paling Mahal</h6>
                                <p>
                                    Mangga Miyazaki dari Jepang dianggap sebagai varietas paling mahal, dengan harga hingga $50 per buah!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Mangga Terkecil</h6>
                                <p>
                                    Mangga Ataulfo adalah salah satu varietas terkecil, namun memiliki rasa yang sangat manis dan lembut seperti mentega.
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

export default MangoVarieties;
