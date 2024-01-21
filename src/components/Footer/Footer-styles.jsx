import { Box, styled } from "@mui/material";
import { colors } from "../../theme/theme";

export const FooterBox = styled(Box)({
    height: '100vh',
    padding: '40px 85px ',
    border: '8px solid black',
    border: '1px solid red',
    backgroundImage: `url(${HeroBackImage})`,
    backgroundPosition: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}) 

export const Nav = styled('nav')({
    height: '65px',
    backgroundColor: colors.gray[100],
    borderRadius: '100px',
    border: `1px solid ${colors.gray[300]}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem'

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