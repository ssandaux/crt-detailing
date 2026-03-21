"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MotionButton } from "@/components/ui/motion-button";
import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
} from "@/components/ui/floating-action-panel";

const services = [
  { value: "paint", label: "Paint Correction" },
  { value: "ceramic", label: "Ceramic Coating" },
  { value: "interior", label: "Interior Detailing" },
  { value: "full", label: "Full Detail Package" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const selectedLabel = services.find((s) => s.value === form.service)?.label;
  const isComplete = form.name.trim() !== "" && form.phone.trim() !== "" && form.service !== "" && form.message.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;
    setSubmitted(true);
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  const inputClass =
    "w-full bg-transparent border-b border-brand-gray-700 py-4 px-0 text-brand-white font-body text-sm focus:outline-none focus:border-brand-red transition-colors duration-200 placeholder:text-brand-gray-500";

  return (
    <section id="contact" className="bg-brand-black border-t border-brand-gray-700">

      {/* Heading */}
      <div className="editorial-container pt-20 pb-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <p className="label-text text-brand-red">Get in touch</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
            >
              <span className="text-brand-white block">BOOK YOUR</span>
              <span className="text-stroke-white block">SESSION</span>
            </h2>
            <p className="label-text text-brand-gray-500">Free consultation available</p>
          </div>
        </motion.div>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="editorial-container py-8 md:py-14"
      >
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-0 md:gap-12">
            <div className="mb-5 md:mb-0">
              <label className="label-text block mb-2 md:mb-3">Your Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="John Smith" className={inputClass} />
            </div>
            <div className="mb-5 md:mb-0">
              <label className="label-text block mb-2 md:mb-3">Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="+48 501 234 567" className={inputClass} />
            </div>
          </div>

          {/* Service selector */}
          <div className="mt-5 md:mt-8">
            <label className="label-text block mb-2 md:mb-3">Service</label>
            <FloatingActionPanelRoot className="w-full">
              {({ isOpen, closePanel }) => (
                <>
                  <FloatingActionPanelTrigger title="Select service" mode="actions" className="w-full">
                    <div className={`w-full flex items-center justify-between border-b py-4 px-0 font-body text-sm transition-colors duration-200 ${
                      isOpen ? "border-brand-red" : "border-brand-gray-700"
                    }`}>
                      <span className={selectedLabel ? "text-brand-white" : "text-brand-gray-500"}>
                        {selectedLabel ?? "Select a service"}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-brand-gray-500 text-xs"
                      >
                        ↓
                      </motion.span>
                    </div>
                  </FloatingActionPanelTrigger>

                  <FloatingActionPanelContent>
                    <div className="py-1">
                      {services.map((s) => (
                        <FloatingActionPanelButton
                          key={s.value}
                          onClick={() => {
                            setForm((f) => ({ ...f, service: s.value }));
                            closePanel();
                          }}
                          className={form.service === s.value ? "text-brand-white" : ""}
                        >
                          {form.service === s.value && (
                            <span className="w-1 h-1 bg-brand-red shrink-0 inline-block" />
                          )}
                          {s.label}
                        </FloatingActionPanelButton>
                      ))}
                    </div>
                  </FloatingActionPanelContent>
                </>
              )}
            </FloatingActionPanelRoot>
          </div>

          <div className="mt-5 md:mt-8">
            <label className="label-text block mb-2 md:mb-3">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange}
              rows={3} placeholder="Tell us about your vehicle..."
              className={`${inputClass} resize-none`} />
          </div>

          <div className="mt-8 md:mt-12">
            <MotionButton label="Send Request" type="submit" disabled={!isComplete} />
          </div>
        </form>
      </motion.div>

      {/* Success modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/80 backdrop-blur-sm"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-brand-black border border-brand-gray-700 p-10 md:p-16 max-w-lg w-full mx-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-8 h-px bg-brand-red mb-8" />
              <p className="label-text text-brand-red mb-4">Message received</p>
              <h3
                className="font-display text-brand-white leading-none mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                THANK<br />YOU
              </h3>
              <p className="font-body text-sm text-brand-gray-300 leading-relaxed mb-10">
                We&apos;ve received your request and will get back to you shortly. Our team typically responds within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="label-text text-brand-gray-500 hover:text-brand-white transition-colors duration-200"
              >
                Close ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
