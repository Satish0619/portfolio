import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satish Mungusmare — Frontend Developer (React.js / Next.js)",
  description:
    "Frontend Developer with 3+ years at Accenture, specializing in scalable, secure web applications using React.js and Next.js — including AI-powered enterprise apps with SSO across Web and Microsoft Teams.",
  keywords: [
    "Satish Mungusmare",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Accenture",
    "SSO",
    "OAuth",
    "Adobe Journey Optimizer",
    "Portfolio",
  ],
  authors: [{ name: "Satish Mungusmare" }],
  openGraph: {
    title: "Satish Mungusmare — Frontend Developer",
    description:
      "Scalable, secure web apps with React.js & Next.js. AI-powered enterprise applications with SSO on Web & Microsoft Teams.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="relative overflow-x-hidden font-sans antialiased">
        <Providers>
          <ScrollProgress />
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
