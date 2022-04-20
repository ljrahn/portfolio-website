import { Container, Divider, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/system";
import React from "react";
import ThemeSwitch from "../common/Buttons/ThemeSwitch";
import { Link as ScrollLink } from "react-scroll";
import ResumeButton from "../common/Buttons/ResumeButton";

const pages = [
  {
    name: "About",
    idRef: "about",
  },
  {
    name: "Skills",
    idRef: "skills",
  },
  {
    name: "Projects",
    idRef: "projects",
  },
  {
    name: "Contact",
    idRef: "contact",
  },
];

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "grey.900",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
        pb={1}
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} mb={3}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Box>
                  <Typography variant="h5" mb={1} color="grey.500">
                    About
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    ea odio facilis voluptate eius sunt nihil, nemo, eligendi
                    doloribus mollitia ipsa nisi fugit, labore impedit
                    praesentium. Perspiciatis deleniti modi porro.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box>
                  <Typography variant="h5" mb={1} color="grey.500">
                    Navigation
                  </Typography>
                </Box>
                {pages.map((page, index) => (
                  <Box key={index} mb={1.5}>
                    <ScrollLink
                      to={page.idRef}
                      spy={true}
                      smooth={true}
                      offset={-68}
                    >
                      <Box display="inline-block">
                        <Typography
                          variant="body1"
                          color="white"
                          fontWeight="bold"
                          sx={{
                            "&:hover": { cursor: "pointer" },
                            "&::after": {
                              content: '""',
                              display: "block",
                              width: "100%",
                              height: "2px",
                              backgroundColor: "secondary.main",
                              transform: "scaleX(0)",
                              transition: "transform 0.3s ease",
                            },
                            "&:hover::after": {
                              transform: "scaleX(1)",
                            },
                          }}
                        >
                          {page.name}
                        </Typography>
                      </Box>
                    </ScrollLink>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ float: { sm: "right" }, textAlign: { xs: "center" } }}>
                <Box sx={{ float: { sm: "right" } }}>
                  <Typography variant="h5" mb={1} color="grey.500">
                    Other
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "50%", sm: "100%" }, margin: "auto" }}>
                  <ResumeButton
                    variant="contained"
                    sx={{
                      marginTop: "15px",
                      height: 40,
                      width: "100%",
                    }}
                  >
                    View Resume
                  </ResumeButton>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: { sm: "end", xs: "center" },
                    marginTop: "5px",
                  }}
                >
                  <ThemeSwitch sx={{ margin: 0 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)" }} />
          <Box mt={3} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ cursor: "pointer" }} mr={1}>
              <ScrollLink to="hero" spy={true} smooth={true}>
                <img src="/img/LucasLogo.png" alt="" width="50px" />
              </ScrollLink>
            </Box>
            <Typography mt={1.5} mr="auto" variant="body1">
              Copyright © {new Date().getFullYear()}
            </Typography>

            <Box>
              <a
                href="https://www.linkedin.com/in/lucas-rahn-758a2121a/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  sx={{
                    marginRight: "12px",
                    color: "white",
                    "&:hover": { color: "#0077b7" },
                  }}
                  fontSize="large"
                />
              </a>
              <a
                href="https://github.com/lucasrahn09"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  sx={{
                    marginLeft: "12px",
                    color: "white",
                    "&:hover": { color: "grey.700" },
                  }}
                  fontSize="large"
                />
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
