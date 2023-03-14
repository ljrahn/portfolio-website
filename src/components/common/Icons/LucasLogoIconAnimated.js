import { animated, config, easings, useSpring } from "react-spring";
import React, { useRef } from "react";
import "../../../styles/logoAnimation.css";
import { useIntersectionObserver } from "../../hooks";
import useWindowDimensions from "../../hooks/effects/useWindowDimensions";

const LucasLogoIconAnimated = (props, { width, height }) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const animation = useSpring({
    from: { x: 0, y: 0, opacity: 1, width: "200px" },
    to: {
      width: "0px",
      opacity: 0,
    },
    config: {
      mass: 10,
      tension: 80,
      friction: 80,
      easing: easings.easeInOutCirc,
    },
    delay: 2500,
  });

  return (
    <>
      <div ref={triggerRef} />
      <animated.div
        style={{
          ...animation,
          marginLeft: "auto",
          marginRight: "auto",
          height: "90vh",
          verticalAlign: "middle",
        }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
          className={dataRef?.isIntersecting ? "active" : ""}
        >
          <g
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#456aff"
            stroke="#456aff"
            strokeWidth="6"
          >
            <path
              className="svg-elem-1"
              d="M962 1962 c-38 -21 -171 -99 -232 -136 -25 -15 -162 -96 -305 -180
l-260 -153 -3 -496 -2 -496 207 -117 c115 -64 228 -129 253 -144 25 -15 104
-60 175 -100 72 -40 148 -83 171 -96 l40 -24 415 243 414 243 3 495 2 494 -22
14 c-23 14 -450 260 -538 309 -25 14 -76 43 -115 65 -183 104 -168 98 -203 79z
m-574 -713 c2 -14 -11 -94 -28 -178 -16 -84 -30 -157 -30 -162 0 -5 11 -7 25
-3 19 5 25 2 25 -10 0 -11 -18 -25 -46 -37 -42 -19 -47 -19 -70 -5 -30 20 -30
28 2 182 14 68 26 147 27 175 2 44 5 50 27 55 14 3 30 7 35 9 20 6 30 -2 33
-26z m930 -5 c2 -16 -4 -59 -11 -96 l-14 -67 28 14 c36 19 63 19 79 0 12 -15
11 -48 -6 -154 -7 -41 -6 -43 15 -36 41 13 23 -25 -21 -45 -37 -16 -46 -17
-63 -6 -22 15 -25 51 -11 144 5 29 5 52 0 52 -24 -1 -36 -24 -52 -106 l-17
-89 -42 -3 c-33 -2 -43 0 -43 12 0 8 14 77 30 151 17 75 34 162 38 193 7 53 9
57 37 63 43 9 50 6 53 -27z m-767 -4 c26 -14 24 -55 -3 -74 -28 -20 -43 -20
-62 0 -21 21 -20 40 4 64 23 23 33 24 61 10z m-4 -207 c-15 -172 -50 -275
-102 -300 -30 -14 -36 -14 -71 3 -22 11 -40 27 -42 36 -3 14 3 16 31 11 46 -7
61 15 81 126 18 96 20 157 6 166 -28 17 -1 31 69 34 l34 1 -6 -77z m189 62 c5
-13 8 -13 27 0 29 20 54 19 67 -4 15 -29 13 -39 -16 -58 -22 -14 -29 -14 -46
-4 -29 18 -36 6 -49 -79 -16 -104 -14 -100 -59 -100 -38 0 -40 2 -40 29 0 16
7 62 15 101 10 50 12 77 5 90 -13 25 -13 28 8 33 39 10 83 7 88 -8z m363 1 c5
-3 3 -31 -5 -63 -8 -32 -14 -74 -14 -95 0 -31 3 -35 20 -31 39 10 22 -27 -22
-47 -39 -17 -66 -17 -79 2 -3 5 -21 2 -40 -6 -66 -27 -103 11 -101 102 2 60
32 124 66 140 21 11 157 9 175 -2z m509 -2 c8 -14 11 -13 38 2 39 22 81 13 90
-21 3 -13 -1 -55 -10 -94 -20 -87 -20 -84 3 -76 27 8 37 -13 15 -31 -24 -18
-75 -32 -92 -26 -26 9 -31 47 -15 121 17 75 13 92 -15 75 -18 -12 -39 -87 -41
-145 -1 -40 -13 -49 -62 -49 -35 0 -36 12 -13 123 11 56 12 81 5 96 -14 26
-14 29 7 34 39 11 81 6 90 -9z"
            />
            <path
              d="M971 1056 c-15 -18 -30 -99 -23 -131 3 -17 10 -25 20 -23 15 3 39 94
41 151 1 20 -22 23 -38 3z"
            />
          </g>
        </svg>
      </animated.div>
    </>
  );
};

export default LucasLogoIconAnimated;
