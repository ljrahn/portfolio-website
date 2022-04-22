import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Hero from "../common/Hero/Hero";
import Contact from "../common/Contact/Contact";
import { Box } from "@mui/system";
import SkillsBar from "../common/Skills/SkillsBar";
import Footer from "../layout/Footer";
import Experience from "../common/Experience/Experience";
import ProjectsBar from "../common/Projects/ProjectsBar";
import About from "../common/About/About";

const Components = [About, Experience, ProjectsBar, Contact];

const Home = () => {
  // const github = useGithub();

  useEffect(() => {});

  return (
    <div>
      <Hero />
      <Container>
        <Box sx={{ mt: { xs: 5, md: 20 } }} />

        {Components.map((Component, index) => (
          <Box key={index}>
            <Component headerIndex={index + 1} />
            <Box sx={{ mt: { xs: 10, md: 40 } }} />
          </Box>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
