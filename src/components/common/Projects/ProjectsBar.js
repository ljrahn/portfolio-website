import { Box, Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import MoveFade from "../../Animation/MoveFade";
import Header from "../Header/Header";
import ProjectsItem from "./ProjectsItem";
import ProjectsItemSmall from "./ProjectsItemSmall";

const projects = [
  {
    src: "/img/projects/digimarkets-cover.png",
    name: "Digimarkets",
    description:
      "An application that allows users browse NFT contracts and their tokens. After connecting a metamask wallet, you have full access to view your NFT's, your NFT transaction history, and any NFT contract, for multiple EVM compatible chains.",
    skills: ["Flask", "NextJS", "SWR", "Metamask", "TailwindCSS"],
    demo: "https://digimarkets.lujr.ca",
    code: "https://github.com/lucasrahn09/digi-markets",
  },
  {
    src: "/img/projects/portfolio-project.png",
    name: "Portfolio",
    description:
      "My portfolio which outlines my skills and experience developing software.",
    skills: ["React", "Material-UI"],
    demo: "https://lujr.ca",
    code: "https://github.com/lucasrahn09/portfolio-website",
  },
];

const ProjectsBar = ({ headerIndex }) => {
  return (
    <>
      <div id="projects" />
      <Header index={headerIndex} title="Projects" />

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
