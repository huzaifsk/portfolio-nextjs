"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function FloatingCalButton() {
  return (
    <TooltipProvider>
      <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://cal.com/huzaifshaikh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Calendar className="size-4 sm:size-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Schedule a call</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}