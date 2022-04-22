import { Grid, Typography } from "@mui/material";
import HtmlTooltip from "../Tooltip/HtmlTooltip";
import React, { useRef } from "react";
import { useIntersectionObserver } from "../../hooks";
import { useSpring, animated, config } from "react-spring";
import MoveFade from "../../Animation/MoveFade";
import Header from "../Header/Header";

const imgs = [
  {
    src: "/img/skills/python-logo-img.png",
    name: "Python",
    description: `Python is the first language that I started developing applications with. Currently it is my go to language for anything running on the server`,
  },
  {
    src: "/img/skills/javascript-logo-img.png",
    name: "Javascript (ES6)",
    description: `I picked up Javascript soon after Python, so I could develop web applications.`,
  },
  {
    src: "/img/skills/react-logo-img.png",
    name: "React",
    description: `Looking for a modern Javascript framework, all the rage lead to me React. This was a huge upgrade from vanilla Javascript and lead me to build much more powerful client side applications.`,
  },
  {
    src: "/img/skills/flask-logo-img.png",
    name: "Flask",
    description: `Recently I have been developing most of my server side applications with Flask. I plan to branch out, and am eager to learn other web development frameworks.`,
  },
  {
    src: "/img/skills/docker-logo-img.png",
    name: "Docker",
    description: `Docker just seems to me like the way to run and deploy applications... It just makes life easy for everyone!`,
  },
  {
    src: "/img/skills/eth-logo-img.png",
    name: "Ethereum",
    description: `I have been very interested in the blockchain space lately. As such, I have been learning about the Bitcoin and Ethereum ecosystem, and have been writing small Solidity applications, using both Javascript and Python as clients.`,
  },
];

const SkillsBar = () => {
  return (
    <>
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
    </>
  );
};

export default SkillsBar;
