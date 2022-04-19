import { Box } from "@mui/material";
import React, { useRef } from "react";
import { animated, config, useSpring } from "react-spring";
import { useIntersectionObserver } from "../hooks";

const DEFAULT_CONFIG = config.slow;

const MoveFade = ({
  x,
  y,
  triggerMargin,
  freezeOnceVisible,
  customConfig,
  children,
  delay,
  fade,
}) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: freezeOnceVisible ? freezeOnceVisible : true,
    rootMargin: triggerMargin ? triggerMargin : "0px",
  });
  const AnimatedBox = animated(Box);

  const styleAnimation = useSpring({
    from: {
      x: x ? x : "0px",
      y: y ? y : "0px",
      opacity: fade === false ? 1 : 0,
    },
    to: {
      x: dataRef?.isIntersecting ? "0px" : x ? x : "0px",
      y: dataRef?.isIntersecting ? "0px" : y ? y : "0px",
      opacity: fade === false ? 1 : dataRef?.isIntersecting ? 1 : 0,
    },
    config: customConfig ? customConfig : DEFAULT_CONFIG,
    delay: delay ? delay : 0,
  });

  return (
    <animated.div style={styleAnimation}>
      <div ref={triggerRef} />
      {children}
    </animated.div>
  );
};

export default MoveFade;
