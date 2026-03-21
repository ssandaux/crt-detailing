"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { id: 1, number: "01", title: "PAINT CORRECTION", subtitle: "Exterior", href: "#contact" },
  { id: 2, number: "02", title: "CERAMIC COATING", subtitle: "Protection", href: "#contact" },
  { id: 3, number: "03", title: "INTERIOR DETAILING", subtitle: "Interior", href: "#contact" },
  { id: 4, number: "04", title: "ENGINE DETAILING", subtitle: "Mechanical", href: "#contact" },
  { id: 5, number: "05", title: "VINYL WRAP", subtitle: "Styling", href: "#contact" },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="bg-brand-black border-t border-brand-gray-700">
      {/* Heading */}
      <div className="editorial-container pt-8 pb-6 md:pt-20 md:pb-12 border-b border-brand-gray-700">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="label-text text-brand-red mb-4">What we do</p>
            <h2
              className="font-display text-brand-white leading-none"
              style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
            >
              SERVICES
            </h2>
          </div>
          <p className="label-text text-brand-gray-500 md:mb-4">[ 01 · 05 ]</p>
        </motion.div>
      </div>

      {/* Mobile: vertical editorial list */}
      <div className="md:hidden editorial-container pb-6 border-b border-brand-gray-700">
        {services.map((s, i) => (
          <motion.a
            key={s.id}
            href={s.href}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className={`group flex items-center gap-4 py-5 ${i < services.length - 1 ? "border-b border-brand-gray-700" : ""}`}
          >
            <span
              className="font-display text-brand-red leading-none shrink-0 w-10"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)" }}
            >
              {s.number}
            </span>
            <h3
              className="font-display text-brand-white leading-none flex-1"
              style={{ fontSize: "clamp(1.4rem, 5.5vw, 1.8rem)" }}
            >
              {s.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-body text-[9px] uppercase tracking-[0.12em] text-brand-red">{s.subtitle}</span>
              <span className="text-brand-gray-700 group-hover:text-brand-red transition-colors duration-300 text-xs leading-none">→</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Desktop: 5-col grid */}
      <div className="hidden md:block border-b border-brand-gray-700">
        <div className="editorial-container">
          <div className="grid grid-cols-5">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={s.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className={`group flex flex-col cursor-pointer
                  border-t-2 border-t-transparent hover:border-t-brand-red
                  transition-all duration-300
                  ${i > 0 ? "border-l border-brand-gray-700" : ""}
                `}
              >
                <div className="flex flex-col justify-between flex-1 p-6 py-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-body text-[10px] uppercase tracking-[0.12em] text-brand-gray-500">{s.number}</span>
                    <span className="text-brand-gray-700 group-hover:text-brand-red transition-colors duration-300 text-sm">→</span>
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.1em] text-brand-red mb-2">{s.subtitle}</p>
                    <h3
                      className="font-display text-brand-white leading-[0.9]"
                      style={{ fontSize: "clamp(1rem, 1.6vw, 1.4rem)" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
