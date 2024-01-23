import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)((props) => ({
  height: "40px",
//   padding: "40px 85px ",
  borderRadius: "100px",
  width: props.width,
  textTransform: 'none'
}));
