import { Button, Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, NavLink, useNavigate } from "react-router-dom";
import mangoImage from "../../../images/mango.png"
import AuthContext from "../../context/auth-context";
import { useContext } from "react";

import "../navbar/navbar.css"

const NavBar = (props) => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        authCtx.logout();
        navigate("/login");
    };

    const userData = localStorage.getItem("userData");
    let name = "";
    let email = "";

    if (userData) {
        const userObj = JSON.parse(userData);
        name = userObj.name;
        email = userObj.email;
    }

    console.log(name, email);

    return (
        <Navbar expand="lg" fixed="top" className={props.className}>
            <Container>
                <NavLink className="navbar-brand" to="/">
                    <img src={mangoImage} alt="shop" style={{ height: '60px' }} className="me-2" />
                    MangoCheck
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/mangoCheck">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/stores">
                            Detection
                        </NavLink>
                        <NavLink className="nav-link" to="/about-us">
                            About Us
                        </NavLink>
                        <NavLink className="nav-link" to="/contact-us">
                            Contact Us
                        </NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        {!authCtx.isLoggedIn ? (
                            <>
                                <Link to="/register">
                                    <Button variant="outline-success" className="me-2">
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button variant="outline-success">
                                        Sign In
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button variant="outline-light" onClick={logoutHandler} className="me-2">
                                    Logout
                                </Button>
                                <h6 className="text-white">
                                    {name} <br /> {email}
                                </h6>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar