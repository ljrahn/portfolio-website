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
    description: `Python was my first language, and the language which I am most comfortable with. I have written numerous Flask applications, and done a lot of testing with python.`,
  },
  {
    src: "/img/skills/javascript-logo-img.png",
    name: "Javascript/Typescript",
    description: `I picked up JS/TS soon after Python, so I could develop web applications. In addition to frontend, it also gave me a new language to work on the server with, and also proved very useful for developing Hardhat applications.`,
  },
  {
    src: "/img/skills/react-logo-img.png",
    name: "React",
    description: `Looking for a modern frontend framework, all the rage lead to me React. This is currently my go to framework for client side applications, and I usually choose between CRA, NextJS, and Gatsby depending on the circumstances.`,
  },
  {
    src: "/img/skills/docker-logo-img.png",
    name: "Docker",
    description: `Docker just seems to me like the way to run and deploy applications... It just makes life easy for everyone!`,
  },
  {
    src: "/img/skills/eth-logo-img.png",
    name: "Ethereum",
    description: `I have become very interested in the effect that Ethereum and other blockchains have had on DAO's and DEFI. I have developed applications in Solidity, and gotten familiar with tools such as Hardhat, Foundry, TheGraph, IPFS, Ethers.js, OpenZeppelin, Kleros, and Chainlink.`,
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
