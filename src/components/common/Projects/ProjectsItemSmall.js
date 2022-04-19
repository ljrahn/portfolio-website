import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import DemoIcon from "../Icons/DemoIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { animated, config, easings, useSpring } from "react-spring";
import { useIntersectionObserver } from "../../hooks";
import MoveFade from "../../Animation/MoveFade";

const ProjectsItemSmall = ({ data }) => {
  return (
    <MoveFade y={"150px"} triggerMargin={"100px"}>
      <Box container mb={4}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
          <Paper
            sx={{
              backgroundColor: "grey.500",
              gridArea: "1/1/1/-1",
              opacity: 0.1,
              backgroundImage: `url(${data.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
          <Box zIndex={1} sx={{ gridArea: "1/1/1/-1" }} p={3}>
            <Typography variant="body1" color="secondary.main">
              Featured Project
            </Typography>
            <Typography variant="h5" color="primary.main" my={1}>
              {data.name}
            </Typography>

            <Typography variant="body1" mb={2}>
              {data.description}
            </Typography>
            <Box my={2}>
              {data.skills.map((skill, idx) => (
                <Box key={idx} display="inline">
                  {idx === 0 ? (
                    <Typography
                      pr={1}
                      py={1}
                      display="inline"
                      fontFamily="monospace"
                    >
                      {skill}
                    </Typography>
                  ) : (
                    <Typography p={1} display="inline" fontFamily="monospace">
                      {skill}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Button
                sx={{ mr: 1 }}
                variant="contained"
                color="secondary"
                endIcon={<DemoIcon />}
              >
                Demo
              </Button>
              <Button
                sx={{ ml: 1 }}
                variant="contained"
                color="primary"
                endIcon={<GitHubIcon />}
              >
                View Code
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MoveFade>
  );
};

export default ProjectsItemSmall;
