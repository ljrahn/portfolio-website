import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import DemoIcon from "../Icons/DemoIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { animated, config, easings, useSpring } from "react-spring";
import { useIntersectionObserver } from "../../hooks";
import MoveFade from "../../Animation/MoveFade";

const ProjectsItem = ({ data, index }) => {
  const evenItem = index % 2 === 0;

  return (
    <MoveFade y={"150px"} triggerMargin={"100px"}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}
        container
        mb={3}
      >
        <Grid
          item
          zIndex={1}
          sx={{ gridArea: evenItem ? "1/1/1/7" : "1/7/1/-1" }}
        >
          <Box sx={{ textAlign: evenItem ? "left" : "right" }}>
            <Typography variant="body1" color="secondary.main" my={1}>
              Featured Project {index + 1}
            </Typography>
            <Typography variant="h5" color="primary.main" mb={2} mt={1}>
              {data.name}
            </Typography>
          </Box>

          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              marginBottom: "10px",
              backgroundColor: "primary.light",
              opacity: 0.9,
            }}
          >
            <Typography variant="body1" fontSize="0.9rem">
              {data.description}
            </Typography>
          </Paper>
          <Box my={2} sx={{ textAlign: evenItem ? "left" : "right" }}>
            {data.skills.map((skill, idx) => (
              <Typography
                key={idx}
                p={1}
                display="inline"
                fontFamily="monospace"
              >
                {skill}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: evenItem ? "flex-start" : "flex-end",
            }}
          >
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
        </Grid>
        <Box sx={{ gridArea: evenItem ? "1/6/1/-1" : "1/1/1/8" }} mx="auto">
          <Box mb={2} mx="auto">
            <img
              src={data.src}
              alt=""
              style={{
                border: "2px solid grey",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>
    </MoveFade>
  );
};

export default ProjectsItem;
