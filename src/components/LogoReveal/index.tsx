"use client";
import { motion, cubicBezier } from "framer-motion";

export default function LogoReveal() {
  const string = "Fall CTF 2023";
  const text_variant = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 2,
        staggerChildren: 0.03,
      }
    }
  };
  const char_variant = {
    hidden: {
      fill: "rgb(0, 0, 0)"
    },
    visible: {
      fill: "rgb(255, 255, 255)",
      transition: {
        duration: 0.2
      }
    }
  };
  return (
    <motion.svg
      viewBox="0 0 1024 150"
      display="block"
      fontSize="10rem"
      fontWeight="bold"
    >
      <symbol id="s-text">
        <text
          textAnchor="start"
          dominantBaseline="central"
          y="50%"
        >
          <motion.tspan
            variants={text_variant}
            initial="hidden"
            animate="visible"
          >
            {string.split("").map((char, i) => (
              <motion.tspan
                key={i}
                variants={char_variant}
              >
                {char}
              </motion.tspan>
            ))}
          </motion.tspan>
        </text>
      </symbol>
      <g>
        <motion.use
          xlinkHref="#s-text"
          initial={{
            strokeDasharray: "0% 50% 0% 33.3% 0% 33.3% 0% 33.3%"
          }}
          animate={{
            strokeDasharray: "0% 0% 30% 0% 50% 0% 20% 0%",
          }}
          transition={{
            duration: 2,
            ease: cubicBezier(0.995, 0.200, 0.435, 0.960),
          }}
          strokeWidth={2}
          stroke="rgb(255, 255, 255)"
        >
        </motion.use>
      </g>
    </motion.svg>
  );
};