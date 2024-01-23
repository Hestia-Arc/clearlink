import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import videoIcon from "../assets/video-recorder.svg";
import aboutImage from "../assets/about-image.png";
import calenderIcon from "../assets/calendar.svg";
import recordingIcon from "../assets/recording-01.svg";
import lockIcon from "../assets/lock-unlocked-04.svg";
import arrowDrawing from "../assets/Hand-drawn.svg";
import { colors } from "../theme";

const ItemBox = ({ img, tag, text }) => {
  return (
    <Stack
      spacing={1.5}
      sx={{
        width: "275px",
        // border: "1px solid red"
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: colors.gray[50],
          border: "1px solid",
          borderColor: colors.gray[200],
          width: "50px",
          padding: '10px',
          borderRadius: '30px'
        }}
      >
        <img src={img} alt="icon" />
      </Stack>
      <Typography variant="textHead2" sx={{ color: colors.gray[900] }}>
        {tag}
      </Typography>
      <Typography variant="text2" sx={{ color: colors.gray[600] }}>
        {text}
      </Typography>
    </Stack>
  );
};
function About() {
  return (
    <Box sx={{padding: '95px 85px'}}>
      <Stack spacing={1}>
        <Typography variant="textHead3" sx={{ color: colors.blue[700] }}>The ClearLink Advantage</Typography>
        <Typography variant="heading2" sx={{ color: colors.gray[900] }}>Why choose ClearLink?</Typography>
        <Typography variant="text3" sx={{ color: colors.gray[500] }}>
          In a world where connection is everything, ClearLink takes the lead.
          Our <br/> cutting-edge video conferencing app offers:
        </Typography>
      </Stack>

      {/* --------- */}
      <Stack
        direction="row"
        justifyContent="space-between"
        // spacing={5}
        sx={{
          height: "430px",
          marginTop: "80px",
          // border: "1px solid red"
        }}
      >
        {/*  */}
        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          rowGap={4}
          columnGap={4}
          sx={{
            width: "50%",
            //    border: "1px solid red"
          }}
        >
          <ItemBox
            img={videoIcon}
            tag="Crystal-clear HD video"
            text="No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."
          />
          <ItemBox
            img={recordingIcon}
            tag="Noise-canceling audio"
            text="Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."
          />
          <ItemBox
            img={calenderIcon}
            tag="Scheduling made easy"
            text="Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."
          />
          <ItemBox
            img={lockIcon}
            tag="Bank-grade security"
            text="Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."
          />
        </Stack>

        {/* img */}
        <Box sx={{ width: "45%", display: "flex", justifyContent: "flex-end" }}>
          <img
            src={aboutImage}
            alt="face grid"
            style={{ height: "427px", width: "500px" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default About;
