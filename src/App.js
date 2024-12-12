import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home/home";
import MangoDetection from "./pages/mango/mangoDetection";
import Register from "./pages/register/SignUp";
import AboutUs from "./pages/about/about-us";
import MangoFacts from "./pages/artikel/mangoFact";
import MangoBenefits from "./pages/artikel/mangoBenefits";
import MangoTrees from "./pages/artikel/mangoTrees";
import MangoVarieties from "./pages/artikel/mangoVarieties";
import Login from "./pages/login/SignIn";
import AuthContext from "./components/context/auth-context";
import HistoryDetection from "./pages/history/history";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mangoCheck" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* Article Pages */}
        <Route path="/mangoFacts" element={<MangoFacts />} />
        <Route path="/mangoBenefits" element={<MangoBenefits />} />
        <Route path="/mangoTrees" element={<MangoTrees />} />
        <Route path="/mangoVarieties" element={<MangoVarieties />} />

        {/* <Route path="/mangoDetection" element={<MangoDetection />} /> */}

        <Route path="/mangoDetection" element={authCtx.isLoggedIn ? <MangoDetection /> : <Navigate to="/login" />}></Route>
        <Route path="/historyDetection" element={authCtx.isLoggedIn ? <HistoryDetection /> : <Navigate to="/login" />}></Route>

      </Routes>
    </Router>
  )
}

export default App;
