import { Box, Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import MoveFade from "../../Animation/MoveFade";
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

const ProjectsBar = () => {
  return (
    <>
      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Typography id="projects" variant="h3" textAlign="center" mb={3}>
          Projects
        </Typography>
      </MoveFade>

      {projects.map((project, index) => (
        <Box key={index}>
          <Box sx={{ display: { md: "block", xs: "none" } }}>
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
