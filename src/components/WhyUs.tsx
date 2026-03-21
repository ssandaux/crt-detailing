"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const features = [
  "Professional-grade equipment only",
  "Fully certified detailing technicians",
  "100% satisfaction guaranteed",
  "Transparent pricing, no surprises",
  "Same-day service available",
  "Pick-up & delivery on request",
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-brand-black border-t border-brand-gray-700 overflow-hidden">
      <div className="editorial-container grid md:grid-cols-2" ref={ref}>

        {/* Left — image with overlay */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative h-[300px] md:h-auto min-h-[500px] overflow-hidden order-2 md:order-1"
        >
          <Image
            src="/images/new/3.jpg"
            fill
            sizes="50vw"
            alt="Professional detailing"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/10 to-brand-gray-900/60" />
{/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-8 left-8 bg-brand-black/90 border border-brand-gray-700 px-6 py-5 backdrop-blur-sm"
          >
            <p
              className="font-display text-brand-red leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              10+
            </p>
            <p className="label-text mt-2">Years of experience</p>
          </motion.div>
        </motion.div>

        {/* Right — text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="flex flex-col justify-center px-0 md:px-16 lg:px-20 py-10 md:py-24 order-1 md:order-2 border-b md:border-b-0 md:border-l border-brand-gray-700"
        >
          <p className="label-text text-brand-red mb-6">Why us</p>
          <h2
            className="font-display text-brand-white leading-none mb-10"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            WHY CHOOSE<br />
            <span className="text-brand-white"><span className="text-brand-red">RED</span>LINE</span>
          </h2>

          <ul className="space-y-0">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className="flex items-center gap-4 py-3 group cursor-default"
              >
                <span className="w-1.5 h-1.5 bg-brand-red shrink-0" />
                <span className="font-body text-sm text-brand-gray-300 group-hover:text-brand-white transition-colors duration-200">
                  {f}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
