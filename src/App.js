import "./App.css";
import { useEffect, useState } from "react";
import { ColorModeContextProvider } from "./context/ColorModeContext";
import "@fontsource/open-sans";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import emailjs from "@emailjs/browser";
import { CssBaseline } from "@mui/material";
import LucasLogoIconAnimated from "./components/common/Icons/LucasLogoIconAnimated";

const emailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

const App = () => {
  const [timerBoolean, setTimerBoolean] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimerBoolean(true);
    }, 3200);
  }, []);

  useEffect(() => {
    emailjs.init(emailPublicKey);
  }, []);

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      {!timerBoolean ? (
        <LucasLogoIconAnimated />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </ColorModeContextProvider>
  );
};

export default App;
