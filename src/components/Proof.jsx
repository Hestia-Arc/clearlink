import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import Shopify from "../assets/Shopify.svg";
import coin from "../assets/Coin.svg";
import dropbox from "../assets/Dropbox.svg";
import intercom from "../assets/Intercom.svg";
import marvel from "../assets/Marvel.svg";
import Auto from "../assets/Auto.svg";


const imgStyle = {
  height: '32px'
}


function Proof() {
  return (
    <Stack alignItems='center' spacing={4} sx={{height: '250px', padding: '50px 85px', border: '1px solid blue'}}>
      <Typography variant="textHead1">
        Join 1,500+ companies already video conferencing the ClearLink way
      </Typography>

      <Stack direction="row" alignItems='center' spacing={4}>
        <img src={Shopify} alt="brands icons" style={imgStyle} />
        <img src={coin} alt="brands icons" style={{height: '28px'}} />
        <img src={dropbox} alt="brands icons" style={imgStyle} />
        <img src={intercom} alt="brands icons" style={imgStyle} />
        <img src={marvel} alt="brands icons" style={imgStyle} />
        <img src={Auto} alt="brands icons" style={{height: '15px'}} />
      </Stack>
    </Stack>
  );
}

export default Proof;
