// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // or dynamically set using prefers-color-scheme as discussed
    primary: {
      main: "#3290DE",
    },
    secondary: {
      main: "#FAA935",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#FAA935",
            color: "#ffffff",
          },
        },
        outlined: {
          color: "#3290DE",
          borderColor: "#3290DE",
          "&:hover": {
            borderColor: "#FAA935",
            backgroundColor: "#FAA935",
          },
        },
        contained: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
