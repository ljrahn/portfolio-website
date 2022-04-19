import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Hero from "../common/Hero/Hero";
import ContactForm from "../common/Contact/ContactForm";
import { Box } from "@mui/system";
import SkillsBar from "../common/Skills/SkillsBar";
import ProjectsBar from "../common/Projects/ProjectsBar";
import Footer from "../layout/Footer";
import Experience from "../common/Experience/Experience";
import ProjectsBar2 from "../common/Projects/ProjectsBar";

const Home = () => {
  // const github = useGithub();

  useEffect(() => {});

  return (
    <div>
      <Hero />
      <Container>
        <Box mt={10} />
        <Experience />
        <Box mt={10} />
        <ProjectsBar2 />
        <Box mt={10} />
        <SkillsBar />
        <Box mt={10} />
        <ContactForm />
        <Box mt={12} />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
