import NavBar from "../../components/layout/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../components/context/auth-context";

import loginImage from "../../images/login.jpg";
import "./style.css";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const inputEmail = inputEmailRef.current.value;
    const inputPassword = inputPasswordRef.current.value;

    try {
      const res = await axios.post("http://34.101.214.48:3000/login", {
        email: inputEmail,
        password: inputPassword,
      });

      const token = res.data.data.token;
      authCtx.login(token);
      setLoginStatus("SUCCESS");

      navigate("/mangoDetection");
    } catch (err) {
      setLoginStatus("FAILED");
      console.error(
        err.response?.data?.message || "An error occurred during login."
      );
    } finally {
      inputEmailRef.current.value = "";
      inputPasswordRef.current.value = "";
    }
  };

  return (
    <div>
      <section className="vh-100">
        <NavBar />
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block mt-5">
                    <img src={loginImage} alt="Login" className="img-fluid" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body">
                      <form onSubmit={onSubmitHandler}>
                        <h3>Sign into your account</h3>
                        <hr />
                        {loginStatus === "FAILED" && (
                          <div className="alert alert-danger text-center">
                            Email or password is invalid
                          </div>
                        )}
                        <div className="form-outline mb-3">
                          <input
                            ref={inputEmailRef}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div
                          className="form-outline mb-3"
                          style={{ position: "relative" }}
                        >
                          <input
                            ref={inputPasswordRef}
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            name="password"
                            placeholder="Your Password"
                            required
                          />
                          <i
                            className={`bi ${
                              showPassword ? "bi-eye-slash" : "bi-eye"
                            }`}
                            style={{
                              position: "absolute",
                              right: "10px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                              fontSize: "1.2rem",
                            }}
                            onClick={togglePassword}
                          ></i>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-login" type="submit">
                            Sign In
                          </button>
                        </div>
                        <p className="mb-3 pb-lg-2">
                          Don't have an account?{" "}
                          <a href="/register">SignUp here</a>
                        </p>
                        <a href="/regulations" className="small text-muted">
                          Terms & Conditions
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
