import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../theme";
import Logo from "../assets/clearlink-logo.svg";

const ListBox = ({ heading, tag1, tag2, tag3, tag4, tag5 }) => {
  return (
    <Stack>
      <Typography variant="text5" sx={{ color: colors.gray[500] }}>
        {heading}
      </Typography>
      <Typography variant="text4" sx={{ color: colors.gray[600] }}>
        {tag1}
      </Typography>
      <Typography variant="text4" sx={{ color: colors.gray[600] }}>
        {tag2}
      </Typography>
      <Typography variant="text4" sx={{ color: colors.gray[600] }}>
        {tag3}
      </Typography>
      <Typography variant="text4" sx={{ color: colors.gray[600] }}>
        {tag4}
      </Typography>
      <Typography variant="text4" sx={{ color: colors.gray[600] }}>
        {tag5}
      </Typography>
    </Stack>
  );
};

function Footer() {
  return (
    <Box>
      <Box
        sx={{
          padding: "90px 85px 40px",
          // border: "1px solid red",
        }}
      >
        <Box
          sx={{
            height: "220px",
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid red",
          }}
        >
          <Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={Logo} alt="company's logo" />
              <Typography>ClearLink</Typography>
            </Stack>
            <Typography
              variant="text2"
              sx={{ color: colors.gray[600], paddingRight: "60px" }}
            >
              ClearLink is your gateway to effortless, high- <br />
              quality video conferencing. Join us in shaping
              <br />
              the future of communication!
            </Typography>
          </Stack>

          {/*  */}
          <Stack direction="row" spacing={9}>
            <ListBox
              heading="Product"
              tag1="Overview"
              tag2="Features"
              tag3="Solutions"
              tag4="Tutorials"
              tag5="Pricing"
            />

            <ListBox
              heading="Company"
              tag1="About us"
              tag2="Careers"
              tag3="Press"
              tag4="News"
              tag5="Contact"
            />

            <ListBox
              heading="Resources"
              tag1="Blog"
              tag2="Events"
              tag3="Help centre"
              tag4="Tutorials"
              tag5="Support"
            />

            <ListBox
              heading="Legal"
              tag1="Terms"
              tag2="Privacy"
              tag3="Cookies"
              tag4="Licenses"
              tag5="Contact"
            />

            <Stack>
              <Typography variant="textHead3" sx={{ color: colors.blue[700] }}>
                Get the app
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* LOWER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: "100px",
          padding: "45px 85px",
          backgroundColor: colors.gray[50],
        }}
      >
        <Typography sx={{ color: colors.gray[500], fontSize: "12px" }}>
          © 2023 ClearLink. All rights reserved.
        </Typography>

        <Box>Icons</Box>
      </Stack>
    </Box>
  );
}

export default Footer;
