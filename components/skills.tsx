"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const skillsWithIcons = [
  { name: "React.js", icon: "/react_light.svg" },
  { name: "Next.js", icon: "/nextjs_icon_dark.svg" },
  { name: "React Router", icon: "/reactrouter.svg" },
  { name: "Redux", icon: "/redux.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "HTML5", icon: "/html5.svg" },
  { name: "CSS3", icon: "/css_old.svg" },
  { name: "TailwindCSS", icon: "/tailwindcss.svg" },
  { name: "SCSS", icon: "/sass.svg" },
  { name: "Ant Design", icon: "/ant-design-dark-theme.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Express.js", icon: "/expressjs.svg" },
  { name: "MongoDB", icon: "/mongodb-icon-dark.svg" },
  { name: "Framer Motion", icon: "/motion_dark.svg" },
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
        <h2 className="text-subheading font-bold text-black dark:text-white">
          Stack
        </h2>

        <TooltipProvider>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
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
                    <div className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg bg-white dark:bg-gray-900/30 border border-gray-100 dark:border-gray-800 sm:border-transparent sm:dark:border-transparent aspect-square min-h-[3rem] sm:min-h-[3.5rem]">
                      {skill.name === "Express.js" ? (
                        <>
                          <Image 
                            src="/expressjs.svg"
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain dark:hidden"
                            loading="lazy"
                          />
                          <Image 
                            src="/expressjs_dark.svg"
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain hidden dark:block"
                            loading="lazy"
                          />
                        </>
                      ) : skill.name === "Vercel" ? (
                        <>
                          <Image 
                            src="/vercel.svg"
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain dark:hidden"
                            loading="lazy"
                          />
                          <Image 
                            src="/vercel_dark.svg"
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain hidden dark:block"
                            loading="lazy"
                          />
                        </>
                      ) : (
                        <Image 
                          src={skill.icon} 
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                          loading="lazy"
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
