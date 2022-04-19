import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import MoveFade from "../../Animation/MoveFade";
import { config, easings } from "react-spring";

const Hero = () => {
  const theme = useTheme();

  return (
    <MoveFade>
      <div id="hero" />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "0.5",
            height: "100vh",
            width: "100%",
            backgroundPosition: { md: "center", xs: "calc(40vw - 400px)" },
            backgroundImage: `url(${window.location.origin}/img/LucasHero.jpeg)`,
          }}
        />
        <Box
          sx={{
            maxWidth: "1152px",
            position: "absolute",
            top: "22rem",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          textAlign="center"
        >
          <MoveFade y={"300"} delay={300}>
            <Typography sx={{ fontFamily: "fantasy" }} variant="h1">
              Lucas Rahn
            </Typography>
          </MoveFade>
          <MoveFade y={"300"} delay={500}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              velit minima blanditiis aperiam suscipit laudantium minus
              consectetur iure suscipit laudantium minus consectetur iure
              suscipit laudantium minus consectetur iure
            </Typography>
          </MoveFade>
        </Box>
      </Box>
    </MoveFade>
  );
};

export default Hero;
