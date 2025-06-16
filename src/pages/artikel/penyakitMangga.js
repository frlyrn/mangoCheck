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

const PenyakitMangga = () => {
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
    ];

    return (
        <div>
            <NavBar />

            <div className="container facts py-5">
                <h2 className="text-center mb-4">Penyakit & Hama Tanaman Mangga</h2>
                <p className="text-center text-muted mb-5">Penyakit dan hama yang umum menyerang tanaman mangga serta cara mengatasinya.</p>

                <div className="row konten-fact align-items-center">
                    <div className="col-lg-5 text-center mb-4">
                        <img
                            src={icon6Image}
                            alt="Mango Icon"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>

                    {/* Fakta Utama */}
                    <div className="col-lg-7">
                        <div className="highlight-box mb-4">
                            <h5>1. Penyakit Jamur</h5>
                            <br></br>
                            <h6>Penyakit Antraknos (Colletotrichum gloeosporioides)</h6>
                            <p>Penyakit ini ditandai dengan bercak-bercak hitam pada daun, batang, dan buah. Jika tidak diatasi, dapat menyebabkan kerusakan yang signifikan. Cara mengatasi:</p>
                            <ul>
                                <li>Gunakan fungisida yang sesuai, seperti fungisida berbahan aktif propikonazol.</li>
                                <li>Jaga kebersihan area sekitar tanaman dan buang bagian tanaman yang terinfeksi.</li>
                            </ul>
                            <h6>Penyakit Embun Tepung (Oidium mangiferae)</h6>
                            <p>Penyakit ini muncul sebagai lapisan putih pada daun dan dapat menghambat pertumbuhan tanaman. Cara mengatasi:</p>
                            <ul>
                                <li>Semprotkan fungisida berbahan aktif sulfur atau karbendazim.</li>
                                <li>Pastikan sirkulasi udara yang baik di sekitar tanaman.</li>
                            </ul>
                        </div>
                        <div className="highlight-box mb-4">
                            <h5>2. Penyakit Bakteri</h5>
                            <br></br>
                            <h6>Penyakit Bakteri Bercak Daun (Xanthomonas campestris)</h6>
                            <p>Penyakit ini menyebabkan bercak-bercak kuning pada daun yang dapat menyebar dan mengakibatkan kerontokan daun. Cara mengatasi:</p>
                            <ul>
                                <li>Gunakan pestisida berbahan aktif tembaga.</li>
                                <li>Lakukan pemangkasan pada bagian yang terinfeksi untuk mencegah penyebaran.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Fakta Tambahan */}
                <div className="mt-5">
                    <h3 className="mb-4 text-center" style={{ color: "#eebd2b" }}>Ketahui Lebih Banyak</h3>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h5 className="fact-title">3. Hama</h5>
                                <br></br>
                                <h6>Ulat Mangga (Graptolius spp.)</h6>
                                <p>Ulat ini dapat merusak daun dan buah mangga, menyebabkan kerusakan yang signifikan. Cara mengatasi:</p>
                                <ul>
                                    <li>Gunakan insektisida yang sesuai, seperti insektisida berbahan aktif klorpirifos.</li>
                                    <li>Lakukan pemantauan rutin untuk mendeteksi serangan hama lebih awal.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h5 className="fact-title">Pencegahan Umum</h5>
                                <br></br>
                                <ul>
                                    <li>Pemeliharaan Tanaman: Pastikan tanaman mendapatkan perawatan yang baik, termasuk penyiraman, pemupukan, dan pemangkasan yang tepat.</li>
                                    <li>Kebersihan Kebun: Jaga kebersihan area kebun dengan membersihkan sisa-sisa tanaman yang terinfeksi.</li>
                                    <li>Rotasi Tanaman: Lakukan rotasi tanaman untuk mengurangi risiko serangan hama dan penyakit.</li>
                                </ul>
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

export default PenyakitMangga;
