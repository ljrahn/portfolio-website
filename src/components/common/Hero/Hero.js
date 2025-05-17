import { Typography, useTheme, Button, Container, Link } from "@mui/material";
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
            backgroundImage: `url(/img/LucasHero.jpeg)`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "22rem",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
          textAlign="left"
        >
          <Container>
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
              <Typography
                variant="body1"
                sx={{ fontWeight: "1000", color: "white", mt: 3 }}
              >
                Full stack developer with a founder's vision, adept at
                architecting and building scalable applications. I leverage
                strong problem solving skills, a robust technical foundation,
                and a drive to learn and build that enables me craft solutions
                that are tailored to the problem and business requirements. As
                the founder and CTO of{" "}
                <Link
                  sx={{
                    color: "white",
                    textDecorationColor: "white",
                    cursor: "pointer",
                  }}
                  href="https://www.lendus.ca/"
                  target="_blank"
                >
                  Lendus
                </Link>
                , I put these principles into practise by engineering a
                commerical rental marketplace as a scalable, event driven
                modular monolith using TypeScript and Next.js.
              </Typography>
            </MoveFade>
            <MoveFade y={"300"} delay={700}>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-68}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Contact me
                </Button>
              </ScrollLink>
            </MoveFade>
          </Container>
        </Box>
      </Box>
    </MoveFade>
  );
};

export default Hero;
