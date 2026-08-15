import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { SocialIcon } from "@/components/social-icons";
import { socialLinks } from "@/data/site";

/**
 * No entrance animation here on purpose. This is the first content on the
 * page and the LCP element (the heading) - wrapping it in a motion Reveal
 * meant it server-rendered at opacity:0 and stayed invisible until client JS
 * downloaded, hydrated, and ran the fade-in. A "reveal" also has nothing to
 * create hierarchy against on first paint, since it's the only thing on
 * screen. Render it plainly instead, visible immediately, no JS dependency.
 */
export function Hero() {
  return (
    <section id="home" className="pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="space-y-6 sm:space-y-8">
        {/* Greeting & Name */}
        <div className="space-y-6">
          <h1 className="text-heading text-black dark:text-white">
            {personalData.tagline}
          </h1>

          <p className="text-subheading text-gray-600 dark:text-gray-400 max-w-4xl">
            {personalData.valueStatement}
          </p>
        </div>

        {/* Contact & Location Info */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-normal text-gray-600 dark:text-gray-400">
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center gap-2 transition-colors hover:text-black dark:hover:text-white"
          >
            <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{personalData.email}</span>
            <span className="sm:hidden">Email</span>
          </a>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          {personalData.phone && (
            <>
              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-black dark:hover:text-white"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{personalData.phone}</span>
                <span className="sm:hidden">Call</span>
              </a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
            </>
          )}
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            {personalData.location}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 sm:gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white"
              aria-label={social.label}
            >
              <SocialIcon kind={social.kind} className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
