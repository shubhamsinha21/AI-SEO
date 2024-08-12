// src/components/Features.tsx
"use client";
import { tabs } from "@/data";
import FeatureTab from "@/components/FeatureTab";
import productImage from "@/assets/product-image.png";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useState } from "react";

export default function Features() {
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const [selectedTab, setSelectedTab] = useState(0);

  // Handling selected tabs
  const handleSelectedTabs = (index: number) => {
    setSelectedTab(index);
    animate(backgroundSizeX, tabs[index].backgroundSizeX, {
      duration: 0.5,
      ease: "easeInOut",
    });
    animate(backgroundPositionX, tabs[index].backgroundPositionX, {
      duration: 0.5,
      ease: "easeInOut",
    });
    animate(backgroundPositionY, tabs[index].backgroundPositionY, {
      duration: 0.5,
      ease: "easeInOut",
    });
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, index) => (
            <FeatureTab
              key={tab.title}
              tab={tab}
              selected={selectedTab === index}
              onClick={() => handleSelectedTabs(index)}
            />
          ))}
        </div>
        {/* Image */}
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          {/* Background image */}
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
