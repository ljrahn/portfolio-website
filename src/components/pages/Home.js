import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Hero from "../common/Hero/Hero";
import Contact from "../common/Contact/Contact";
import { Box } from "@mui/system";
import SkillsBar from "../common/Skills/SkillsBar";
import Footer from "../layout/Footer";
import Experience from "../common/Experience/Experience";
import ProjectsBar from "../common/Projects/ProjectsBar";

const Components = [Experience, ProjectsBar, SkillsBar, Contact];

const Home = () => {
  // const github = useGithub();

  useEffect(() => {});

  return (
    <div>
      <Hero />
      <Container>
        <Box mt={20} />

        {Components.map((Component, index) => (
          <Box key={index}>
            <Component headerIndex={index} />
            <Box mt={40} />
          </Box>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
