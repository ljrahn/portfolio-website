import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import React from "react";

const ContactDetails = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 4,
        ml: { xs: 0, md: 1 },
        mt: { xs: 2, md: 0 },
        backgroundColor: "#214c9c",
        borderRadius: 3,
        position: "relative",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "0.2",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: 3,
          backgroundPosition: "center",
          backgroundImage: `url(/img/ContactImg2.jpeg)`,
        }}
      />
      <Typography mb={10} variant="h5" color="secondary">
        Contact Information
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: { xs: "300px", md: "70%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", zIndex: 20 }}>
            <EmailIcon fontSize="large" sx={{ mr: 5, color: "white" }} />
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h5" color="grey.300">
                Email
              </Typography>
              <a
                href="mailto:lucasrahn09@gmail.com"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    "&:hover": { color: "primary.light" },
                  }}
                >
                  <Typography variant="body">lucasrahn09@gmail.com</Typography>
                  <LinkIcon sx={{ ml: 1 }} />
                </Box>
              </a>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", zIndex: 20 }}>
            <PhoneEnabledIcon fontSize="large" sx={{ mr: 5, color: "white" }} />
            <Box
              sx={{
                textAlign: "left",
                width: { xs: "178px", sm: "214.5px" },
              }}
            >
              <Typography variant="h5" color="grey.300">
                Phone
              </Typography>

              <Typography variant="body" color="white">
                1-519-535-8598
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box mr={2} sx={{ zIndex: 20 }}>
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
                "&:hover": { color: "grey.500" },
              }}
              fontSize="large"
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;
