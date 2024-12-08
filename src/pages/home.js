import NavBar from "../components/layout/navbar/navbar";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>

        <a href="/register">Register</a>
        <br></br>
        <a href="/login">Login</a>
        </div>
    );
};

export default Home;