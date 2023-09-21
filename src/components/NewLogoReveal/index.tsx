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
      fill: "rgba(0, 0, 0, 0.0)"
    },
    visible: {
      fill: "url(#YellowGradient)",
      transition: {
        duration: 0.2
      }
    }
  };
  const transition = {
    duration: 5,
    repeat: Infinity,
    repeatType: "loop"
  };
  const dark_yellow = "rgba(255, 178, 0, 1.0)";
  const light_yellow = "rgba(255, 255, 0, 1.0)";
  return (
    <motion.svg
      viewBox="0 0 1024 150"
      display="block"
      fontSize="3.3rem"
      fontWeight="bold"
    >
      <linearGradient
        id="YellowGradient"
      >
        <motion.stop
          offset="0%"
          animate={{
            stopColor: [dark_yellow, light_yellow, dark_yellow, dark_yellow, dark_yellow, dark_yellow, dark_yellow],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
        />
        <motion.stop
          offset="25%"
          animate={{
            stopColor: [dark_yellow, dark_yellow, light_yellow, dark_yellow, dark_yellow, dark_yellow, dark_yellow],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
        />
        <motion.stop
          offset="50%"
          animate={{
            stopColor: [dark_yellow, dark_yellow, dark_yellow, light_yellow, dark_yellow, dark_yellow, dark_yellow],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
        />
        <motion.stop
          offset="75%"
          animate={{
            stopColor: [dark_yellow, dark_yellow, dark_yellow, dark_yellow, light_yellow, dark_yellow, dark_yellow],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
        />
        <motion.stop
          offset="100%"
          animate={{
            stopColor: [dark_yellow, dark_yellow, dark_yellow, dark_yellow, dark_yellow, light_yellow, dark_yellow],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
        />
      </linearGradient>
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
            // fill="url(#YellowGradient)"
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
          stroke="url(#YellowGradient)"
        >
        </motion.use>
      </g>
    </motion.svg>
  );
};