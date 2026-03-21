"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ServiceItem {
  id: string | number;
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  href?: string;
}

interface ServiceListProps {
  items: ServiceItem[];
  className?: string;
}

export function ServiceList({ items, className }: ServiceListProps) {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full max-w-[1600px] mx-auto", className)}>
      {items.map((item) => {
        const isHovered = hoveredItem === item.id;
        return (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a
              href={item.href ?? "#contact"}
              className={cn(
                "relative overflow-hidden border-b flex items-center px-6 md:px-12 lg:px-20 transition-all duration-400 ease-in-out cursor-pointer block",
                isHovered
                  ? "border-brand-red bg-brand-black py-8"
                  : "border-brand-gray-700 bg-transparent py-6"
              )}
            >
              {/* Corner brackets — top left */}
              <div
                className={cn(
                  "absolute top-4 left-4 w-5 h-5 transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="absolute top-0 left-0 w-3 h-0.5 bg-brand-red" />
                <div className="absolute top-0 left-0 w-0.5 h-3 bg-brand-red" />
              </div>
              {/* Corner brackets — bottom right */}
              <div
                className={cn(
                  "absolute bottom-4 right-4 w-5 h-5 transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-brand-red" />
                <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-brand-red" />
              </div>

              {/* Number */}
              <span
                className={cn(
                  "font-display leading-none shrink-0 transition-colors duration-300 w-16 md:w-24",
                  isHovered ? "text-brand-red" : "text-brand-gray-700"
                )}
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {item.number}
              </span>

              {/* Title */}
              <h3
                className={cn(
                  "font-display text-brand-white leading-none flex-1 transition-transform duration-300",
                  isHovered ? "translate-x-2" : "translate-x-0"
                )}
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {item.title}
              </h3>

              {/* Right side */}
              <div className="hidden md:flex flex-col items-end gap-2 shrink-0 ml-8">
                {item.subtitle && (
                  <span className="label-text text-brand-red">{item.subtitle}</span>
                )}
                {item.description && (
                  <p
                    className={cn(
                      "font-body text-xs text-brand-gray-300 leading-relaxed max-w-[240px] text-right transition-all duration-300",
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <span
                className={cn(
                  "ml-6 shrink-0 font-body transition-all duration-300 text-lg",
                  isHovered ? "text-brand-red translate-x-2" : "text-brand-gray-700 translate-x-0"
                )}
              >
                →
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
