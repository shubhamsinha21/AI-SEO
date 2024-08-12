"use client";

import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // useMotionValueEvent(scrollYProgress, "change", (value) => {
  //   console.log("scrollYProgress", value);
  // });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundPositionX: starBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 1.6,
        ease: "linear",
      }}
      className="h-[492px]  md:h-[700px] flex items-center overflow-hidden relative 
      [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starBg.src})`,
        backgroundPositionY,
      }}
    >
      {/* overlay */}
      <div
        className="absolute inset-0 
      bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"
      ></div>

      {/* planet */}
      <div
        className="absolute h-64 w-64 md:w-96 md:h-96 bg-purple-500 rounded-full border
      border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-[radial-gradient(50%_50%_at_16.8%_18.3%,_white,_rgb(184,148,255)_37.7%,_rgb(24,0,66))]
      shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"
      ></div>

      {/* 1st rings  */}

      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        animate={{ rotate: "1turn " }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:w-[580px] md:h-[580px] border border-white 
        rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      >
        <div
          className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 
        -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 
        -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2
        -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center"
        >
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      {/* 2nd ring */}
      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute h-[444px] w-[444px] md:w-[780px] md:h-[780px] rounded-full border border-white/20
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>

      {/* 3rd ring */}
      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute w-[544px] h-[544px] md:w-[980px] md:h-[980px] rounded-full border border-white top-1/2
      left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      >
        <div
          className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 
        -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2
        -translate-x-1/2 -translate-y-1/2"
        ></div>
      </motion.div>

      {/* container */}
      <div className="container relative mt-16">
        <h1
          className="text-7xl md:text-[148px] md:leading-none
           font-semibold tracking-tighter bg-white bg-clip-text text-transparent
         bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgb(74,32,138,0.5))]
        text-center"
        >
          AI SEO
        </h1>
        <p className="text-md md:text-xl text-white/70 mt-5 text-center max-w-2xl mx-auto">
          Our AI-powered SEO tool revolutionizes the way businesses optimize
          their online presence. It automates keyword analysis, content
          creation, and link-building strategies, ensuring higher search engine
          rankings.
        </p>

        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
}
