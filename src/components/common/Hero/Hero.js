import { Typography, useTheme, Button } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import MoveFade from "../../Animation/MoveFade";
import { config, easings } from "react-spring";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const theme = useTheme();

  return (
    <MoveFade>
      <div id="hero" />
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "0.4",
            height: "100vh",
            width: "100%",
            backgroundPosition: { md: "center", xs: "calc(40vw - 500px)" },
            // backgroundImage: `url(/img/LucasHero2.jpg)`,
            backgroundImage: `url(/img/LucasHero.jpeg)`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "22rem",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
          }}
          textAlign="left"
        >
          <MoveFade y={"300"} delay={300}>
            <Typography
              sx={{
                fontWeight: "700",
                color: "white",
                fontFamily: "Rubik",
              }}
              variant="h1"
            >
              Lucas Rahn
            </Typography>
          </MoveFade>
          <MoveFade y={"300"} delay={500}>
            {/* <Typography
              sx={{
                fontWeight: "800",
                color: "grey.500",
                fontFamily: "Rubik",
              }}
              variant="h3"
            >
              The Web is my Playground
            </Typography> */}
          </MoveFade>
          <MoveFade y={"300"} delay={700}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "1000", color: "white", mt: 3 }}
            >
              I love solving real world problems, learning about new technology,
              and building software that people can use to satisfy their
              business requirements. I am currently looking for a intern/co-op
              position in the industry, where I can utilize my skills, so that I
              can learn new things, and make your company successful.
            </Typography>
          </MoveFade>
          <MoveFade y={"300"} delay={700}>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-68}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Contact me
              </Button>
            </ScrollLink>
          </MoveFade>
        </Box>
      </Box>
    </MoveFade>
  );
};

export default Hero;
