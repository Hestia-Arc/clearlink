import { createTheme } from "@mui/material/styles";

// THEME SETTINGS
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export const colors = {
  gray: {
    50: '#F9FAFB',
    100: "#F2F4F7",
    200: "#EAECF0",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    // 700: "#a3a3a3",
    // 800: "#c2c2c2",
    900: "#101828",
  },
  base: {
    100: "#FFFFFF",
    200: "",
    // 300
    // 400
    // 500
    // 600
    // 700
  },
  blue: {
    100: "#D1E9FF",
    200: "#B2DDFF",
    400: "#528BFF", // manually changed
    700: "#175CD3",
  },
  accent: {
    100: "#0f2922",
    200: "#1e5245",
    300: "#2e7c67",
    400: "#3da58a",
    500: "#4cceac",
    600: "#70d8bd",
    700: "#94e2cd",
    800: "#b7ebde",
    900: "#dbf5ee",
  },
  surface: {
    100: "#ededed",
    200: "#e7e7e7",

    // 200: "#ededed",
  },
  blueAccent: {
    100: "#151632",
    200: "#2a2d64",
    300: "#3e4396",
    400: "#535ac8",
    500: "#6870fa",
    600: "#868dfb",
    700: "#a4a9fc",
    800: "#c3c6fd",
    900: "#e1e2fe",
  },
};

export const theme = createTheme({
  // Override or create new styles, colors, palettes...
  breakpoints,
  palette: {
    primary: {
      main: colors.blue[700],
      // main: "#0e625f",
      // light: "#E7EFEF",
      // dark: "e",
      contrastText: "#fff",
    },
    secondary: {
      main: colors.blue[200],

      // main: "#ff735c",
      // light: "#E7EFEF",
      // dark: "e",
      // contrastText: "#fff",
    },
    error: {
      main: "#ff735c",
      light: "#E7EFEF",
      dark: "e",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff735c",
      light: "#E7EFEF",
      dark: "e",
      contrastText: "#fff",
    },
    info: {
      main: "#2F80ED",
      light: "",
      dark: "",
      contrastText: "#fff",
    },
    success: {
      main: "#27AE60",
      light: "",
      dark: "",
      contrastText: "#fff",
    },
    inputs: {
      main: "rgba(103, 160, 158, 0.16)",
      light: "#E7EFEF",
      dark: "e",
      contrastText: "#fff",
    },
    neutral: {
      neutralBlack: "hsla(0, 0%, 0%, 0.64)",
      neutral300: "#B3B1B8",
    },
    stroke: {
      stroke100: "#DCDBDE",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    heading1: {
      fontSize: "58px",
      lineHeight: "60px",
      fontWeight: 600,
    },
    heading2: {
      fontSize: "38px",
      lineHeight: "45px",
      fontWeight: 600,
    },
    heading3: {
      fontSize: "32px",
      lineHeight: "44px",
      fontWeight: 500,
    },
    textHead1: {
      fontSize: "16px",
      lineHeight: "30px",
      fontWeight: 500,
    },
    textHead2: {
      fontSize: "19px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    textHead3: {
      fontSize: "15px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    textHead4: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    
    font3: {},
    font4: {
      fontSize: "1.1rem",
      lineHeight: 1.2,
      fontWeight: 600,
    },
    text1: {
      fontSize: "16px",
      lineHeight: "25px",
      fontWeight: 400,
    },
    text2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 600,
    },
    text3: {
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: 400,
    },
    text4: {
      fontSize: "14px",
      lineHeight: "32px",
      fontWeight: 600,
      
    },
    text5: {
      fontSize: "12px",
      lineHeight: "32px",
      fontWeight: 600,
      
    },
  },
});
