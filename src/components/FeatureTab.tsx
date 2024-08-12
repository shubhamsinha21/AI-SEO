// src/components/FeatureTab.tsx
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import { Tab } from "@/data";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

interface FeatureTabProps {
  tab: Tab;
  selected: boolean;
  onClick: () => void;
}

export default function FeatureTab({
  tab,
  selected,
  onClick,
}: FeatureTabProps) {
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(50);
  const yPercentage = useMotionValue(50);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  const handleTabHover = () => {
    if (dotlottieRef.current === null) return;
    dotlottieRef.current.seek(0);
    dotlottieRef.current.play();
  };

  useEffect(() => {
    const options: ValueAnimationTransition = {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 100, 100, 0, 0], options);
  }, [xPercentage, yPercentage]);

  return (
    <div
      onMouseEnter={handleTabHover}
      onClick={onClick}
      key={tab.title}
      className={`border border-white/15 flex p-2.5 rounded-xl gap-2.5 
        items-center lg:flex-1 relative ${selected ? "border-[#A369FF]" : ""}`}
    >
      <motion.div
        className="absolute inset-0 -m-px rounded-xl border 
        border-[#A369FF]"
        style={{ WebkitMaskImage: maskImage, maskImage }}
      ></motion.div>

      <div className="w-12 h-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotlottieRef}
          src={tab.icon}
          className="w-20 h-20"
          autoplay
        />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xl rounded-full px-2 py-1/2 bg-[#8c44ff] text-black font-semibold">
          New
        </div>
      )}
    </div>
  );
}
