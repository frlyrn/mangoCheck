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

const resepOlahan = () => {
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
            title: "Penyakit dan Hama Tanaman Mangga",
            text: "temukan cara mengatasinya.",
            img: icon6Image,
            href: "/penyakitHamaTanamanMangga"
        },
    ];

    return (
        <div>
            <NavBar />

            <div className="container facts py-5">
                <h2 className="text-center mb-4">Resep Olahan Buah Mangga</h2>
                <p className="text-center text-muted mb-5">Beberapa resep olahan yang dapat anda coba!</p>

                <div className="row konten-fact align-items-center">
                    <div className="col-lg-5 text-center mb-4">
                        <img
                            src={icon5Image}
                            alt="Mango Icon"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>

                    {/* Fakta Utama */}
                    <div className="col-lg-7">
                        <div className="highlight-box mb-4">
                            <h5>1. Salad Mangga Segar</h5>
                            <br></br>
                            <h6>Bahan-bahan:</h6>
                            <ul>
                                <li>2 buah mangga matang, potong dadu</li>
                                <li>1/2 buah mentimun, potong dadu</li>
                                <li>1/4 cangkir bawang merah, cincang halus</li>
                                <li>1/4 cangkir daun mint, cincang</li>
                                <li>2 sendok makan air jeruk nipis</li>
                                <li>Garam secukupnya</li>
                            </ul>
                            <h6>Cara membuat</h6>
                            <ol>
                                <li>Campurkan semua bahan dalam mangkuk besar.</li>
                                <li>Tambahkan air jeruk nipis dan garam, aduk rata.</li>
                                <li>Sajikan segera sebagai salad segar.</li>
                            </ol>
                        </div>
                        <div className="highlight-box mb-4">
                            <h5>2. PSmoothie Mangga</h5>
                            <br></br>
                            <h6>Bahan-bahan:</h6>
                            <ul>
                                <li>1 buah mangga matang, kupas dan potong</li>
                                <li>1/2 cangkir yogurt plain</li>
                                <li>1/2 cangkir susu (atau susu almond)</li>
                                <li>1 sendok makan madu (opsional)</li>
                                <li>Es batu secukupnya</li>
                            </ul>
                            <h6>Cara membuat</h6>
                            <ol>
                                <li>Masukkan semua bahan ke dalam blender.</li>
                                <li>Blender hingga halus dan creamy.</li>
                                <li>Tuang ke dalam gelas dan nikmati sebagai minuman segar.</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Fakta Tambahan */}
                <div className="mt-5">
                    <h3 className="mb-4 text-center" style={{ color: "#eebd2b" }}>Ketahui Lebih Banyak Resep Olahan Mangga</h3>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h5 className="fact-title">Puding Mangga</h5>
                                <br></br>
                                <h6>Bahan-bahan:</h6>
                                <ul>
                                    <li>2 buah mangga matang, haluskan</li>
                                    <li>1 cangkir susu</li>
                                    <li>1/2 cangkir gula</li>
                                    <li>1/4 cangkir agar-agar bubuk</li>
                                    <li>1/2 cangkir air</li>
                                </ul>
                                <h6>Cara membuat</h6>
                                <ol>
                                    <li>Campurkan agar-agar bubuk dengan air dalam panci, masak hingga mendidih.</li>
                                    <li>Tambahkan susu, gula, dan mangga halus, aduk rata.</li>
                                    <li>Tuang campuran ke dalam cetakan dan biarkan dingin hingga mengeras.</li>
                                    <li>Sajikan dingin.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h5 className="fact-title">Salsa Mangga</h5>
                                <br></br>
                                <h6>Bahan-bahan:</h6>
                                <ul>
                                    <li>1 buah mangga matang, potong dadu</li>
                                    <li>1/2 cangkir tomat, potong dadu</li>
                                    <li>1/4 cangkir bawang merah, cincang halus</li>
                                    <li>1/4 cangkir daun ketumbar, cincang</li>
                                    <li>1 buah cabai merah, cincang (opsional)</li>
                                    <li>2 sendok makan air jeruk nipis</li>
                                    <li>Garam secukupnya</li>
                                </ul>
                                <h6>Cara membuat</h6>
                                <ol>
                                    <li>Campurkan semua bahan dalam mangkuk.</li>
                                    <li>Aduk rata dan biarkan selama 10 menit agar rasa tercampur.</li>
                                    <li>Sajikan sebagai pelengkap untuk tortilla chips atau hidangan lainnya.</li>
                                </ol>
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

export default resepOlahan;
