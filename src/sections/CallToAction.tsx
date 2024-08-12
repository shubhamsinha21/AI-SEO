"use client";

import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // updating mouse position
  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.5), transparent)`;

  return (
    <section className="py-20 md:py-24" ref={sectionRef} id="callToAction">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="relative group border border-white/15 py-24 rounded-xl overflow-hidden"
          animate={{
            backgroundPositionX: ["0%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1, // Adjust the duration to control the speed of the background movement
            ease: "linear",
          }}
          style={{
            backgroundImage: `url(${starBg.src})`,
            backgroundPositionX: "0%",
            backgroundPositionY,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay
            group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage:
                "radial-gradient(circle at 50% 35%, black, transparent)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 35%, black, transparent)", // for WebKit browsers
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay
            group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              WebkitMaskImage: maskImage, // for WebKit browsers
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
