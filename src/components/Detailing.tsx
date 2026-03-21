"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "SHINY\nBODY",
    tag: "Exterior",
    desc: "Paint correction, polish, and ceramic protection. Your car's exterior brought back to mirror finish.",
    image: "/images/new/1.jpg",
  },
  {
    title: "CLEAN\nINTERIOR",
    tag: "Interior",
    desc: "Steam clean, leather treatment, odour removal. A cabin that looks and smells like new.",
    image: "/images/new/2.jpg",
  },
];

export default function Detailing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="detailing" className="bg-brand-black border-t border-brand-gray-700">
      {/* Section heading */}
      <div className="editorial-container pt-8 pb-6 md:pt-20 md:pb-12 border-b border-brand-gray-700">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <p className="label-text text-brand-red">Studio work</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <h2
              className="font-display text-brand-white leading-none"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              DETAILING
            </h2>
            <p className="font-body text-sm text-brand-gray-300 leading-relaxed md:max-w-xs">
              Professional-grade products. Proven techniques. Flawless results, every time.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Two feature blocks */}
      <div className="editorial-container grid md:grid-cols-2 border-b border-brand-gray-700">
        {features.map((f, i) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const blockRef = useRef(null);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const blockInView = useInView(blockRef, { once: true, margin: "-60px" });
          return (
            <motion.div
              key={f.title}
              ref={blockRef}
              initial={{ opacity: 0, y: 40 }}
              animate={blockInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.15 }}
              className={`group relative overflow-hidden ${i === 0 ? "md:border-r border-brand-gray-700" : ""}`}
            >
              <div className="relative h-[320px] md:h-[480px] overflow-hidden">
                <Image
                  src={f.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={f.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="label-text text-brand-red mb-3">{f.tag}</p>
                  <h3
                    className="font-display text-brand-white leading-[0.88] whitespace-pre-line mb-4"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="font-body text-xs text-brand-gray-300 leading-relaxed max-w-xs">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats bar */}
      <div className="editorial-container py-8 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {[
            { v: "500+", l: "Cars Detailed" },
            { v: "8yr", l: "Experience" },
            { v: "100%", l: "Satisfaction" },
            { v: "48h", l: "Max Turnaround" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.35 + i * 0.12 }}
              className="flex flex-col gap-4"
            >
              <p
                className="font-display text-brand-red leading-none"
                style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)" }}
              >
                {s.v}
              </p>
              <div className="flex items-center gap-3">
                <span className="w-5 h-px bg-brand-red shrink-0" />
                <p className="label-text text-brand-gray-300">{s.l}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
