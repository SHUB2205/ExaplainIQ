import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Login from "./Login";
import AboutUs from "./components/AboutUs";
import PdfTextSelection from "./pdfTextSelector";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" exact Component={Login} />
        </Routes>
      </Router>
      <PdfTextSelection/>
      <AboutUs />
    </>
  );
}

export default App;
