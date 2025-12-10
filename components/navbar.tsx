"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { personalData } from "@/data/personal";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Work Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link 
            href="/" 
            className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            {personalData.name.split(" ")[0]}
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
