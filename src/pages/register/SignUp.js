import React, { Component } from "react";
import axios from "axios";
import NavBar from "../../components/layout/navbar/navbar";
import registImage from "../../images/regist.jpg";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
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

    const { name, email, password, confirmPassword } = this.state;

    // Form validation
    if (!name || !email || !password || !confirmPassword) {
      this.setState({
        registrationStatus: "FAILED",
        errorMessage: "All fields are required!",
      });
      return;
    }

    if (password !== confirmPassword) {
      this.setState({
        registrationStatus: "FAILED",
        errorMessage: "Passwords do not match!",
      });
      return;
    }

    try {
      const response = await axios.post("http://34.101.98.218:3000/regist", {
        name,
        email,
        password,
      });
      console.log(response.data);
      this.setState({
        registrationComplete: true,
        registrationStatus: "SUCCESS",
      });
    } catch (error) {
      console.error(error);
      this.setState({
        registrationStatus: "FAILED",
        errorMessage:
          error.response?.data?.message || "An error occurred during registration.",
      });
    }
  };

  render() {
    const {
      registrationComplete,
      registrationStatus,
      errorMessage,
      name,
      email,
      password,
      confirmPassword,
      showPassword,
      showConfirmPassword,
    } = this.state;

    if (registrationComplete) {
      return (
        <div>
          <NavBar />
          <div className="container-fluid">
            <div className="container py-5">
              <div className="col-6 mx-auto text-center">
                <img src={registImage} style={{ width: "70%" }} alt="success" />
                <h2>Thank You for Registering!</h2>
                <hr />
                <p>
                  You have successfully registered. Ready to explore?{" "}
                  <a href="/login" className="link-primary">
                    Continue
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
                        <form onSubmit={this.register}>
                          <h3>Create an Account</h3>
                          <hr />
                          {registrationStatus === "FAILED" && (
                            <div className="alert alert-danger text-center">
                              {errorMessage}
                            </div>
                          )}
                          <div className="form-outline">
                            <input
                              value={name}
                              onChange={this.handleChange}
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                          <div className="form-outline">
                            <input
                              value={email}
                              onChange={this.handleChange}
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Your Email"
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
                              placeholder="Your Password"
                              required
                            />
                            <i
                              className={`fas ${
                                showPassword ? "bi-eye-slash" : "bi-eye"
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
                              placeholder="Confirm Password"
                              required
                            />
                            <i
                              className={`fas ${
                                showConfirmPassword ? "bi-eye-slash" : "bi-eye"
                              } position-absolute end-0 top-50 translate-middle-y me-3`}
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                this.togglePasswordVisibility("showConfirmPassword")
                              }
                            ></i>
                          </div>
                          <div className="pt-1 mb-4">
                            <button className="btn btn-login" type="submit">
                              Sign Up
                            </button>
                          </div>
                          <p className="mb-3 pb-lg-2">
                            Already have an account?{" "}
                            <a href="/login">Sign In here</a>
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
  }
}

export default Register;
