import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";
import Cards from "../Cards";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Link to="/login">Login</Link> Link to the login page */}
      {/* <Link to="/signup">Sign Up</Link> Link to the sign-up page */}
    </>
  );
}

export default Home;
