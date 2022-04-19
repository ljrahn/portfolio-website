import { buttonClasses } from "@mui/material";

export const buttonOverrides = (palette) => ({
  containedPrimary: {
    ["&." + buttonClasses.disabled]: {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
    },
  },
  containedSecondary: {
    ["&." + buttonClasses.disabled]: {
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
    },
  },
});
