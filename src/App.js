import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home";
import MangoDetection from "./pages/mangoDetection";
import Login from "./pages/login/SignIn";
import Register from "./pages/register/SignUp";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/mangoCheck" element={<Home />} />
        <Route path="/mangodetection" element={<MangoDetection />} />

        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

      </Routes>
    </Router>
  )
}

export default App;
