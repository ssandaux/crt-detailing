"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/new/10.jpg", alt: "Wheel detail", span: "col-[1/4] row-[1/3]" },
  { src: "/images/new/11.jpg", alt: "Sports car exterior", span: "col-[4/8] row-[1/2]" },
  { src: "/images/new/12.jpg", alt: "Car interior", span: "col-[4/6] row-[2/3]" },
  { src: "/images/new/13.jpg", alt: "Detailing process", span: "col-[6/8] row-[2/3]" },
  { src: "/images/new/14.jpg", alt: "Luxury car", span: "col-[8/13] row-[1/3]" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="gallery" className="bg-brand-black border-t border-brand-gray-700">
      {/* Massive heading */}
      <div className="editorial-container pt-20 pb-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <p className="label-text text-brand-red">Completed work</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <h2
              className="font-display text-brand-white leading-none"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              GALLERY
            </h2>
            <p className="font-body text-sm text-brand-gray-300 leading-relaxed max-w-xs">
              Vehicles detailed, protected and transformed at our Warsaw studio.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Asymmetric grid */}
      <div className="editorial-container py-10">
        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:grid grid-cols-12 gap-2 [grid-template-rows:300px_300px]"
        >
          {images.map((img) => (
            <div key={img.alt} className={`${img.span} relative overflow-hidden group`}>
              <Image
                src={img.src}
                fill
                sizes="(max-width: 1200px) 50vw, 33vw"
                alt={img.alt}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </motion.div>

        {/* Mobile */}
        <div className="grid md:hidden grid-cols-2 gap-2">
          {images.map((img) => (
            <div key={img.alt} className="relative aspect-square overflow-hidden group">
              <Image src={img.src} fill sizes="50vw" alt={img.alt} className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Counter bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="border-t border-brand-gray-700"
      >
        <div className="editorial-container py-6 flex justify-between items-center">
          <p className="label-text text-brand-gray-500">500+ vehicles serviced</p>
          <p className="label-text text-brand-gray-500">Est. 2015</p>
        </div>
      </motion.div>
    </section>
  );
}
