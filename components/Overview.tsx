import { personalData } from "@/data/personal";
import { Reveal } from "@/components/ui/reveal";

export function Overview() {
  return (
    <section id="about" className="py-12 sm:py-14 lg:py-16">
      <Reveal className="space-y-6 sm:space-y-8 lg:space-y-10">
        <h2 className="text-subheading font-bold text-black dark:text-white">
          About
        </h2>

        <div className="space-y-6">
          {personalData.bio.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.08}>
              <p className="text-normal text-gray-600 dark:text-gray-400 leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
