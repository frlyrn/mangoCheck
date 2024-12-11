import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthContext from "./components/context/auth-context";
import Home from "./pages/home/home";
import MangoDetection from "./pages/mango/mangoDetection";
import Login from "./pages/login/SignIn";
import Register from "./pages/register/SignUp";
import AboutUs from "./pages/about/about-us";
import MangoFacts from "./pages/artikel/mangoFact";
import MangoBenefits from "./pages/artikel/mangoBenefits";
import MangoTrees from "./pages/artikel/mangoTrees";
import MangoVarieties from "./pages/artikel/mangoVarieties";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mangoCheck" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />

        {/* Article Pages */}
        <Route path="/mangoFacts" element={<MangoFacts />} />
        <Route path="/mangoBenefits" element={<MangoBenefits />} />
        <Route path="/mangoTrees" element={<MangoTrees />} />
        <Route path="/mangoVarieties" element={<MangoVarieties />} />

        <Route path="/mangoDetection" element={<MangoDetection />} />

        {/* <Route path="/mangoDetection" element={authCtx.isLoggedIn ? <MangoDetection /> : <Navigate to="/login" />}></Route> */}

        {!authCtx.isLoggedIn && (
          <>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </>
        )}

      </Routes>
    </Router>
  )
}

export default App;
