"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
}

export function BlurIn({ word, className, duration = 1, delay = 0, as: Tag = "p" }: BlurInProps) {
  const MotionTag = motion[Tag] as typeof motion.p;

  return (
    <MotionTag
      initial={{ filter: "blur(12px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(className)}
    >
      {word}
    </MotionTag>
  );
}
