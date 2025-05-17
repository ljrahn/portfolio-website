import { Box, Grid, ListItem, Typography, Link } from "@mui/material";
import React from "react";
import MoveFade from "../../Animation/MoveFade";
import Header from "../Header/Header";
import ProjectsItem from "./ProjectsItem";
import ProjectsItemSmall from "./ProjectsItemSmall";

const projects = [
  {
    src: "/img/projects/apollo-cover.png",
    name: "Apollo Rehabilitation Glove",
    description:
      "A hand rehabilitation application, that presents users with activities to complete. Tracks hand motions in real time, presented on the screen, and scores users based on agility and dexterity.",
    skills: [
      "Arduino",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Python",
      "Websockets",
      "ThreeJS",
    ],
    code: "https://github.com/ljrahn/apollo-rehabilitation-glove",
    demo: "https://www.youtube.com/watch?v=PwgL4q7kh08&t=2s&ab_channel=ljrahn",
  },
  {
    src: "/img/projects/event-qr-cover.png",
    name: "EventQR",
    description:
      "A QR code scanning application for uOttaHack 2023 which tracked food consumption, and raffle tickets for 500 hackers.",
    skills: ["React Native", "Firebase Firestore", "Python"],
    code: "https://github.com/ljrahn/event-qr",
  },

  {
    src: "/img/projects/arber-cover.png",
    name: "Arber",
    description: (
      <p>
        A DAO that facilitates trustless donations, and holds fundraisers
        accountable to their mission statement by integrating Kleros for
        arbitrating disputes between fundraisers and donors. Check out the{" "}
        <Link
          href="https://arber.gitbook.io/docs/white-paper/white-paper"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          whitepaper
        </Link>
        !
      </p>
    ),
    skills: [
      "Solidity",
      "React",
      "Hardhat",
      "Foundry",
      "IPFS",
      "TheGraph",
      "Kleros",
    ],
    code: "https://github.com/arber-dao",
  },
];

const ProjectsBar = ({ headerIndex }) => {
  return (
    <>
      <div id="projects" />
      <Header index={headerIndex} title="Relevant Projects" />

      {projects.map((project, index) => (
        <Box key={index}>
          <Box sx={{ display: { md: "block", xs: "none" } }} mb={10}>
            <ProjectsItem data={project} index={index} />
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <ProjectsItemSmall data={project} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ProjectsBar;
