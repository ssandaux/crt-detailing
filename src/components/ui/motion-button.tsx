"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MotionButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
}

export function MotionButton({ label, className, onClick, type = "button", href, disabled }: MotionButtonProps) {
  const cls = cn(
    "bg-brand-black border border-brand-gray-700 group relative h-auto w-64 rounded-full p-1 outline-none transition-colors duration-300 inline-block",
    disabled
      ? "opacity-30 cursor-not-allowed pointer-events-none"
      : "cursor-pointer hover:border-brand-red",
    className
  );

  const inner = (
    <>
      <span
        className="circle bg-brand-red block h-12 w-12 overflow-hidden rounded-full duration-500 group-hover:w-full"
        aria-hidden="true"
      />
      <div className="absolute top-1/2 left-4 -translate-y-1/2 duration-500 group-hover:translate-x-[0.4rem] transition-transform">
        <ArrowRight className="text-brand-white size-5" strokeWidth={2} />
      </div>
      <span className="label-text text-brand-white absolute top-1/2 left-1/2 ml-3 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap duration-300">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
}
