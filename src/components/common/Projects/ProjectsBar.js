import { Box, Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import MoveFade from "../../Animation/MoveFade";
import Header from "../Header/Header";
import ProjectsItem from "./ProjectsItem";
import ProjectsItemSmall from "./ProjectsItemSmall";

const projects = [
  {
    src: "/img/projects/eth-marketplace-img.png",
    name: "Ethereum Marketplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur voluptatibus consequatur nisi autem mollitia voluptatem, minus architecto, fugiat eos quisquam accusamus, velit unde corporis optio assumenda",
    skills: ["React", "SWR", "Solidity", "ERC721"],
  },
  {
    src: "/img/projects/ecommerce-buisness-tools.png",
    name: "Ecommerce Buisness Tools",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur voluptatibus consequatur nisi autem mollitia voluptatem, minus architecto, fugiat eos quisquam accusamus, velit unde corporis optio assumenda",
    skills: ["Python", "Flask", "etc."],
  },
];

const ProjectsBar = ({ headerIndex }) => {
  return (
    <>
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
