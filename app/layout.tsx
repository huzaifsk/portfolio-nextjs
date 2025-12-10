import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DockNavigation } from "@/components/dock-navigation";
import { DownloadResumeButton } from "@/components/download-resume-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Huzaif Shaikh - Frontend Developer & UI/UX Designer",
  description: "Passionate Frontend Developer and UI/UX Designer based in Mumbai, India. Specializing in React.js, JavaScript, and modern web design.",
  keywords: ["frontend developer", "ui ux designer", "react", "javascript", "web design", "figma", "html css", "mumbai"],
  authors: [{ name: "Huzaif Shaikh" }],
  creator: "Huzaif Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huzaifshaikh.vercel.app",
    title: "Huzaif Shaikh - Frontend Developer & UI/UX Designer",
    description: "Passionate Frontend Developer and UI/UX Designer specializing in React.js and modern web technologies based in Mumbai, India.",
    siteName: "Huzaif Shaikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaif Shaikh - Frontend Developer & UI/UX Designer",
    description: "Passionate Frontend Developer and UI/UX Designer specializing in React.js and modern web technologies based in Mumbai, India.",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 lg:px-36 py-8 sm:py-12 pb-32 font-normal bg-white dark:bg-black">{children}</main>
          <DockNavigation />
          <DownloadResumeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
