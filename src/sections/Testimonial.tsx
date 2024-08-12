"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data";

export default function Testimonial() {
  return (
    <section className="py-20 md:py-24" id="testimonials">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond Expectations
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Our revoltionary AI SEO tools have transformed our clients strategies
        </p>

        <div
          className=" flex overflow-hidden mt-10 
        [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        >
          {/* testimonial */}
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
            className="flex gap-5 flex-none pr-5 "
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 md:p-10 rounded-xl 
          bg-[linear-gradient(to_bottom_left,rgb(140,69,225,0.3),black)]
          max-w-md flex-none"
              >
                <div className="text-lg md:text-2xl tracking-tight">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  {/* image overlay */}
                  <div
                    className="relative after:content-[''] after:absolute after:inset-0 
              after:bg-[rgb(140,69,244)] after:mix-blend-soft-light
              before:content-[''] before:absolute before:inset-0 before:border before:border-white/30
              before:z-10 before:rounded-lg"
                  >
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="w-11 h-11 rounded-lg grayscale"
                    />
                  </div>
                  {/* content */}
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
