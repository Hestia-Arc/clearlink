import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { HeroBox } from "../styles/Hero-styles";
import Header from "./Header";
import { StyledButton } from "../shared/UI/UI";
import AiIcon from "../assets/hero-ai-icon.jpg";

function Hero() {
  return (
    <HeroBox>
      <Header />

      <Box>
        {/* left */}
        <Stack>
          <Typography variant="heading1">
            Uniting the world, <br />
            one video call at a time
          </Typography>
          <Typography>
            Experience the future of communication with ClearLink - <br />
            where crystal-clear video conferencing meets <br />
            unparalleled simplicity.
          </Typography>

          <Stack direction="row">
            <StyledButton variant="contained">Sign up for free</StyledButton>

            <span>
              <img src={AiIcon} alt="company's logo" />
              <Typography>Discover AI assistant</Typography>
            </span>
          </Stack>
          <Stack></Stack>
        </Stack>

        {/* right */}
        <Stack></Stack>
      </Box>
    </HeroBox>
  );
}

export default Hero;
