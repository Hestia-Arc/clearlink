import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Proof from "../components/Proof";
import About from "../components/About";
import { Box } from "@mui/material";
import Testimonial from "../components/Testimonial";
import Trial from "../components/Trial";
import Faqs from "../components/Faqs";

function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <About />
      <Testimonial />
      <Faqs />
      <Trial />
      <Footer />
    </>
  );
}

export default Home;
