import React from "react";
import { Nav, Nav__logo, } from "./Hero-styles";
import Logo from "../../assets/clearlink-logo.svg";
import { Button, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledButton } from "../../shared/UI/UI";

function Menu({ tag }) {
  return (
    <Stack direction='row'>
      <Typography>{tag}</Typography>
      <KeyboardArrowDownIcon />
    </Stack>
  );
}
function Header() {
  return (
    <header>
      <Nav>
        <Stack direction="row" alignItems='center' spacing={1}>
          <img src={Logo} alt="company's logo" />
          <Typography>ClearLink</Typography>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Menu tag="Products" />
          <Menu tag="Solutions" />
          <Menu tag="Resources" />
          <Typography >Pricing</Typography>

        </Stack>

        <Stack direction="row" spacing={1}>
          <StyledButton variant="outlined">Talk to sales</StyledButton>
          <StyledButton variant="contained">Sign up for free</StyledButton>

        </Stack>
      </Nav>
    </header>
  );
}

export default Header;
