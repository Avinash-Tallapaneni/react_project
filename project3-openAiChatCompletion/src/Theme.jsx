import { createTheme } from "@mui/material";

const appTheme = createTheme({
  palette: {
    background: {
      // default: "#0C121D",
      default: "#1A1D2E",
    },
    primary: {
      main: "#20a1a1",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
    form: {
      main: "#1a273d",
    },
  },
  typography: {
    allVariants: {
      color: "#ECF3F4",
    },
  },
});

export default appTheme;
