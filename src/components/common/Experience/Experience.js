import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowRight } from "@mui/icons-material";
import { Divider, useMediaQuery } from "@mui/material";
import MoveFade from "../../Animation/MoveFade";
import Header from "../Header/Header";

const experienceItems = [
  {
    role: "Software Developer",
    company: "CNTautomation",
    location: "Kitchener, ON",
    date: "September 2021 - November 2021",
    descriptionPoints: [
      "Designed and developed internal tools that would be used for creating custom HTML/CSS templates for products to be posted on ecommerce platforms. Developed a shipment tracking service that would pick up all shipments and display detailed status for multiple tracking carriers.",
      "Developed with Flask, ES6 and deployed on an AWS Lightsail instance using Docker/Docker Compose. Managed domains on Route 53 and images on S3 with Cloudfront.",
    ],
  },
  {
    role: "QA Engineer",
    company: "Netexperience",
    location: "Ottawa, ON",
    date: "January 2021 - September 2021",
    descriptionPoints: [
      "Designed and developed automation tests for disaggregated Open WiFi network solutions. Verified proper operation of access points and cross verified data sent to and from the company's API. All automation was developed with python using pytest framework, integrating TestRail APIs and Allure reporting framework for building test reports.",
      "Developed sanity tests which tests basic operation of the Cloud SDK and access point firmware by applying SSID profiles to the access points from the cloud, connecting wifi clients, and running TCP and UDP traffic. Used Candela Techs Lanforge solution for connecting emulated clients to the access points through the use of their libraries.",
      "Planned and wrote various other automation regression tests including tests for GRE tunneling, and interoperability using real wifi devices controlled by Appium.",
      "Designed and developed UI automation tests using selenium.",
      "Created bug reports using JIRA. Was in frequent communication with all development teams to resolve bugs promptly.",
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

const Experience = ({ headerIndex }) => {
  const [value, setValue] = useState(0);
  const smScreenWidth = useMediaQuery("(max-width:900px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header index={headerIndex} title="Relevant Experience" />
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
                <Box key={idy} display="flex" mt={2}>
                  <ArrowRight
                    sx={{ marginTop: "1px", color: "secondary.main" }}
                  />
                  <Typography>{point}</Typography>
                </Box>
              ))}
            </TabPanel>
          ))}
        </Box>
      </MoveFade>
    </>
  );
};

export default Experience;
