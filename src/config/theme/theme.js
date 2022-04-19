import { buttonOverrides } from "./themeOverride";
import { createTheme } from "@mui/material";

const theme = (mode) => {
  const palette = tempTheme(mode).palette;
  const _buttonOverrides = buttonOverrides(palette);

  return createTheme(
    {
      palette,
      typography: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        h1: {
          [tempTheme(mode).breakpoints.down("sm")]: {
            fontSize: "4rem",
          },
        },
        h2: {
          [tempTheme(mode).breakpoints.down("sm")]: {
            fontSize: "2.75rem",
          },
        },
        h3: {
          [tempTheme(mode).breakpoints.down("sm")]: {
            fontSize: "2rem",
          },
        },
        h4: {
          [tempTheme(mode).breakpoints.down("sm")]: {
            fontSize: "1.6rem",
          },
        },
        h5: {
          [tempTheme(mode).breakpoints.down("sm")]: {
            fontSize: "1.2rem",
          },
        },
        body1: {
          [tempTheme(mode).breakpoints.down("sm")]: {
            fontSize: "0.8rem",
          },
        },
      },
      components: {
        MuiButton: {
          styleOverrides: _buttonOverrides,
        },
      },
    },
    [mode]
  );
};

/* 
mui theme to define the theme pallete before initilizing the actual theme. This allows
us to define component overrides that use the desired pallete.
*/
const tempTheme = (mode) =>
  createTheme(
    {
      palette: {
        mode,
        primary: {
          main: "#456aff",
        },
        secondary: {
          main: "#ff9945",
        },
      },
    },
    [mode]
  );

export default theme;
