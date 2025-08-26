"use client";

import { TOAST_VARIANTS } from "@/lib/config/variants";
import type { ToastProps } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

export const Toast = memo(({ isOpen, message, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-4 z-50 flex h-12 w-64 flex-row items-center justify-between border border-neutral-800 bg-black px-2 py-4 text-neutral-50"
          variants={TOAST_VARIANTS}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="mx-auto inline-flex flex-row items-center justify-around space-x-3">
            <FaCheckCircle />
            <span className="inline-flex flex-row items-center justify-center">
              {message}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

Toast.displayName = "Toast";
