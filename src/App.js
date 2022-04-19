import "./App.css";
import { useEffect, useState } from "react";
import { ColorModeContextProvider } from "./context/ColorModeContext";
import "@fontsource/open-sans";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { CssBaseline } from "@mui/material";

const App = () => {
  const [timerBoolean, setTimerBoolean] = useState(false);

  useEffect(() => {
    window.process = {
      ...window.process,
    };
    setTimeout(() => {
      setTimerBoolean(true);
    }, 3800);
  }, []);

  return (
    <>
      {/* {!timerBoolean ? (
        <LucasLogoIconAnimated />
      ) : ( */}
      <ColorModeContextProvider>
        <CssBaseline />
        <Navbar />
        <Home />
      </ColorModeContextProvider>
      {/* )} */}
    </>
  );
};

export default App;
