import { Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../theme";
import shopify from "../assets/Shopify.svg";

function Testimonial() {
  return (
    <Box
      sx={{
        padding: "95px 85px",
        border: "1px solid red",
        backgroundColor: colors.gray[50],
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ height: "450px", padding: "0 32px" }}
      >
        <Stack spacing={3} sx={{ height: "450px", padding: "0 32px" }}>
         <span> <img src={shopify} alt="icon" style={{height:'25px'}} /></span>
          <span>
            <Rating name="read-only" value={5} size="small" readOnly />
          </span>

          <Typography variant='heading3' sx={{ color: colors.gray[900] }}>
            ClearLink has upgraded our <br /> remote meetings. High-quality{" "}
            <br /> video, screen sharing, and <br /> top-notch security make it{" "}
            <br /> essential for our team.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Testimonial;
