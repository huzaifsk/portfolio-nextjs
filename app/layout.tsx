import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DockNavigation } from "@/components/dock-navigation";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Huzaif Shaikh - Frontend Engineer",
  description: "Passionate Frontend Engineer based in Mumbai, India. Specializing in React.js, JavaScript, and modern web design.",
  keywords: ["frontend developer", "ui ux designer", "react", "javascript", "web design", "figma", "html css", "mumbai"],
  authors: [{ name: "Huzaif Shaikh" }],
  creator: "Huzaif Shaikh",
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
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
      <head>
        <link rel="preload" href="/react_light.svg" as="image" />
        <link rel="preload" href="/nextjs_icon_dark.svg" as="image" />
        <link rel="preload" href="/typescript.svg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body className={`${GeistSans.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 lg:px-36 py-8 sm:py-12 pb-32 font-normal bg-white dark:bg-black">{children}</main>
          <DockNavigation />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
