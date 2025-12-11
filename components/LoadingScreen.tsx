"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldExit(true);
    }, 3000); // 3 seconds total loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldExit) {
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1200); // Wait for exit animation to complete
      return () => clearTimeout(exitTimer);
    }
  }, [shouldExit]);

  const handleExitComplete = () => {
    setIsVisible(false);
    onLoadingComplete();
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isVisible && !shouldExit && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.4, 0, 0.2, 1],
            when: "beforeChildren"
          }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-black dark:via-gray-900/50 dark:to-black flex items-center justify-center"
        >
          <motion.div
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center space-y-8 sm:space-y-12 px-4"
          >
            {/* Counting Number with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Glowing background effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-full blur-2xl sm:blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-125 sm:scale-150"
              />
              
              <CountingNumber
                number={100}
                fromNumber={0}
                className="relative text-6xl sm:text-8xl md:text-9xl font-extrabold bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
                inView
              />
              
              {/* Percentage symbol */}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -right-6 sm:-right-8 top-3 sm:top-4 text-3xl sm:text-4xl font-light text-gray-400 dark:text-gray-600"
              >
                %
              </motion.span>
            </motion.div>

            {/* Subtle loading bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent w-64 sm:w-80 max-w-xs sm:max-w-sm"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}