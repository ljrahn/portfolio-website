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

  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  const animation = useSpring({
    from: { x: 0, y: 0, opacity: 1, width: "200px" },
    to: {
      y: -windowHeight * 0.47,
      x: -windowWidth * 0.5,
      width: "20px",
      opacity: 0,
    },
    config: {
      mass: 1,
      tension: 80,
      friction: 60,
      easing: easings.easeInCirc,
    },
    // config: { duration: 2000, easing: easings.easeInOutCirc },
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
              d="M572 1726 l-413 -243 1 -484 c0 -368 3 -487 13 -495 27 -25 831 -474
841 -470 6 2 195 112 419 243 l408 240 -1 484 c0 366 -4 487 -13 495 -16 14
-827 474 -836 473 -3 0 -192 -109 -419 -243z m143 -321 c14 -13 25 -33 25 -43
0 -30 -42 -85 -80 -104 -25 -13 -38 -28 -43 -50 -8 -30 -6 -36 24 -60 18 -15
48 -31 66 -34 44 -8 48 -18 17 -43 -31 -24 -62 -16 -109 29 -22 21 -34 27 -45
20 -21 -14 -64 -12 -78 2 -28 28 -1 78 43 78 26 0 48 41 25 48 -7 3 -21 13
-32 24 -23 23 -22 83 2 83 10 0 14 -8 12 -26 -2 -14 3 -31 11 -37 12 -10 15
-4 21 36 11 88 89 130 141 77z m122 -132 c-3 -21 -9 -55 -13 -75 -5 -30 -4
-38 8 -38 11 0 20 21 29 73 14 71 15 72 48 75 33 3 33 3 28 -30 -20 -107 -20
-118 -3 -118 23 0 20 -16 -6 -34 -26 -18 -59 -21 -74 -6 -6 6 -20 6 -40 -2
-62 -23 -77 9 -53 111 6 29 6 47 -1 56 -14 17 -2 25 43 25 l40 0 -6 -37z m284
27 c12 -7 19 -21 19 -41 0 -27 -3 -30 -27 -27 -20 2 -29 9 -31 26 -5 35 -20
26 -32 -20 -8 -29 -9 -48 -1 -65 12 -25 23 -28 51 -13 26 14 37 -7 14 -25 -54
-41 -126 -23 -139 35 -20 89 71 170 146 130z m220 4 c14 -4 14 -11 2 -67 -7
-34 -13 -67 -13 -73 0 -17 37 -10 61 12 21 19 21 19 45 -11 15 -18 24 -24 24
-15 0 8 -16 35 -35 59 -19 24 -35 48 -35 54 0 24 34 47 70 47 48 0 67 -21 51
-56 -7 -17 -8 -31 -1 -44 17 -31 11 -57 -16 -79 -31 -25 -71 -27 -101 -6 -20
14 -25 14 -58 -2 -27 -13 -40 -15 -54 -6 -12 7 -23 8 -35 1 -53 -30 -97 35
-76 112 17 62 40 80 102 79 29 0 60 -3 69 -5z m-573 -381 c20 -15 28 -30 30
-61 3 -36 -1 -43 -31 -68 l-35 -27 29 -66 c16 -36 40 -74 52 -84 21 -19 21
-19 2 -33 -56 -41 -88 -4 -119 137 -3 15 -14 29 -25 32 -17 4 -21 -4 -31 -59
-12 -64 -12 -64 -46 -64 -41 0 -41 0 -13 116 11 48 18 100 15 115 -5 28 11 39
62 39 24 0 27 -12 13 -71 -8 -34 -7 -35 16 -31 50 10 58 87 11 110 -36 17
-103 5 -137 -24 -23 -20 -24 -25 -13 -43 28 -46 -2 -73 -32 -29 -22 31 -20 52
7 83 48 56 186 72 245 28z m405 2 c-1 -11 -5 -42 -8 -68 -7 -48 -7 -49 14 -37
27 14 58 5 65 -18 3 -10 1 -33 -4 -52 -14 -50 -13 -80 5 -80 25 0 17 -19 -15
-35 -18 -9 -40 -13 -52 -9 -19 6 -20 11 -14 81 9 100 -13 96 -33 -5 l-14 -72
-33 0 c-21 0 -34 5 -34 13 0 6 11 59 25 117 14 58 25 121 25 141 0 44 6 51 45
47 23 -2 30 -8 28 -23z m-155 -110 c2 -2 -1 -24 -7 -49 -15 -63 -14 -96 4 -96
25 0 17 -19 -17 -36 -25 -13 -36 -14 -50 -5 -13 8 -24 8 -38 1 -27 -14 -37
-13 -60 10 -40 40 -18 160 33 179 22 9 126 6 135 -4z m452 0 c13 -15 9 -89 -6
-128 -5 -14 -3 -18 11 -15 33 6 26 -19 -9 -36 -62 -29 -81 -6 -64 79 6 31 8
58 4 62 -13 14 -28 -16 -39 -81 l-11 -66 -34 0 -34 0 8 48 c5 26 9 69 9 96 l0
48 51 -5 c28 -3 57 -1 65 4 20 13 35 11 49 -6z"
              className="svg-logo-1"
            ></path>
            <path
              d="M660 1378 c0 -2 -7 -24 -15 -50 -16 -54 -7 -61 30 -23 31 30 34 75 5
75 -11 0 -20 -1 -20 -2z"
              className="svg-logo-2"
            ></path>
            <path
              d="M520 1160 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
              className="svg-logo-3"
            ></path>
            <path
              d="M1252 1263 c-26 -50 -23 -123 4 -105 14 9 28 122 14 122 -5 0 -13 -8
-18 -17z"
              className="svg-logo-4"
            ></path>
            <path
              d="M1462 1269 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"
              className="svg-logo-5"
            ></path>
            <path
              d="M910 771 c-5 -11 -10 -38 -10 -60 0 -57 25 -55 33 2 3 24 9 51 13 60
9 24 -22 22 -36 -2z"
              className="svg-logo-6"
            ></path>
          </g>
        </svg>
      </animated.div>
    </>
  );
};

export default LucasLogoIconAnimated;