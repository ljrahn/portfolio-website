import { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useColorMode } from "../../context/ColorModeContext";
import { Link as ScrollLink } from "react-scroll";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import ThemeSwitch from "../common/Buttons/ThemeSwitch";
import ResumeButton from "../common/Buttons/ResumeButton";
import MoveFade from "../Animation/MoveFade";

const ANIMATION_SPEED_FACTOR = 10;

const pages = [
  {
    name: "About",
    idRef: "about",
  },
  {
    name: "Experience",
    idRef: "experience",
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

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElSettings, setAnchorElSettings] = useState(null);
  const { isThemeLight } = useColorMode();

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenSettingsMenu = (e) => {
    setAnchorElSettings(e.currentTarget);
  };
  const handleCloseSettingsMenu = () => {
    setAnchorElSettings(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: isThemeLight ? "white" : null }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo for big screen */}
          <Box sx={{ display: { xs: "none", md: "flex" } }} mr={2}>
            <MoveFade y={"-100px"} triggerMargin={"100px"}>
              <ScrollLink to="hero" spy={true} smooth={true}>
                <Box sx={{ cursor: "pointer" }}>
                  <img src="/img/LucasLogo.png" alt="" width="50px" />
                </Box>
              </ScrollLink>
            </MoveFade>
          </Box>
          {/* Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MoveFade y={"-100px"} triggerMargin={"100px"}>
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
            </MoveFade>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page, index) => (
                <ScrollLink
                  key={index}
                  to={page.idRef}
                  spy={true}
                  smooth={true}
                  offset={-68}
                >
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography color="text.primary">{page.name}</Typography>
                  </MenuItem>
                </ScrollLink>
              ))}
            </Menu>
          </Box>
          {/* Logo for small screen */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <MoveFade y={"-100px"} triggerMargin={"100px"} delay={300}>
              <ScrollLink to="hero" spy={true} smooth={true}>
                <Box sx={{ cursor: "pointer" }}>
                  <img src="/img/LucasLogo.png" alt="" width="50px" />
                </Box>
              </ScrollLink>
            </MoveFade>
          </Box>

          {/* Large Screen in line navbar items */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 2 }}>
            {pages.map((page, index) => (
              <MoveFade
                y={"-100px"}
                triggerMargin={"100px"}
                key={index}
                delay={
                  ANIMATION_SPEED_FACTOR * 10 * index +
                  ANIMATION_SPEED_FACTOR * 10
                }
              >
                <ScrollLink
                  key={index}
                  to={page.idRef}
                  spy={true}
                  smooth={true}
                  offset={-68}
                >
                  <Typography
                    m={2}
                    variant="body1"
                    color="text.primary"
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
                </ScrollLink>
              </MoveFade>
            ))}
          </Box>

          <MoveFade
            y={"-100px"}
            triggerMargin={"100px"}
            delay={ANIMATION_SPEED_FACTOR * 10 * pages.length + 6}
          >
            <Box sx={{ marginRight: { xs: 0, md: 2 } }}>
              <ResumeButton
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  paddingTop: { xs: "3px", md: "6px" },
                  paddingBottom: { xs: "3px", md: "6px" },
                  paddingRight: { xs: "9px", md: "18px" },
                  paddingLeft: { xs: "9px", md: "18px" },
                }}
              >
                View Resume
              </ResumeButton>
            </Box>
          </MoveFade>
          <MoveFade
            y={"-100px"}
            triggerMargin={"100px"}
            delay={ANIMATION_SPEED_FACTOR * 10 * pages.length + 10}
          >
            <ThemeSwitch />
          </MoveFade>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
