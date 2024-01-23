import { Box, styled } from "@mui/material";
import HeroBackImage from "../assets/Background-pattern.jpg";
import { colors } from "../theme";

export const HeroBox = styled(Box)({
    height: '100vh',
    padding: '30px 85px 80px',
    // border: '1px solid red',
    backgroundImage: `url(${HeroBackImage})`,
    backgroundPosition: '50% 3%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}) 

export const Nav = styled('nav')({
    height: '50px',
    backgroundColor: colors.gray[100],
    borderRadius: '100px',
    border: `1px solid ${colors.gray[300]}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 18px'

}) 

export const Nav__logo = styled(Box)({
   
}) 

export const Nav__menu = styled(Box)({
   
}) 

export const Nav__buttons = styled(Box)({
   
}) 




// 
export const b = styled(Box)({
   
}) 