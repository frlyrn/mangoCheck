import { Button } from "react-bootstrap";
import NavBar from "../../components/layout/navbar/navbar";
import "../home/home.css"
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import icon1Image from "../../images/artikel-icon1.jpg"
import icon2Image from "../../images/artikel-icon2.jpg"
import icon3Image from "../../images/artikel-icon3.jpg"
import icon4Image from "../../images/artikel-icon4.jpg"
import Footer from "../../components/layout/footer/footer";

const Home = () => {
    const articles = [
        {
            title: "Interesting facts about mangoes",
            text: "Explore fun facts about mangoes.",
            img: icon1Image,
            href: "/mangoFacts"
        },
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
            <NavBar></NavBar>

            <div className="banner">
                <div className="banner-text">
                    <h5>Let's start checking the ripeness of your mango</h5>
                    <h1>MangoCheck</h1>
                    <p>A Smart Ripeness Detection for Mango</p>
                    <Link to="/mangoDetection">
                        <Button variant="outline-light" className="me-2 mt-lg-0 mt-2 banner-button">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="how-it-works-section container my-5">
                <h2 className="text-center mb-5">How It Works</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="mb-3">How to Use?</h5>

                        <ul>
                            <li>Step 1: Upload
                                <br></br>
                                Upload an image of your mango for analysis.
                            </li>
                            <li>Step 2: AI Analysis
                                <br></br>
                                Our AI system analyzes the ripeness level.
                            </li>
                            <li>Step 3: Get Results
                                <br></br>
                                Receive a detailed report on your mango's ripeness.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 mt-lg-0 mt-3">
                        <h5 className="mb-3">Benefits</h5>
                        <ul>
                            <li>Helping Harvest
                                <br></br>
                                This system makes it easier for farmers to determine the right harvest time, so they can harvest the fruit at the desired level of maturity for local or export market needs.
                            </li>
                            <li>Reduce Waste
                                <br></br>
                                By knowing the level of ripeness accurately, this system helps to avoid consuming fruit before it is ripe or after it has been overripe, thereby reducing waste.
                            </li>
                            <li>Efficiency for Business
                                <br></br>
                                This system helps farmers and traders to know the quality of their products, so that they can determine the best time to sell fruit to the market.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="blog-section container-fluid py-5">
                <h2 className="text-center my-5" style={{ color: "#346c4e" }}
                >Latest Articles</h2>
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

            <Footer></Footer>
        </div>
    );
};

export default Home;