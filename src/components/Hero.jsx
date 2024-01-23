import { Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { HeroBox } from "../styles/Hero-styles";
import Header from "./Header";
import { StyledButton } from "../shared/UI/UI";
import AiIcon from "../assets/hero-ai-icon.jpg";
import heroImg from "../assets/hero-image.jpg";
import { colors } from "../theme";
import Avatars from "../assets/Avatars.png";

function Hero() {
  return (
    <HeroBox>
      <Header />

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          // border: '1px solid red'
        }}
        mt={14.5}
      >
        {/* left */}
        <Stack spacing={2.7} mt={0.8} sx={{height: '100%'}}>
          <Typography variant="heading1">
            Uniting the world, <br />
            one video call at a time
          </Typography>
          <Typography variant="text3" sx={{ color: colors.gray[500] }}>
            Experience the future of communication with ClearLink - <br />
            where crystal-clear video conferencing meets <br />
            unparalleled simplicity.
          </Typography>

          {/* -- */}
          <Stack direction="row" spacing={2.8} mb={2}>
            <StyledButton
              variant="contained"
              width="170px"
              sx={{ height: "46px" }}
            >
              Start your free trial
            </StyledButton>

            <Stack direction="row" alignItems="center" spacing={1}>
              <span style={{marginTop: '5px'}}>
                <img src={AiIcon} alt="company's logo" />
              </span>
              <Typography variant="textHead3" sx={{ color: colors.blue[700] }} >Discover AI assistant</Typography>
            </Stack>
          </Stack>

          {/* --- */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <span>
              {" "}
              <img src={Avatars} alt="icon" style={{ height: "38px" }} />
           
            </span>
            <Stack>
              <span>
                <Rating name="read-only" value={5} size="small" readOnly /> <span>5.0</span>
              </span>
              <Typography sx={{ color: colors.gray[500], fontWeight: 500, fontSize: '14px' }}>
                from 3,000+ reviews
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* right */}
        {/* img */}
        <Box sx={{ width: "45%", display: "flex", justifyContent: "flex-end" }}>
          <img
            src={heroImg}
            alt="face grid"
            style={{ height: "427px", width: "498px" }}
          />
        </Box>
      </Box>
    </HeroBox>
  );
}

export default Hero;
