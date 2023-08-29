import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f43f4",
    },
    secondary: {
      main: "#e4e8fd",
      light: "#ffffff",
      dark: "#b6c2fd",
    },
    text: {
      primary: "#1D1A05",
      secondary: "#74685b",
    },
  },
  typography: {
    fontFamily: ["'Poppins', sans-serif"].join(","),
  },
});

export default theme;
