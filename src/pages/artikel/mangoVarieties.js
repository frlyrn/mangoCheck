import NavBar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import "../artikel/mangoFacts.css";
import icon1Image from "../../images/artikel-icon1.jpg";
import icon2Image from "../../images/artikel-icon2.jpg"
import icon3Image from "../../images/artikel-icon3.jpg"
import icon4Image from "../../images/artikel-icon4.jpg"
import { Carousel } from "react-bootstrap";

const MangoVarieties = () => {
    const articles = [
        {
            title: "Interesting facts about mangoes",
            text: "Explore fun facts about mangoes.",
            img: icon1Image,
            href: "/mangoFacts"
        },
        {
            title: "Health Benefits of Mangoes",
            text: "Uncover the health benefits of eating mangoes.",
            img: icon2Image,
            href: "/mangoBenefits"
        },
        {
            title: "How to Grow Mango Trees",
            text: "Learn tips and tricks for growing your own mango trees at home.",
            img: icon4Image,
            href: "/mangoTrees"
        },
    ];

    return (
        <div>
            <NavBar />

            <div className="container varieties py-5">
                <h2 className="text-center mb-4">Top 10 Mango Varieties</h2>
                <p className="text-center text-muted mb-5">Explore the top 10 varieties of mangoes.</p>

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
                                <strong>Alphonso (India):</strong> Known as the "King of Mangoes," Alphonso is celebrated for its rich, creamy texture and sweet flavor.
                            </li>
                            <li>
                                <strong>Haden (USA):</strong> A vibrant red and yellow mango with a slightly tangy flavor and firm flesh.
                            </li>
                            <li>
                                <strong>Carabao (Philippines):</strong> This variety is famous for its extreme sweetness and juiciness, often ranked as the sweetest mango in the world.
                            </li>
                            <li>
                                <strong>Kesar (India):</strong> Known for its saffron-like hue and sweet taste, this variety is often used in desserts.
                            </li>
                            <li>
                                <strong>Tommy Atkins (USA):</strong> A popular variety known for its long shelf life and slightly fibrous texture.
                            </li>
                            <li>
                                <strong>Ataulfo (Mexico):</strong> Also called "Honey Mango," this variety is small, sweet, and buttery.
                            </li>
                            <li>
                                <strong>Keitt (USA):</strong> A large, late-season mango with mild sweetness and low fiber content.
                            </li>
                            <li>
                                <strong>Francis (Haiti):</strong> This mango is bright yellow with green accents and has a spicy, sweet flavor.
                            </li>
                            <li>
                                <strong>Irwin (Australia):</strong> A beautifully colored mango with a smooth texture and balanced sweetness.
                            </li>
                            <li>
                                <strong>Palmer (Brazil):</strong> Known for its elongated shape, mild flavor, and non-fibrous flesh.
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Info Tambahan */}
                <div className="mt-5">
                    <h3 className="text-center mb-4" style={{ color: "#eebd2b" }}>Fun Facts About Mango Varieties</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Longest Season</h6>
                                <p>
                                    The Tommy Atkins variety has one of the longest growing seasons, making it a favorite for exports.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Most Expensive</h6>
                                <p>
                                    The Miyazaki mango from Japan is considered the most expensive variety, costing up to $50 per fruit!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Smallest Mango</h6>
                                <p>
                                    The Ataulfo mango is one of the smallest varieties but packs an incredibly sweet and buttery flavor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-section container-fluid py-5">
                <h2 className="text-center my-5" style={{ color: "#346c4e" }}
                >See More Articles</h2>
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

            <Footer />
        </div>
    );
};

export default MangoVarieties;
