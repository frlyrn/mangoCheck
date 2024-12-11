import NavBar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import "../artikel/mangoFacts.css";
import icon1Image from "../../images/artikel-icon1.jpg";
import icon2Image from "../../images/artikel-icon2.jpg"
import icon3Image from "../../images/artikel-icon3.jpg"
import icon4Image from "../../images/artikel-icon4.jpg"
import { Carousel } from "react-bootstrap";

const MangoBenefits = () => {
    const articles = [
        {
            title: "Top 10 Mango Varieties",
            text: "Explore the top 10 varieties of mangoes.",
            img: icon3Image,
            href: "/mangoVarieties"
        },
        {
            title: "Interesting facts about mangoes",
            text: "Explore fun facts about mangoes.",
            img: icon1Image,
            href: "/mangoFacts"
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

            <div className="container benefits py-5">
                <h2 className="text-center mb-4">Health Benefits of Mangoes</h2>
                <p className="text-center text-muted mb-5">Uncover the health benefits of eating mangoes.</p>

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
                            <h5>1. Boosts Immunity</h5>
                            <p>
                                Mangoes are packed with Vitamin C, A, and other antioxidants that help strengthen the immune system, protecting you from common illnesses like colds and flu.
                            </p>
                        </div>
                        <div className="benefit-box mb-4">
                            <h5>2. Improves Digestion</h5>
                            <p>
                                Enzymes in mangoes, such as amylase, help break down complex carbohydrates and proteins, promoting a healthy digestive system. Their fiber content also prevents constipation.
                            </p>
                        </div>
                        <div className="benefit-box mb-4">
                            <h5>3. Promotes Healthy Skin</h5>
                            <p>
                                Rich in Vitamin A and Vitamin E, mangoes support skin health, reducing acne and promoting a natural glow. Their antioxidants fight free radicals that cause premature aging.
                            </p>
                        </div>
                        <div className="benefit-box">
                            <h5>4. Supports Eye Health</h5>
                            <p>
                                Mangoes are an excellent source of Vitamin A and beta-carotene, which are essential for maintaining good vision and preventing dryness in the eyes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fakta Tambahan */}
                <div className="mt-5">
                    <h3 className="text-center mb-4" style={{ color: "#eebd2b" }}>More Reasons to Eat Mangoes</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Rich in Antioxidants</h6>
                                <p>
                                    Mangoes contain powerful antioxidants like zeaxanthin and lutein, which protect your body against harmful free radicals.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Supports Heart Health</h6>
                                <p>
                                    The potassium and magnesium in mangoes help regulate blood pressure and support cardiovascular health.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="fact-card shadow-sm p-3">
                                <h6 className="fact-title">Helps Maintain Weight</h6>
                                <p>
                                    Despite being sweet, mangoes are low in calories and high in fiber, making them a satisfying snack for weight management.
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

export default MangoBenefits;
