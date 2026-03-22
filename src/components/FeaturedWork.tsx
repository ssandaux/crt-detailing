"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CardStack } from "@/components/ui/card-stack";
import { MotionButton } from "@/components/ui/motion-button";

const works = [
  {
    id: 1,
    title: "Mirror finish",
    tag: "Result",
    description: "Zero defects visible under studio lighting, confirmed before every handover.",
    imageSrc: "/images/new/1.jpg",
  },
  {
    id: 2,
    title: "Water just rolls off",
    tag: "Protection",
    description: "Hydrophobic surface repels water, dirt and UV for years after application.",
    imageSrc: "/images/new/5.jpg",
  },
  {
    id: 3,
    title: "Showroom-ready cabin",
    tag: "Interior",
    description: "Every surface treated: headliner, floor mats, nothing is skipped.",
    imageSrc: "/images/new/6.jpg",
  },
  {
    id: 4,
    title: "Clean under the hood",
    tag: "Mechanical",
    description: "A detailed engine bay runs cooler and holds its value significantly longer.",
    imageSrc: "/images/new/7.jpg",
  },
  {
    id: 5,
    title: "Every angle matters",
    tag: "Precision",
    description: "We inspect the full vehicle under direct light, not just the panels you see first.",
    imageSrc: "/images/new/8.jpg",
  },
  {
    id: 6,
    title: "New colour, same paint",
    tag: "Styling",
    description: "Full-body transformation without touching the original paintwork. 100% reversible.",
    imageSrc: "/images/new/9.jpg",
  },
];

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [cardW, setCardW] = useState(460);
  const [cardH, setCardH] = useState(295);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      setCardW(mobile ? Math.min(window.innerWidth - 48, 350) : 460);
      setCardH(mobile ? 220 : 295);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="bg-brand-black border-t border-brand-gray-700 overflow-hidden">
      <div className="editorial-container pt-8 pb-6 md:pt-20 md:pb-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <p className="label-text text-brand-red">Full range</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <h2
              className="font-display text-brand-white leading-none"
              style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
            >
              RESULTS
            </h2>
            <p className="font-body text-sm text-brand-gray-300 max-w-xs leading-relaxed">
              From a quick wash to a full ceramic protection package — we handle every detail of your vehicle.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CardStack showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="editorial-container pt-0 pb-10 md:pb-20 -mt-20 md:-mt-6"
      >
        <CardStack
          items={works}
          autoAdvance
          intervalMs={3200}
          pauseOnHover
          showDots
          cardWidth={cardW}
          cardHeight={cardH}
          maxVisible={5}
          overlap={0.55}
          spreadDeg={34}
        />
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="editorial-container pb-14 flex justify-center"
      >
        <MotionButton label="Book Any Service" href="#contact" />
      </motion.div>
    </section>
  );
}
