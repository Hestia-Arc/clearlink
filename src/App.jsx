import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { colors, theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          color: colors.gray[500],
          backgroundColor: colors.base[100],
        }}
      >
        <CssBaseline />
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
