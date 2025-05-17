import React, { useState, useMemo, createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../config/theme/theme";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

/**
 * context provider to provide app level state for the theme
 */
export const ColorModeContextProvider = ({ children }) => {
  // set initial color state
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialState = savedTheme || (systemPrefersDark ? "dark" : "light");

  const [mode, setMode] = useState(initialState);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.setItem("theme", mode === "light" ? "dark" : "light");
      },
      mode,
      isThemeLight: mode === "light" ? true : false,
    }),
    [mode]
  );

  const theme = useMemo(() => customTheme(mode));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

/**
 * Hook for access to color mode state
 */
export const useColorMode = () => useContext(ColorModeContext);
