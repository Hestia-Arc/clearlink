import React from "react";
import { Nav, Nav__logo } from "../styles/Hero-styles";
import Logo from "../assets/clearlink-logo.svg";
import { Button, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledButton } from "../shared/UI/UI";
import { colors } from "../theme";

function Menu({ tag }) {
  return (
    <Stack direction="row" spacing={0.5}>
      <Typography sx={{fontSize: '15px'}}>{tag}</Typography>
      <KeyboardArrowDownIcon />
    </Stack>
  );
}
function Header() {
  return (
    <header>
      <Nav>
        <Stack direction="row" alignItems="center" spacing={0.9}>
          <img src={Logo} alt="company's logo" style={{ height: "24px" }} />
          <Typography variant="textHead2" sx={{ color: colors.gray[900] }}>
            ClearLink<span style={{ color: colors.blue[400] }}>.</span>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2.5}>
          <Menu tag="Products" />
          <Menu tag="Solutions" />
          <Menu tag="Resources" />
          <Typography>Pricing</Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <StyledButton variant="outlined" >Talk to sales</StyledButton>
          <StyledButton variant="contained">Sign up for free</StyledButton>
        </Stack>
      </Nav>
    </header>
  );
}

export default Header;
