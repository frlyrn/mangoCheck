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
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const inputEmail = inputEmailRef.current.value;
    const inputPassword = inputEmailRef.current.nextSibling.value;

    try {
      const res = await axios.post("http://34.101.98.218:3000/login", {
        email: inputEmail,
        password: inputPassword,
      });
      console.log(res.data);

      localStorage.setItem("token", res.data.token);

      authCtx.login(res.data.token);
      setLoginStatus("SUCCESS");

      navigate("/");
    } catch (err) {
      console.error(err.response ? err.response.data.message : err.message);
      setLoginStatus("FAILED");
    } finally {
      inputEmailRef.current.value = "";
      inputEmailRef.current.nextSibling.value = "";
    }
  };

  return (
    <div>
      <section className="vh-100">
        <NavBar></NavBar>

        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block mt-5">
                    <img
                      src={loginImage}
                      alt="login form"
                      className="img-fluid"
                    />
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
                        <div className="form-outline mb-3" style={{ position: "relative" }}>
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            name="password"
                            placeholder="Your Password"
                            required
                          />
                          <i
                            className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
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
