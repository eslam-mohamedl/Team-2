"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  duration?: number; // مدة الحركة
  y?: number; // مسافة الطفو
  className?: string;
}

export const Floating = ({
  children,
  duration = 3,
  y = 15,
  className,
}: FloatingProps) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
