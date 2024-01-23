import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Screen from "../assets/Screen.jpg";
import checkCircle from "../assets/checkCircle.svg";
import { StyledButton } from "../shared/UI/UI";
import { colors } from "../theme";

const StyledListItem = ({ text }) => {
  return (
    <Stack direction="row" alignItems='center' spacing={1}>
      <span>
        <img src={checkCircle} alt="icon" />
      </span>
      <Typography variant="text3" sx={{ color: colors.gray[500] }}>
        {text}
      </Typography>
    </Stack>
  );
};

function Trial() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "95px 85px",
        height: "550px",
        position: "relative",
        // border: "1px solid red",
      }}
    >
      <Stack spacing={2}>
        <Stack spacing={3} sx={{ width: "500px",
        //  border: "1px solid red" 
         }}>
          {/*  */}
          <Typography variant="heading2" sx={{ color: colors.gray[900] }}>
            Ready to clear the path to <br /> perfect communication?
          </Typography>

          {/*  */}
          <Stack pl={1.5}>
            <StyledListItem text="30 days free trial" />
            <StyledListItem text="Cancel at any time" />
            <StyledListItem text="Access to all features" />
            <StyledListItem text="Personalized onboarding" />
          </Stack>

          {/*  */}
          <Stack direction="row" spacing={1.5}>
            <StyledButton variant="outlined" width='130px'>Talk to sales</StyledButton>
            <StyledButton variant="contained" width='180px'>Start your free trial</StyledButton>
          </Stack>
        </Stack>
        <img
          src={Screen}
          alt="icon"
          style={{
            height: "480px",
            borderTop: "8px solid",
            borderLeft: "8px solid",
            borderColor: colors.gray[900],
            borderTopLeftRadius: "20px",
            position: "absolute",
            top: "3.2rem",
            right: "0",
          }}
        />
      </Stack>
    </Box>
  );
}

export default Trial;
