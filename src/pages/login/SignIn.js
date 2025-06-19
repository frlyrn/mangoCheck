import NavBar from "../../components/layout/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../components/context/auth-context";

import loginImage from "../../images/login.jpg";
import "./style.css";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const inputUsernameRef = useRef();
  const inputPasswordRef = useRef();
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const inputUsername = inputUsernameRef.current.value;
    const inputPassword = inputPasswordRef.current.value;

    setLoginStatus("");
    setErrorMsg("");

    if (!inputUsername || !inputPassword) {
    setLoginStatus("FAILED");
    setErrorMsg("Semua kolom harus diisi!");
    return;
  }

    try {
      const res = await axios.post("https://mango-backend-374006059960.asia-southeast2.run.app/login", {
        username: inputUsername,
        password: inputPassword,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const token = res?.data?.token;

      if (token) {
        authCtx.login(token);
        setLoginStatus("SUCCESS");
        navigate("/deteksiKematangan", { replace: true });
        inputUsernameRef.current.value = "";
        inputPasswordRef.current.value = "";
      } else {
        setLoginStatus("FAILED");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Terjadi kesalahan saat login.";
      setLoginStatus("FAILED");
      setErrorMsg(errorMessage);
      console.error(errorMessage);
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
                        <h3>Login ke akun anda!</h3>
                        <hr />
                        {loginStatus === "FAILED" && (
                          <div className="alert alert-danger text-center">
                            {errorMsg}
                          </div>
                        )}
                        <div className="form-outline mb-3">
                          <input
                            ref={inputUsernameRef}
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Masukkan username anda"
                          />
                        </div>
                        <div className="form-outline mb-3" style={{ position: "relative" }}>
                          <input
                            ref={inputPasswordRef}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="form-control"
                            placeholder="Masukkan password anda"
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
                              Login
                            </button>
                        </div>
                        <p className="mb-3 pb-lg-2">
                          Belum mempunyai akun? <a href="/registrasi">Daftar disini</a>
                        </p>
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
