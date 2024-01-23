import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../theme";
import Logo from "../assets/clearlink-logo.svg";
import Googleplay from "../assets/googlePlay.svg";
import Applestore from "../assets/appleStore.svg";
import Fb from "../assets/fb.svg";
import Github from "../assets/gity.svg";
import indeed from "../assets/indeed.svg";
import Instagram from "../assets/insta.svg";
import YoutubeIcon from "../assets/youtube.svg";
import Twittericon from "../assets/tweety.svg";

const ListBox = ({ heading, tag1, tag2, tag3, tag4, tag5 }) => {
  return (
    <Stack spacing={1}>
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
            height: "250px",
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid red",
          }}
        >
          <Stack spacing={4}>
            <Stack direction="row" alignItems="center" spacing={0.9}>
              <img src={Logo} alt="company's logo" style={{ height: "24px" }} />
              <Typography variant="textHead2" sx={{ color: colors.gray[900] }}>
                ClearLink<span style={{ color: colors.blue[400] }}>.</span>
              </Typography>
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
          <Stack direction="row" spacing={11}>
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

            <Stack spacing={1.8}>
              <Typography variant="textHead3" sx={{ color: colors.blue[700] }}>
                Get the app
              </Typography>

              <img src={Applestore} alt="icon" />
              <img src={Googleplay} alt="icon" />
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

        <Stack direction="row" spacing={2.3}>
          <img src={indeed} alt="icon" />
          <img src={Twittericon} alt="icon" />
          <img src={Fb} alt="icon" />
          <img src={Instagram} alt="icon" />
          <img src={Github} alt="icon" />
          <img src={YoutubeIcon} alt="icon" />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
