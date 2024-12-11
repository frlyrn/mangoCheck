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
                        <NavLink className="nav-link" to="/mangoDetection">
                            Detection
                        </NavLink>
                        <NavLink className="nav-link" to="/aboutUs">
                            About Us
                        </NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        {!authCtx.isLoggedIn ? (
                            <>
                                <Link to="/register">
                                    <Button variant="outline-success" className="me-2 mt-lg-0 mt-2">
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button variant="outline-success" className="me-2 mt-lg-0 mt-2">
                                        Sign In
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button variant="outline-danger" onClick={logoutHandler} className="me-2">
                                    Logout
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar