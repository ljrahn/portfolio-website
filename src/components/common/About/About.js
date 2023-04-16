import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../Header/Header";
import Carousel from "react-material-ui-carousel";
import SkillsBar from "../Skills/SkillsBar";
import MoveFade from "../../Animation/MoveFade";
import { Link as ScrollLink } from "react-scroll";

const resumeFile = process.env.REACT_APP_RESUME_LOCATION;

const items = [
  {
    src: "/img/about/beach.jpeg",
  },
  {
    src: "/img/about/montreal.jpeg",
  },
  {
    src: "/img/about/urubici-mountain.jpg",
  },
  {
    src: "/img/about/urubici-brothers.jpeg",
  },
  {
    src: "/img/about/paragliding.jpg",
  },
];

const Item = ({ item }) => {
  return (
    <Box
      sx={{
        height: "300px",
        width: "100%",
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        backgroundColor: "grey",
      }}
    >
      <Box
        sx={{
          backgroundColor: "grey.800",
          minHeight: "100%",
          borderRadius: 3,
        }}
      >
        <img
          src={item.src}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            height: "100%",
            transform: "translate(-50%,-50%)",
            borderRadius: 3,
          }}
        />
      </Box>
    </Box>
  );
};

const About = ({ headerIndex }) => {
  return (
    <>
      <div id="about" />
      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Header title="About Me" index={headerIndex} />
      </MoveFade>

      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" }, flex: "none" }}>
            <Typography fontWeight={1000}>
              Hello, my name is Lucas Rahn and I am a 2023 BASc Electrical
              Engineering graduate from the University of Ottawa. Since early
              2021, I have been building and designing software solutions for
              people and companies.
            </Typography>
            <Typography fontWeight={1000} mt={2}>
              I have worked at{" "}
              <Link
                href="https://www.bellsolutionstech.ca/"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                Bell
              </Link>{" "}
              as a technician working on fibre and copper telecommunications
              infrastructure,{" "}
              <Link
                href="https://netexperience.com/"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                Netexperience
              </Link>
              , a company innovating and laying the ground work for
              disaggregated open WiFi, and{" "}
              <Link
                href="https://cntautomation.com/"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                CNTautomation
              </Link>
              , a company that redistributes specialty electrical equipment. In
              all of these roles, I have gained valuable experience in the world
              of telecommunications and networking, as well as software
              development experience in the latter two roles.
            </Typography>
            <Typography fontWeight={1000} mt={2}>
              I have taken an interest in my specialization of systems/control
              engineering, which among other things, includes design of logic
              gate circuits, and PIC programming. Additionally, I have worked on
              numerous web development and blockchain projects that involve a
              range of technologies. Below you will find a more detailed list of
              my{" "}
              <ScrollLink to="experience" spy={true} smooth={true} offset={-68}>
                <Typography
                  sx={{
                    display: "inline",
                    fontWeight: 1000,
                    cursor: "pointer",
                  }}
                  color="primary"
                >
                  work experience
                </Typography>
              </ScrollLink>{" "}
              and{" "}
              <ScrollLink to="projects" spy={true} smooth={true} offset={-68}>
                <Typography
                  sx={{
                    display: "inline",
                    fontWeight: 1000,
                    cursor: "pointer",
                  }}
                  color="primary"
                >
                  projects
                </Typography>
              </ScrollLink>{" "}
              , but for a quicker overview, check out my{" "}
              <Link
                href={resumeFile}
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                resume
              </Link>
              .
            </Typography>
            <Box mt={2} sx={{ textAlign: "center", width: "90%", mx: "auto" }}>
              <Typography variant="h6" fontWeight={1000}>
                Languages and Tools I Have Recently Worked With
              </Typography>
              <Typography mb={1} fontWeight={1000} variant="body2">
                (Mouse Over)
              </Typography>
              <SkillsBar />
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Carousel
              duration={1000}
              interval={8000}
              height="300px"
              sx={{
                textAlign: "center",
                backgroundColor: "grey.200",
                borderRadius: 3,
                padding: 2,
              }}
            >
              {items.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </Carousel>
          </Box>
        </Box>
      </MoveFade>
    </>
  );
};

export default About;
