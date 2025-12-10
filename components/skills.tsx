"use client";

import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const skillsWithIcons = [
  { name: "React.js", icon: "/react_light.svg" },
  { name: "Next.js", icon: "/nextjs_icon_dark.svg" },
  { name: "React Router", icon: "/reactrouter.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "HTML5", icon: "/html5.svg" },
  { name: "CSS3", icon: "/css_old.svg" },
  { name: "TailwindCSS", icon: "/tailwindcss.svg" },
  { name: "SCSS", icon: "/sass.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Express.js", icon: "/expressjs.svg" },
  { name: "MongoDB", icon: "/mongodb-icon-dark.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "NPM", icon: "/npm.svg" },
  { name: "Figma", icon: "/figma.svg" },
  { name: "Vercel", icon: "/vercel.svg" },
  { name: "Cloudflare", icon: "/cloudflare.svg" },
  { name: "TanStack Query", icon: "/tanstack.svg" },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-14 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 sm:space-y-8"
      >
        <h2 className="text-subheading font-medium text-black dark:text-white">
          Skills & Technologies
        </h2>

        <TooltipProvider>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {skillsWithIcons.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-gray-900/30">
                      {skill.name === "Express.js" ? (
                        <>
                          <img 
                            src="/expressjs.svg"
                            alt={skill.name}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain dark:hidden"
                          />
                          <img 
                            src="/expressjs_dark.svg"
                            alt={skill.name}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain hidden dark:block"
                          />
                        </>
                      ) : skill.name === "Vercel" ? (
                        <>
                          <img 
                            src="/vercel.svg"
                            alt={skill.name}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain dark:hidden"
                          />
                          <img 
                            src="/vercel_dark.svg"
                            alt={skill.name}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain hidden dark:block"
                          />
                        </>
                      ) : (
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>
      </motion.div>
    </section>
  );
}
