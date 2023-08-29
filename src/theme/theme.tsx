import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5100",
      light: "#fb7739",
      dark: "#d94500",
    },
    secondary: {
      main: "#fdceb8",
      light: "#fff7f3",
      dark: "#ffd3be",
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
