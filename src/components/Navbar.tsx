"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MenuVertical } from "@/components/ui/menu-vertical";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Detailing", href: "#detailing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "PL">("EN");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-brand-black/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image src="/images/logi.png" alt="Redline" width={120} height={40} className="object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="label-text font-semibold hover:text-brand-red transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book button + lang switcher + hamburger */}
          <div className="flex items-center gap-6">
            {/* Language switcher */}
            <div className="hidden md:flex items-center gap-1">
              {(["EN", "PL"] as const).map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && <span className="label-text text-brand-gray-700">/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className={`label-text transition-colors duration-200 ${
                      lang === l ? "text-brand-white" : "text-brand-gray-500 hover:text-brand-gray-300"
                    }`}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 label-text text-brand-white border border-brand-gray-700 px-5 py-2.5 hover:border-brand-red transition-colors duration-200 relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-1/2 h-1/2 bg-brand-red -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              <span className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-red translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              <span className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-red -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              <span className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-red translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              <span className="relative z-10">Book Now</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-1 group z-[60] relative"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  menuOpen ? "bg-brand-white rotate-45 translate-y-2.5" : "bg-brand-white"
                }`}
              />
              <span
                className={`block w-6 h-px bg-brand-white transition-all duration-300 ${
                  menuOpen ? "opacity-0 w-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  menuOpen ? "bg-brand-white -rotate-45 -translate-y-2.5" : "bg-brand-white"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-brand-black z-40 flex flex-col justify-between overflow-hidden"
          >
            {/* Top bar */}
            <div className="editorial-container pt-6 pb-0 flex items-center justify-between border-b border-brand-gray-700 pb-6">
              <Image src="/images/logi.png" alt="Redline" width={120} height={40} className="object-contain" />
              <p className="label-text text-brand-gray-500">Menu</p>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex items-center editorial-container">
              <MenuVertical
                menuItems={navLinks}
                color="#D42B2B"
                onItemClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Bottom info bar */}
            <div className="editorial-container border-t border-brand-gray-700 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <a href="tel:+15550000000" className="label-text text-brand-gray-300 hover:text-brand-white transition-colors">
                  +1 (555) 000-0000
                </a>
                <a href="mailto:kontakt@redlinedetailing.pl" className="label-text text-brand-gray-300 hover:text-brand-white transition-colors">
                  kontakt@redlinedetailing.pl
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="label-text text-brand-white border border-brand-red px-8 py-3 hover:bg-brand-red transition-colors duration-300"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
