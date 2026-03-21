"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [glowActive, setGlowActive] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1080px] overflow-hidden bg-brand-black">

      {/* LAYER 1 — фон */}
      <Image
        src="/images/free.png"
        fill
        sizes="100vw"
        priority
        alt="Auto detailing studio"
        className="object-cover object-center opacity-60"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/10 to-brand-black/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/50 via-transparent to-brand-black/30 z-[1]" />

      {/* LAYER 2 — Большой заголовок (под машиной) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="absolute z-[10] w-full text-center"
        style={{ top: "15%" }}
      >
        <h1
          className="font-display text-brand-white leading-none select-none whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 18vw, 17rem)" }}
        >
          WORKSHOP
        </h1>
      </motion.div>

      {/* Left side accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="absolute z-[15] left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 hidden md:flex"
      >
        <div className="w-px h-20 bg-brand-gray-700" />
        <p
          className="label-text text-brand-gray-500"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}
        >
          EST. 2015
        </p>
        <div className="w-1 h-1 bg-brand-red" />
      </motion.div>

      {/* Right side accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="absolute z-[15] right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 hidden md:flex"
      >
        <div className="w-1 h-1 bg-brand-red" />
        <p
          className="label-text text-brand-gray-500"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}
        >
          WARSAW · PL
        </p>
        <div className="w-px h-20 bg-brand-gray-700" />
      </motion.div>

      {/* Invisible hover zone over WORKSHOP text — above the car layer */}
      <div
        className="absolute z-[30] w-full cursor-default"
        style={{ top: "10%", height: "32%" }}
        onMouseEnter={() => setGlowActive(true)}
        onMouseLeave={() => setGlowActive(false)}
      />

      {/* LAYER 3 — Машина ПОВЕРХ текста */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
        className="absolute z-[20] w-full"
        style={{ bottom: 0, left: 0 }}
      >
        <div className="relative w-full scale-[3] md:scale-100 origin-bottom" style={{ height: "88vh" }}>

          {/* Glow layer — top half only, masked out at bottom */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 68%)",
              maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 68%)",
              opacity: glowActive ? 1 : 0.5,
            }}
          >
            <Image
              src="/images/carfree.png"
              fill
              sizes="100vw"
              alt=""
              aria-hidden
              className="object-contain object-bottom"
              style={{
                filter: glowActive
                  ? "drop-shadow(0 0 60px rgba(212, 43, 43, 0.7)) drop-shadow(0 0 120px rgba(212, 43, 43, 0.4))"
                  : "drop-shadow(0 0 40px rgba(212, 43, 43, 0.3)) drop-shadow(0 0 80px rgba(212, 43, 43, 0.15))",
                transition: "filter 0.5s ease",
              }}
            />
          </div>

          {/* Base car — no glow */}
          <Image
            src="/images/carfree.png"
            fill
            sizes="100vw"
            priority
            alt="Car"
            className="object-contain object-bottom"
          />

          {/* Bottom fade — darkens lower 30% */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 20%, rgba(10,10,10,0.85) 35%, rgba(10,10,10,0.4) 50%, transparent 62%)" }}
          />
        </div>
      </motion.div>

      {/* Bottom center — scroll button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="absolute bottom-[88px] left-0 right-0 flex justify-center z-[25]"
      >
        <a
          href="#services"
          className="group flex flex-col items-center gap-2 text-brand-white hover:text-brand-red transition-colors duration-300"
        >
          <span className="font-body text-xs uppercase tracking-[0.25em] text-brand-white">SCROLL</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-brand-red text-3xl leading-none"
          >
            ↓
          </motion.span>
        </a>
      </motion.div>

    </section>
  );
}
