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

const MangoTrees = () => {
    const articles = [
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
            title: "Fakta menarik buah mangga",
            text: "Jelajahi fakta menarik buah mangga.",
            img: icon1Image,
            href: "/faktaMangga"
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
            <div className="container grow py-5">
                <h2 className="text-center mb-4">Cara Menanam Pohon Mangga</h2>
                <p className="text-center text-muted mb-5">Pelajari tips dan trik untuk menanam pohon mangga Anda sendiri di rumah.</p>

                <div className="row align-items-center">
                    {/* Gambar Utama */}
                    <div className="col-lg-5 text-center mb-4">
                        <img
                            src={icon4Image}
                            alt="Grow Mango Trees"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>

                    {/* Konten Utama */}
                    <div className="col-lg-7">
                        <div className="grow-step mb-4">
                            <h5>1. Pilih Varietas yang Tepat</h5>
                            <p>
                                Pilih varietas mangga yang sesuai dengan iklim dan ruang yang tersedia. Varietas kerdil sangat cocok untuk taman kecil atau pot.
                            </p>
                        </div>
                        <div className="grow-step mb-4">
                            <h5>2. Siapkan Tanah</h5>
                            <p>
                                Pohon mangga tumbuh baik di tanah yang memiliki drainase baik dengan pH antara 5,5 hingga 7. Gali lubang yang dalam, tambahkan kompos organik, dan pastikan lokasi mendapat sinar matahari penuh.
                            </p>
                        </div>
                        <div className="grow-step mb-4">
                            <h5>3. Tanam Bibit atau Anakan</h5>
                            <p>
                                Jika memulai dari biji, rendam dalam air selama 24 jam dan tanam di tanah yang lembap. Alternatifnya, tanam anakan yang sehat dengan memastikan sambungan okulasi berada di atas permukaan tanah.
                            </p>
                        </div>
                        <div className="grow-step">
                            <h5>4. Siram dan Beri Mulsa</h5>
                            <p>
                                Siram secara teratur namun hindari penyiraman berlebihan karena pohon mangga tidak menyukai tanah yang tergenang air. Tambahkan lapisan mulsa untuk menjaga kelembapan dan mencegah gulma.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tips Tambahan */}
                <div className="mt-5">
                    <h3 className="text-center mb-4" style={{ color: "#eebd2b" }}>Tips Tambahan untuk Pertumbuhan yang Sukses</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="tip-card shadow-sm p-3">
                                <h6 className="tip-title">Pemupukan yang Tepat</h6>
                                <p>
                                    Gunakan pupuk seimbang selama masa pertumbuhan dan kurangi pemupukan pada musim dingin.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="tip-card shadow-sm p-3">
                                <h6 className="tip-title">Pemangkasan untuk Kesehatan</h6>
                                <p>
                                    Pangkas ranting yang mati atau terlalu rimbun agar sinar matahari dan udara dapat bersirkulasi, mendukung pertumbuhan yang sehat.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="tip-card shadow-sm p-3">
                                <h6 className="tip-title">Pengendalian Hama</h6>
                                <p>
                                    Waspadai hama seperti kutu putih dan penghisap mangga. Gunakan insektisida alami atau minyak nimba untuk mengusir mereka.
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

export default MangoTrees;
