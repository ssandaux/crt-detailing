"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "BOOK", desc: "Schedule online or call. Choose your service and time slot." },
  { num: "02", title: "DROP OFF", desc: "Bring your vehicle or use our pickup service" },
  { num: "03", title: "INSPECT", desc: "Full condition assessment with a written report" },
  { num: "04", title: "DETAIL", desc: "Our technicians perform the full service" },
  { num: "05", title: "COLLECT", desc: "Pick up your car. Guaranteed satisfaction." },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-brand-black border-t border-brand-gray-700">
      {/* Heading */}
      <div className="editorial-container pt-14 pb-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <p className="label-text text-brand-red">How it works</p>
          <div className="flex items-center justify-between">
            <h2
              className="font-display text-brand-white leading-none"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              THE PROCESS
            </h2>
            <p className="label-text text-brand-gray-500">5 simple steps</p>
          </div>
        </motion.div>
      </div>

      {/* Roadmap */}
      <div className="editorial-container py-10 md:py-12 overflow-x-auto">
        <div className="flex items-start min-w-[640px]">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                className="flex-1 flex flex-col gap-3"
              >
                {/* Big number */}
                <span
                  className="font-display text-brand-red leading-none"
                  style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
                >
                  {step.num}
                </span>

                {/* Title */}
                <h3
                  className="font-display text-brand-white leading-none"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)" }}
                >
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="font-body text-xs text-brand-gray-500 leading-relaxed pr-6 max-w-[160px]">
                  {step.desc}
                </p>
              </motion.div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                  className="shrink-0 px-2 md:px-3 mt-[10px] text-brand-gray-700 text-lg leading-none"
                >
                  →
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}
