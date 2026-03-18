"use client";

import { Home, Moon, Sun, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useHydrated } from "@/components/use-hydrated";
import { SocialIcon } from "@/components/social-icons";
import { socialLinks } from "@/data/site";

export function DockNavigation() {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useHydrated();

  const navigationItems = [
    { icon: Home, href: "#home", label: "Home" },
    { icon: Download, href: "/Huzaif_Shaikh_Resume_sp.pdf", label: "Download Resume", external: true },
  ];

  const socialItems = [
    ...socialLinks,
    { icon: ExternalLink, href: "https://linktr.ee/huzaif_shaikh", label: "Linktree" },
  ];

  return (
    <TooltipProvider>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto mb-3 sm:mb-4 flex origin-bottom justify-center px-4">
        <Dock direction="middle" className="z-50 pointer-events-auto">
          {/* Navigation Items */}
          {navigationItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 sm:size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4 sm:size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          {/* Theme Toggle */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  aria-label="Toggle Theme"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 sm:size-12 rounded-full"
                  )}
                >
                  {hydrated && resolvedTheme === "dark" ? <Sun className="size-4 sm:size-4" /> : <Moon className="size-4 sm:size-4" />}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-full" />

          {/* Social Items */}
          {socialItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 sm:size-12 rounded-full"
                    )}
                  >
                    {"kind" in item ? (
                      <SocialIcon kind={item.kind} className="size-4 sm:size-4" />
                    ) : (
                      <item.icon className="size-4 sm:size-4" />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </TooltipProvider>
  );
}
