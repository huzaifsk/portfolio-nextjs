"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { TimelineCard } from "@/components/ui/animated-card";

// Helper function to get education logo
const getEducationLogo = (institution: string) => {
  const logoMap: { [key: string]: string } = {
    'Manipal University': '/manipal.png',
    'Mumbai University': '/mumbai.jpeg'
  };
  
  return logoMap[institution] || '/default-university.png';
};

export function Education() {
  return (
    <section id="education" className="py-12 sm:py-14 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 sm:space-y-8 lg:space-y-10"
      >
        <h2 className="text-subheading font-medium text-black dark:text-white">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-start gap-4">
                {/* Education Logo */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-900 bg-gray-100 dark:bg-gray-800">
                    <img 
                      src={getEducationLogo(edu.institution)}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-black dark:text-white truncate">
                        {edu.institution}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                        {edu.degree} - {edu.field}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-500 font-medium whitespace-nowrap mt-1 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}