import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoveFade from "../../Animation/MoveFade";
import HexagonIcon from "@mui/icons-material/Hexagon";

const Header = ({ index, title }) => {
  const direction = index % 2 ? "left" : "right";

  return (
    <MoveFade y={"150px"} triggerMargin={"100px"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: direction == "left" ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            md: direction == "left" ? "start" : "end",
          },
          mb: { xs: 3, md: 7 },
        }}
        mr={direction == "left" ? 0 : 5}
      >
        <HexagonIcon
          sx={{
            color: "primary.main",
            fontSize: 17,
            transform: "rotate(90deg)",
          }}
        />
        <Divider
          sx={{
            borderColor: "primary.main",
            borderWidth: "1px",
            opacity: "0.5",
            width: { md: 300, xs: 100 },
          }}
        />
        <Typography color="primary" textAlign="right" mb={1} variant="h3">
          {title}
        </Typography>
      </Box>
    </MoveFade>
  );
};

export default Header;
