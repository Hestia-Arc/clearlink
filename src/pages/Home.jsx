import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Proof from "../components/Proof";
import About from "../components/About";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box sx={{padding: '0 85px'}}>
      <Hero />
      <Proof/>
      <About/>
      <Footer/>
    </Box>
  );
}

export default Home;
