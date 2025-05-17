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
    src: "/img/about/montreal.jpeg",
  },
  {
    src: "/img/about/cyprus-sarina.jpg",
  },
  {
    src: "/img/about/mexico-stand.png",
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
              My journey into software development has been driven by a passion
              for building impactful solutions from the ground up. This
              culminated in founding Lendus, where I navigated the entire
              product lifecycle. From initial concept and architectural design
              to development, deployment, test, and ongoing iteration. Leading
              this venture has honed my ability to not only engineer complex
              systems, like our event-driven rental marketplace, but also to
              understand the importance of balancing my desire to create the
              perfect software solution, the requirement to deliver a product
              that fits in the market, and the need to be able to create a
              scalable product that can be iterated upon.
            </Typography>
            <Typography fontWeight={1000} mt={2}>
              Prior to Lendus, my{" "}
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
              included contributing to software reliability at NetExperience by
              developing automated regression tests for their Open WiFi
              compatible WLAN services. Subsequently, I focused on enhancing
              operational efficiencies at CNTautomation Inc. by developing
              targeted internal software tools.
            </Typography>
            <Typography fontWeight={1000} mt={2}>
              These experiences have solidified my belief in creating software
              that is functional, scalable, maintainable, and truly addresses
              user needs. While my formal education is in Electrical
              Engineering, my professional focus and passion has been dedicated
              to mastering the art and science of software creation. For a
              deeper dive into the specific technologies and projects I've
              engaged with, please review my{" "}
              <Link
                href={resumeFile}
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                resume
              </Link>
              .
            </Typography>

            {/* <Box mt={2} sx={{ textAlign: "center", width: "90%", mx: "auto" }}>
              <Typography variant="h6" fontWeight={1000}>
                Languages and Tools I Have Recently Worked With
              </Typography>
              <Typography mb={1} fontWeight={1000} variant="body2">
                (Mouse Over)
              </Typography>
              <SkillsBar />
            </Box> */}
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
