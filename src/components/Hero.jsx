import { Box } from "@mui/material";
import React from "react";
import { HeroBox, } from "../styles/Hero-styles";
import Header from "./Header";

function Hero() {
  return (
    <HeroBox>
      <Header />
    </HeroBox>
  );
}

export default Hero;
