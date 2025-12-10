"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/personal";

export function Overview() {
  return (
    <section id="about" className="py-12 sm:py-14 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 sm:space-y-8 lg:space-y-10"
      >
        <h2 className="text-subheading font-medium text-black dark:text-white">
          About
        </h2>

        <div className="space-y-6">
          {personalData.bio.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-normal text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

       
      </motion.div>
    </section>
  );
}
