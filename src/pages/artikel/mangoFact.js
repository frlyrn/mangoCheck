import NavBar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import "../artikel/mangoFacts.css";
import icon1Image from "../../images/artikel-icon1.jpg";
import icon2Image from "../../images/artikel-icon2.jpg"
import icon3Image from "../../images/artikel-icon3.jpg"
import icon4Image from "../../images/artikel-icon4.jpg"
import { Carousel } from "react-bootstrap";

const MangoFacts = () => {
    const articles = [
        {
            title: "Top 10 Mango Varieties",
            text: "Explore the top 10 varieties of mangoes.",
            img: icon3Image,
            href: "/mangoVarieties"
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

            <div className="container facts py-5">
                <h2 className="text-center mb-4">Interesting Facts About Mangoes</h2>
                <p className="text-center text-muted mb-5">Discover the amazing world of mangoes!</p>

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
                            <h5>1. Mango: The King of Fruits</h5>
                            <p>
                                Mangoes have earned their title as the "king of fruits" due to their irresistible taste, rich history, and cultural significance. In India, they are deeply cherished and celebrated in festivals.
                            </p>
                        </div>
                        <div className="highlight-box mb-4">
                            <h5>2. Mango Trees Live for Centuries</h5>
                            <p>
                                Mango trees are not just fruit-bearing wonders but can live for hundreds of years, continuing to produce delicious fruits throughout their lifespan.
                            </p>
                        </div>
                        <div className="highlight-box mb-4">
                            <h5>3. A Tropical Superfood</h5>
                            <p>
                                Rich in antioxidants, mangoes are a powerhouse of vitamins and minerals that help boost immunity, improve digestion, and promote glowing skin.
                            </p>
                        </div>
                        <div className="highlight-box">
                            <h5>4. Over 500 Varieties of Mangoes</h5>
                            <p>
                                With over 500 known varieties, mangoes come in all shapes, sizes, and flavors. From Alphonso to Haden, each type offers a unique taste experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fakta Tambahan */}
                <div className="mt-5 text-center">
                    <h3 className="mb-4" style={{ color: "#eebd2b" }}>More Fascinating Mango Facts</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Oldest Mango Orchard</h6>
                                <p>
                                    The world's oldest known mango orchard is over 300 years old and still thriving in India!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">World’s Largest Mango</h6>
                                <p>
                                    Grown in the Philippines, the world’s largest mango weighed 3.435 kilograms (7.57 pounds).
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">National Fruit Status</h6>
                                <p>
                                    Mango is the national fruit of not only India but also Pakistan and the Philippines!
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

export default MangoFacts;
