import NavBar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import "../artikel/mangoFacts.css";
import icon1Image from "../../images/artikel-icon1.jpg";
import icon2Image from "../../images/artikel-icon2.jpg"
import icon3Image from "../../images/artikel-icon3.jpg"
import icon4Image from "../../images/artikel-icon4.jpg"
import { Carousel } from "react-bootstrap";

const MangoTrees = () => {
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
            title: "Interesting facts about mangoes",
            text: "Explore fun facts about mangoes.",
            img: icon1Image,
            href: "/mangoFacts"
        },
    ];

    return (
        <div>
            <NavBar />
            <div className="container grow py-5">
                <h2 className="text-center mb-4">How to Grow Mango Trees</h2>
                <p className="text-center text-muted mb-5">Learn tips and tricks for growing your own mango trees at home.</p>

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
                            <h5>1. Choose the Right Variety</h5>
                            <p>
                                Select a mango variety suitable for your climate and available space. Dwarf varieties are perfect for small gardens or containers.
                            </p>
                        </div>
                        <div className="grow-step mb-4">
                            <h5>2. Prepare the Soil</h5>
                            <p>
                                Mango trees thrive in well-draining soil with a pH between 5.5 and 7. Dig a deep hole, add organic compost, and ensure the location gets full sunlight.
                            </p>
                        </div>
                        <div className="grow-step mb-4">
                            <h5>3. Plant the Seed or Sapling</h5>
                            <p>
                                If starting from seed, soak it in water for 24 hours and plant it in moist soil. Alternatively, plant a healthy sapling, ensuring the graft union is above the soil.
                            </p>
                        </div>
                        <div className="grow-step">
                            <h5>4. Water and Mulch</h5>
                            <p>
                                Water regularly but avoid overwatering, as mango trees dislike soggy soil. Add a layer of mulch to retain moisture and prevent weeds.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tips Tambahan */}
                <div className="mt-5">
                    <h3 className="text-center mb-4" style={{ color: "#eebd2b" }}>Extra Tips for Successful Growth</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="tip-card shadow-sm p-3">
                                <h6 className="tip-title">Fertilize Properly</h6>
                                <p>
                                    Use a balanced fertilizer during the growing season and reduce feeding in winter.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="tip-card shadow-sm p-3">
                                <h6 className="tip-title">Prune for Health</h6>
                                <p>
                                    Prune dead or overcrowded branches to allow sunlight and air to circulate, promoting healthy growth.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="tip-card shadow-sm p-3">
                                <h6 className="tip-title">Pest Control</h6>
                                <p>
                                    Watch out for pests like mealybugs and mango hoppers. Use natural insecticides or neem oil to keep them at bay.
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

export default MangoTrees;
