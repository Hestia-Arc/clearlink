import { Box, Rating, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { colors } from "../theme";
import shopify from "../assets/Shopify.svg";
import TestIcon from "../assets/Testy2.png";
import AvatarIcon from "../assets/TestyAvatar.png";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const StyledSpan = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "48px",
  width: "48px",
  borderRadius: "30px",
  border: "1px solid",
  borderColor: colors.blue[100],
  backgroundColor: "#fff",
});
function Testimonial() {
  return (
    <Box
      sx={{
        padding: "95px 85px",
        // border: "1px solid red",
        backgroundColor: colors.gray[50],
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "480px", padding: "0 32px",
        //  border: "1px solid red"
         }}
      >
        <Stack
          spacing={3.7}
          sx={{ height: "450px", width: "50%", 
          // border: "1px solid red"
         }}
        >
          <span>
            {" "}
            <img src={shopify} alt="icon" style={{ height: "25px" }} />
          </span>
          <span>
            <Rating name="read-only" value={5} size="small" readOnly />
          </span>

          <Typography variant="heading3" sx={{ color: colors.gray[900] }}>
            ClearLink has upgraded our <br /> remote meetings. High-quality{" "}
            <br /> video, screen sharing, and <br /> top-notch security make it{" "}
            <br /> essential for our team.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // border: "1px solid red",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <span>
                {" "}
                <img src={AvatarIcon} alt="icon" style={{ height: "50px" }} />
              </span>
              <Stack>
                <Typography
                  variant="textHead4"
                  sx={{ color: colors.gray[900] }}
                >
                  Sarah Thompson
                </Typography>
                <Typography variant="text2" sx={{ color: colors.gray[600] }}>
                  Project Manager, Shopify
                </Typography>
              </Stack>
            </Stack>

            {/* ---arrows */}
            <Stack direction="row" spacing={3}>
              <StyledSpan>
                <ArrowBackRoundedIcon sx={{ color: colors.blue[700] }} />
              </StyledSpan>

              <StyledSpan>
                <ArrowForwardRoundedIcon sx={{ color: colors.blue[700] }} />
              </StyledSpan>
            </Stack>
          </Box>
        </Stack>

        {/* img */}
        <Box sx={{ width: "45%", display: "flex", justifyContent: "flex-end" }}>
          <img
            src={TestIcon}
            alt="face grid"
            style={{ height: "410px", width: "498px" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Testimonial;
