"use client";

import * as React from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TRANSITION = {
  type: "spring",
  bounce: 0.1,
  duration: 0.4,
};

interface FloatingActionPanelContextType {
  isOpen: boolean;
  openPanel: (rect: DOMRect, mode: "actions" | "note") => void;
  closePanel: () => void;
  uniqueId: string;
  triggerRect: DOMRect | null;
  title: string;
  setTitle: (title: string) => void;
  note: string;
  setNote: (note: string) => void;
  mode: "actions" | "note";
}

const FloatingActionPanelContext = React.createContext<
  FloatingActionPanelContextType | undefined
>(undefined);

function useFloatingActionPanelLogic() {
  const uniqueId = React.useId();
  const [isOpen, setIsOpen] = React.useState(false);
  const [triggerRect, setTriggerRect] = React.useState<DOMRect | null>(null);
  const [title, setTitle] = React.useState("");
  const [note, setNote] = React.useState("");
  const [mode, setMode] = React.useState<"actions" | "note">("actions");

  const openPanel = (rect: DOMRect, newMode: "actions" | "note") => {
    setTriggerRect(rect);
    setMode(newMode);
    setIsOpen(true);
  };
  const closePanel = () => {
    setIsOpen(false);
    setNote("");
  };

  return {
    isOpen,
    openPanel,
    closePanel,
    uniqueId,
    triggerRect,
    title,
    setTitle,
    note,
    setNote,
    mode,
  };
}

interface FloatingActionPanelRootProps {
  children: (context: FloatingActionPanelContextType) => React.ReactNode;
  className?: string;
}

export function FloatingActionPanelRoot({
  children,
  className,
}: FloatingActionPanelRootProps) {
  const floatingPanelLogic = useFloatingActionPanelLogic();

  return (
    <FloatingActionPanelContext.Provider value={floatingPanelLogic}>
      <MotionConfig transition={TRANSITION}>
        <div className={cn("relative", className)}>
          {children(floatingPanelLogic)}
        </div>
      </MotionConfig>
    </FloatingActionPanelContext.Provider>
  );
}

interface FloatingActionPanelTriggerProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  mode: "actions" | "note";
}

export function FloatingActionPanelTrigger({
  children,
  className,
  title,
  mode,
}: FloatingActionPanelTriggerProps) {
  const { openPanel, uniqueId, setTitle } = React.useContext(FloatingActionPanelContext)!;
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (triggerRef.current) {
      openPanel(triggerRef.current.getBoundingClientRect(), mode);
      setTitle(title);
    }
  };

  return (
    <motion.button
      ref={triggerRef}
      layoutId={`floating-panel-trigger-${uniqueId}-${mode}`}
      className={cn(className)}
      onClick={handleClick}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.button>
  );
}

interface FloatingActionPanelContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function FloatingActionPanelContent({
  children,
  className,
}: FloatingActionPanelContentProps) {
  const { isOpen, closePanel, uniqueId, triggerRect, mode } =
    React.useContext(FloatingActionPanelContext)!;
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        closePanel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closePanel]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closePanel]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
          />
          <motion.div
            ref={contentRef}
            layoutId={`floating-panel-${uniqueId}-${mode}`}
            className={cn(
              "fixed z-50 min-w-[260px] overflow-hidden border border-brand-gray-700 bg-brand-black shadow-xl outline-none",
              className
            )}
            style={{
              left: triggerRect ? triggerRect.left : "50%",
              top: triggerRect ? triggerRect.bottom + 4 : "50%",
              width: triggerRect ? triggerRect.width : "auto",
              transformOrigin: "top left",
            }}
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface FloatingActionPanelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function FloatingActionPanelButton({
  children,
  onClick,
  className,
}: FloatingActionPanelButtonProps) {
  return (
    <motion.button
      className={cn(
        "flex w-full items-center gap-2 px-4 py-3 text-left font-body text-sm text-brand-gray-300 hover:text-brand-white hover:bg-brand-gray-900 transition-colors duration-150",
        className
      )}
      onClick={onClick}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.button>
  );
}
