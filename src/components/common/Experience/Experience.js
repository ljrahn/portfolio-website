import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowRight } from "@mui/icons-material";
import { Collapse, Divider, IconButton, useMediaQuery } from "@mui/material";
import MoveFade from "../../Animation/MoveFade";
import Header from "../Header/Header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// const resizeIframe = (obj) => {
//   obj.style.height =
//     obj.contentWindow.document.documentElement.scrollHeight + "px";
// };

const experienceItems = [
  {
    role: "Software Developer",
    company: "CNTautomation",
    location: "Kitchener, ON",
    date: "September 2021 - December 2021",
    descriptionPoints: [
      {
        children:
          "Designed and developed internal tools that would be used for creating custom HTML/CSS templates for products to be posted on ecommerce platforms. Developed a shipment tracking service that would pick up all shipments and display detailed status for multiple tracking carriers.",
      },
      {
        children:
          "Developed with Flask, ES6 and deployed on an AWS Lightsail instance using Docker/Docker Compose. Managed domains on Route 53 and images on S3 with Cloudfront.",
      },
      {
        children: (
          <iframe
            width="80%"
            height="300px"
            src="https://www.youtube.com/embed/U1X5tpjX95c"
            title="YouTube video player"
            frameborder="100"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen={true}
            border
          ></iframe>
        ),
        collapsable: true,
        title: "Demo Video",
      },
    ],
  },
  {
    role: "QA Engineer",
    company: "Netexperience",
    location: "Ottawa, ON",
    date: "January 2021 - September 2021",
    descriptionPoints: [
      {
        children:
          "Designed and developed automation tests for disaggregated Open WiFi network solutions. Verified proper operation of access points and cross verified data sent to and from the company's API. All automation was developed with python using pytest framework, integrating TestRail APIs and Allure reporting framework for building test reports.",
      },
      {
        children:
          "Developed sanity tests which tests basic operation of the Cloud SDK and access point firmware by applying SSID profiles to the access points from the cloud, connecting wifi clients, and running TCP and UDP traffic. Used Candela Techs Lanforge solution for connecting emulated clients to the access points through the use of their libraries.",
      },
      {
        children:
          "Planned and wrote various other automation regression tests including tests for GRE tunneling, and interoperability using real wifi devices controlled by Appium.",
      },
      {
        children: "Designed and developed UI automation tests using selenium.",
      },
      {
        children:
          "Created bug reports using JIRA. Was in frequent communication with all development teams to resolve bugs promptly.",
      },
    ],
  },
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: { xs: 3, md: 0 } }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const Item = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex" mt={2}>
      <ArrowRight sx={{ marginTop: "1px", color: "secondary.main" }} />
      {item.collapsable ? (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "3rem",
              backgroundColor: "grey.800",
              borderRadius: 3,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setOpen(!open)}
          >
            <IconButton size="large" sx={{ ml: 2, color: "white" }}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <Box sx={{ textAlign: "center", width: "80%" }}>
              <Typography variant="h6" color="white">
                {item.title}
              </Typography>
            </Box>
          </Box>
          <Collapse
            in={open}
            timeout="auto"
            sx={{ width: "100%" }}
            unmountOnExit
          >
            <Box
              sx={{
                textAlign: "center",
                mt: 0.5,
                backgroundColor: "grey.800",
                padding: 2,
                borderRadius: 3,
              }}
            >
              {item.children}
            </Box>
          </Collapse>
        </Box>
      ) : (
        // </IconButton>
        <Typography>{item.children}</Typography>
      )}
    </Box>
  );
};

const Experience = ({ headerIndex }) => {
  const [value, setValue] = useState(0);
  const smScreenWidth = useMediaQuery("(max-width:900px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div id="experience" />
      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Header index={headerIndex} title="Relevant Experience" />
      </MoveFade>

      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {smScreenWidth ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Tabs
                orientation="horizontal"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Experience Tabs"
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                {experienceItems.map((item, idx) => (
                  <Tab key={idx} label={item.company} {...a11yProps(idx)} />
                ))}
              </Tabs>
            </Box>
          ) : (
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Experience Tabs"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                flex: "0 0 180px",
                alignSelf: "center",
                width: "100%",
              }}
            >
              {experienceItems.map((item, idx) => (
                <Tab key={idx} label={item.company} {...a11yProps(idx)} />
              ))}
            </Tabs>
          )}

          {experienceItems.map((item, idx) => (
            <TabPanel key={idx} value={value} index={idx}>
              <Typography color="grey.700" component={"span"} variant="h5">
                {item.role}
              </Typography>
              <Typography component={"span"} color="grey.400" variant="h5">
                {" "}
                @ {item.company}
              </Typography>
              <Typography
                ml={1}
                mt={1}
                fontFamily="monospace"
                variant="subtitle2"
              >
                {item.date}
              </Typography>
              {item.descriptionPoints.map((point, idy) => (
                <Item key={idy} item={point} />
              ))}
            </TabPanel>
          ))}
        </Box>
      </MoveFade>
    </>
  );
};

export default Experience;
