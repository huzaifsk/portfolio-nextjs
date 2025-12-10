"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedCard({ className, children, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        "rounded-xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300",
        "dark:border-zinc-800 dark:bg-zinc-900/50",
        "hover:shadow-lg hover:shadow-zinc-200/20 dark:hover:shadow-zinc-800/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface TimelineCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  isLast?: boolean;
}

export function TimelineCard({ className, children, delay = 0, isLast = false }: TimelineCardProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline line */}
      <div className={cn(
        "absolute left-0 top-0 w-px bg-zinc-200 dark:bg-zinc-800",
        isLast ? "h-8" : "h-full"
      )} />
      
      {/* Timeline dot */}
      <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full border-2 border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
          "rounded-xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm",
          "dark:border-zinc-800 dark:bg-zinc-900/50",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}