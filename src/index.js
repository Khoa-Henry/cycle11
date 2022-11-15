import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home/index.js";
import AboutYou from "./pages/AboutYou/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="aboutyou" element={<AboutYou />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
