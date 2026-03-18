import { Send } from "lucide-react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/social-icons";
import { socialLinks } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-14 lg:py-16">
      <Reveal className="space-y-6 sm:space-y-8 lg:space-y-10">
        <h2 className="text-subheading font-bold text-black dark:text-white">
          Get in Touch
        </h2>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="max-w-xl text-normal text-zinc-600 dark:text-zinc-400">
              Available for frontend engineering roles, product-focused freelance work,
              and teams that care about performance, accessibility, and polished user
              experience.
            </p>
            <Button 
              href={`mailto:${personalData.email}`}
              className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black inline-flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Start a conversation
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <Reveal key={social.label} delay={index * 0.08}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center text-normal text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <SocialIcon kind={social.kind} className="h-5 w-5" />
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="text-normal text-zinc-500 dark:text-zinc-500">
          📍 {personalData.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
