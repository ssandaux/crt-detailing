"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
  onItemClick?: () => void;
}

export function MenuVertical({
  menuItems = [],
  color = "#D42B2B",
  skew = 0,
  onItemClick,
}: MenuVerticalProps) {
  return (
    <div className="flex w-fit flex-col gap-2">
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex items-center gap-3 cursor-pointer text-brand-white"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-100%", color: "inherit", opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-0 shrink-0"
          >
            <ArrowRight strokeWidth={2.5} className="size-8 md:size-10" />
          </motion.div>

          <motion.a
            href={item.href}
            onClick={onItemClick}
            variants={{
              initial: { x: -36, color: "inherit" },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-display text-5xl md:text-6xl no-underline leading-none tracking-wide"
          >
            {item.label}
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}
