"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";

// Dynamic imports for better code splitting
const Overview = dynamic(() => import("@/components/Overview").then(mod => ({ default: mod.Overview })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
});

const Skills = dynamic(() => import("@/components/skills").then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
});

const ExperienceTimeline = dynamic(() => import("@/components/ExperienceTimeline").then(mod => ({ default: mod.ExperienceTimeline })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
});

const Education = dynamic(() => import("@/components/Education").then(mod => ({ default: mod.Education })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
});

const ProjectsGrid = dynamic(() => import("@/components/ProjectsGrid").then(mod => ({ default: mod.ProjectsGrid })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
});

const Contact = dynamic(() => import("@/components/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 dark:bg-gray-900 rounded-lg" />
});

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Skills />
      <ExperienceTimeline />
      <Education />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
