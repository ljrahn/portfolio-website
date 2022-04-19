import { Grid, Typography } from "@mui/material";
import HtmlTooltip from "../Tooltip/HtmlTooltip";
import React, { useRef } from "react";
import { useIntersectionObserver } from "../../hooks";
import { useSpring, animated, config } from "react-spring";
import MoveFade from "../../Animation/MoveFade";

const imgs = [
  {
    src: "/img/skills/python-logo-img.png",
    name: "Python",
    description: `asd`,
  },
  {
    src: "/img/skills/javascript-logo-img.png",
    name: "Javascript",
    description: `asd`,
  },
  {
    src: "/img/skills/react-logo-img.png",
    name: "React",
    description: `asd`,
  },
  {
    src: "/img/skills/flask-logo-img.png",
    name: "Flask",
    description: `asd`,
  },
  {
    src: "/img/skills/docker-logo-img.png",
    name: "Docker",
    description: `asd`,
  },
  {
    src: "/img/skills/eth-logo-img.png",
    name: "Ethereum",
    description: `asd`,
  },
];

const SkillsBar = () => {
  return (
    <>
      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Typography id="skills" mb={2} textAlign="center" variant="h3">
          Languages and Tools I Use Most
        </Typography>
      </MoveFade>

      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Grid container spacing={3} justifyContent="center">
          {imgs.map((img, index) => (
            <HtmlTooltip
              key={index}
              placement="bottom"
              title={
                <>
                  <Typography color="inherit">{img.name}</Typography>
                  {img.description}
                </>
              }
            >
              <Grid item sm={2} xs={3}>
                <img src={img.src} alt="" width="100%" height="auto" />
              </Grid>
            </HtmlTooltip>
          ))}
        </Grid>
      </MoveFade>
    </>
  );
};

export default SkillsBar;
