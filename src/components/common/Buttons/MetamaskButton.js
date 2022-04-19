import React from "react";
import { Button, Typography } from "@mui/material";
import { useWeb3 } from "../../providers/web3";
import { useAccount } from "../../hooks/web3";
import MetamaskIcon from "../Icons/MetamaskIcon";

const MetamaskButton = (props) => {
  let { connect, isLoading, requireInstall } = useWeb3();
  const { account } = useAccount();
  const { sx, color, ...otherProps } = props;

  return (
    <>
      {isLoading === true ? (
        <Button {...otherProps} disabled sx={{ ...sx }} color={color}>
          <MetamaskIcon />
          <Typography variant="body2" ml={1}>
            Loading...
          </Typography>
        </Button>
      ) : account.data ? (
        <Button
          {...otherProps}
          color={color}
          sx={{
            ...sx,
            cursor: "default",
            "&:hover": {
              backgroundColor: `${color}.main`,
            },
          }}
          disableRipple
        >
          <MetamaskIcon />
          <Typography variant="body2" ml={1}>
            Hi There {account.isAdmin && "Admin"}
          </Typography>
        </Button>
      ) : requireInstall ? (
        <Button
          {...otherProps}
          sx={{ ...sx }}
          color={color}
          onClick={() =>
            window.open("https://metamask.io/download.html", "_blank")
          }
        >
          <MetamaskIcon />
          <Typography variant="body2" ml={1}>
            Install Metamask
          </Typography>
        </Button>
      ) : (
        <Button {...otherProps} color={color} sx={{ ...sx }} onClick={connect}>
          <MetamaskIcon />
          <Typography variant="body2" ml={1}>
            Connect
          </Typography>
        </Button>
      )}
    </>
  );
};

export default MetamaskButton;
