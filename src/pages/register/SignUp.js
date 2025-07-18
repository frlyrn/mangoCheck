import React, { Component } from "react";
import axios from "axios";
import NavBar from "../../components/layout/navbar/navbar";
import registImage from "../../images/regist.jpg";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      username: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      registrationComplete: false,
      registrationStatus: "",
      errorMessage: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  togglePasswordVisibility = (field) => {
    this.setState((prevState) => ({
      [field]: !prevState[field],
    }));
  };

  register = async (event) => {
    event.preventDefault();

    const { nama, username, password, confirmPassword } = this.state;

    // Validasi form
    if (!nama || !username || !password || !confirmPassword) {
      this.setState({
        registrationStatus: "FAILED",
        errorMessage: "Semua kolom harus diisi!",
      });
      return;
    }

    if (password !== confirmPassword) {
      this.setState({
        registrationStatus: "FAILED",
        errorMessage: "Konfirmasi password tidak sama!",
      });
      return;
    }

    try {
      const response = await axios.post("https://mango-backend-374006059960.asia-southeast2.run.app/register", {
        nama,
        username,
        password,
      });

      this.setState({
        registrationComplete: true,
        registrationStatus: "SUCCESS",
        errorMessage: "",
      });
    } catch (error) {
      this.setState({
        registrationStatus: "FAILED",
        errorMessage: error.response?.data?.error || "Terjadi kesalahan selama pendaftaran.",
      });
    }
  };

  render() {
    const {
      registrationComplete,
      registrationStatus,
      errorMessage,
      nama,
      username,
      password,
      confirmPassword,
      showPassword,
      showConfirmPassword,
    } = this.state;

    if (registrationComplete) {
      return (
        <div>
          <NavBar />
          <div class="container-fluid">
            <div class="container py-5 mt-5">
              <div class="col-md-6 col-sm-8 col-10 mx-auto text-center">
                <img src={registImage} style={{ width: "70%" }} alt="success" />
                <h2>Terimakasih Sudah Melakukan Pendaftaran Akun!</h2>
                <hr />
                <p>
                  Anda telah berhasil mendaftar. Mulai periksa mangga Anda?
                  <a href="/login" class="link-primary">
                    Selanjutnya
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      );
    }

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
                      <img
                        src={registImage}
                        alt="registration form"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body">
                        <form onSubmit={this.register} className="needs-validation" noValidate>
                          <h3>Buat Akun Anda!</h3>
                          <hr />
                          {registrationStatus === "FAILED" && (
                            <div className="alert alert-danger text-center">
                              {errorMessage}
                            </div>
                          )}
                          <div className="form-outline">
                            <input
                              value={nama}
                              onChange={this.handleChange}
                              type="text"
                              name="nama"
                              className="form-control"
                              placeholder="Masukkan nama anda"
                              required
                            />
                          </div>
                          <div className="form-outline">
                            <input
                              value={username}
                              onChange={this.handleChange}
                              type="text"
                              name="username"
                              className="form-control"
                              placeholder="Masukkan username anda"
                              required
                            />
                          </div>
                          <div className="form-outline position-relative">
                            <input
                              value={password}
                              onChange={this.handleChange}
                              type={showPassword ? "text" : "password"}
                              name="password"
                              className="form-control"
                              placeholder="Masukkan password anda"
                              required
                            />
                            <i
                              className={`fas ${showPassword ? "bi-eye-slash" : "bi-eye"
                                } position-absolute end-0 top-50 translate-middle-y me-3`}
                              style={{ cursor: "pointer" }}
                              onClick={() => this.togglePasswordVisibility("showPassword")}
                            ></i>
                          </div>
                          <div className="form-outline position-relative">
                            <input
                              value={confirmPassword}
                              onChange={this.handleChange}
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirmPassword"
                              className="form-control"
                              placeholder="Konfirmasi password anda"
                              required
                            />
                            <i
                              className={`fas ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"
                                } position-absolute end-0 top-50 translate-middle-y me-3`}
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                this.togglePasswordVisibility("showConfirmPassword")
                              }
                            ></i>
                          </div>
                          <div className="pt-1 mb-4">
                            <button className="btn btn-login" type="submit">
                              Daftar
                            </button>
                          </div>
                          <p className="mb-3 pb-lg-2">
                            Sudah mempunyai akun?{" "}
                            <a href="/login">Login disini</a>
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
  }
}

export default Register;
