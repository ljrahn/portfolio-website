import { Button, Link, Typography } from "@mui/material";
import MenuBook from "@mui/icons-material/MenuBook";
import React from "react";

let resumeFile;

if (process.env.NODE_ENV !== "production") {
  resumeFile = process.env.REACT_APP_RESUME_LOCATION;
} else {
  resumeFile = process.env.REACT_APP_RESUME_LOCATION;
}

const ResumeButton = (props) => {
  const { sx, children, download, ...otherProps } = props;

  return (
    <Link
      href={resumeFile}
      target="_blank"
      sx={{ textDecoration: "none", flex: 1 }}
      download={download ? true : false}
    >
      <Button {...otherProps} sx={{ ...sx }}>
        <MenuBook />
        <Typography variant="body2" ml={1}>
          {children}
        </Typography>
      </Button>
    </Link>
  );
};

export default ResumeButton;
