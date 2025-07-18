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

const MangoFacts = () => {
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

            <div className="container facts py-5">
                <h2 className="text-center mb-4">Fakta Menarik Tentang Mangga</h2>
                <p className="text-center text-muted mb-5">Temukan dunia mangga yang menakjubkan!</p>

                <div className="row konten-fact align-items-center">
                    <div className="col-lg-5 text-center mb-4">
                        <img
                            src={icon1Image}
                            alt="Mango Icon"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>

                    {/* Fakta Utama */}
                    <div className="col-lg-7">
                        <div className="highlight-box mb-4">
                            <h5>1. Raja dari Buah-buahan</h5>
                            <p>
                                Mangga telah mendapatkan julukan sebagai "raja dari buah-buahan" karena rasanya yang tak tertahankan, sejarah yang kaya, dan signifikansi budaya. Di India, mangga sangat dihargai dan dirayakan dalam festival.
                            </p>
                        </div>
                        <div className="highlight-box mb-4">
                            <h5>2. Pohon Mangga Hidup Selama Berabad-abad</h5>
                            <p>
                                Pohon mangga bukan hanya keajaiban yang menghasilkan buah tetapi dapat hidup selama ratusan tahun, terus memproduksi buah yang lezat sepanjang masa hidupnya.
                            </p>
                        </div>
                        <div className="highlight-box mb-4">
                            <h5>3. Makanan Super Tropis</h5>
                            <p>
                                Kaya akan antioksidan, mangga adalah sumber vitamin dan mineral yang membantu meningkatkan sistem imun, memperbaiki pencernaan, dan mempromosikan kulit yang bercahaya.
                            </p>
                        </div>
                        <div className="highlight-box">
                            <h5>4. Lebih dari 500 Varietas Mangga</h5>
                            <p>
                                Dengan lebih dari 500 varietas yang dikenal, mangga hadir dalam berbagai bentuk, ukuran, dan rasa. Dari Alphonso hingga Haden, setiap jenis menawarkan pengalaman rasa yang unik.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fakta Tambahan */}
                <div className="mt-5 text-center">
                    <h3 className="mb-4" style={{ color: "#eebd2b" }}>Ketahui Lebih Banyak Tentang Mangga</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Kebun Mangga Tertua</h6>
                                <p>
                                    Kebun mangga tertua di dunia yang dikenal berusia lebih dari 300 tahun dan masih berkembang di India!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Mangga Terbesar di Dunia</h6>
                                <p>
                                    Ditanam di Filipina, mangga terbesar di dunia memiliki berat 3,435 kilogram (7,57 pon).
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Status Buah Nasional</h6>
                                <p>
                                    Mangga adalah buah nasional tidak hanya India tetapi juga Pakistan dan Filipina!
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

export default MangoFacts;
