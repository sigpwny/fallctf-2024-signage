"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Countdown from "@/components/Countdown";
import LogoReveal from "@/components/LogoReveal";

async function seqFromRight(scope: any, animate: any, delay: number = 0) {
  await animate(scope.current, {
    translateX: "2rem",
  }, {
    duration: 0.0
  });
  await new Promise(resolve => setTimeout(resolve, delay));
  await animate(scope.current, {
    translateX: "0%",
  }, {
    duration: 0.2
  });
}

async function seqFadeIn(scope: any, animate: any, delay: number = 0) {
  await animate(scope.current, {
    opacity: 0,
  }, {
    duration: 0.0
  });
  await new Promise(resolve => setTimeout(resolve, delay));
  await animate(scope.current, {
    opacity: 1,
  }, {
    duration: 0.2
  });
}

export default function SignagePage() {
  const time_start = "2023-09-23T12:00:00-05:00"
  const time_close = "2023-09-23T18:00:00-05:00"
  const [loaded, setLoaded] = useState(false);
  const [scopeHeader, animateScopeHeader] = useAnimate();
  const [scopeTimer, animateScopeTimer] = useAnimate();
  const [scopeBody, animateScopeBody] = useAnimate();
  const [scopeDetails, animateScopeDetails] = useAnimate();
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      seqFromRight(scopeHeader, animateScopeHeader, 300);
      seqFadeIn(scopeHeader, animateScopeHeader, 300);
      seqFadeIn(scopeTimer, animateScopeTimer, 500);
      seqFadeIn(scopeBody, animateScopeBody, 750);
      seqFadeIn(scopeDetails, animateScopeDetails, 1200);
    }, 4000);
  }, []);

  return (
    <motion.div
      layout="position"
      className="m-auto w-[94vw] h-[90vh] flex flex-col grow-1 shrink-0 relative"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <motion.div
            layout="position"
            className="opacity-0 h-fit w-fit"
            ref={scopeHeader}
          >
            <p className="font-medium text-[4rem] leading-none">
              SIGPwny Presents
            </p>
          </motion.div>
          <motion.div
            layout="position"
            className={`flex h-fit ${loaded ? "" : "absolute inset-0 m-auto"}`}
            variants={{
              initial: {
                width: "60vw",
              },
              animate: {
                width: "50vw",
              }
            }}
            initial="initial"
            animate={(loaded ? "animate" : "initial")}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <LogoReveal />
          </motion.div>
        </div>
        <motion.div
          layout="position"
          className="opacity-0 text-5xl font-medium"
          ref={scopeTimer}
        >
          <Countdown time_start={time_start} time_close={time_close} />
        </motion.div>
      </div>
      <motion.div
        layout="position"
        className="opacity-0 flex flex-col flex-grow-1 flex-shrink-0 mt-[6rem]"
        ref={scopeBody}
      >
        <div>
          <p className="text-[8rem] mb-4 leading-none font-medium">
            A beginner-friendly<br /> hacking competition.
          </p>
          <p className="text-[4rem] leading-none">
            Capture the flags. Teams of two.
          </p>
        </div>
      </motion.div>
      <motion.div
        layout="position"
        className="opacity-0 mt-auto flex flex-col"
        ref={scopeDetails}
      >
        <p className="text-[4rem] font-medium">
          September 23rd, 12–6 PM
        </p>
        <p className="text-[4rem] leading-none font-medium">
          CIF 3039
        </p>
      </motion.div>
    </motion.div>
  );
};
