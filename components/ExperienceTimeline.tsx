"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { TimelineCard } from "@/components/ui/animated-card";

// Helper function to get company logo
const getCompanyLogo = (company: string) => {
  const logoMap: { [key: string]: string } = {
    'Wolves & Company': '/wolves.png',
    'EdgeCRM': '/edge.jpeg', 
    'IlmTech Solutions': '/ilmtec.png'
  };
  
  return logoMap[company] || '/default-company.png';
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-12 sm:py-14 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 sm:space-y-8 lg:space-y-10"
      >
        <h2 className="text-subheading font-medium text-black dark:text-white">
          Work Experience
        </h2>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-900">
                    <Image 
                      src={getCompanyLogo(experience.company)}
                      alt={`${experience.company} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-1 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-normal font-medium text-black dark:text-white">
                        {experience.company}
                      </h3>
                      <p className="text-sm sm:text-normal text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">
                        {experience.role}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 self-start sm:self-auto">
                      {experience.period}
                    </span>
                  </div>

                  <div className="text-normal text-gray-600 dark:text-gray-400 leading-relaxed mb-4 space-y-2">
                    {experience.responsibilities.slice(0, 2).map((responsibility, idx) => (
                      <p key={idx} className="text-sm">
                        • {responsibility}
                      </p>
                    ))}
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
