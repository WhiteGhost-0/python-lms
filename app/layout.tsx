import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | istmX Learn",
    default: "istmX Learn — Visual-First Programming & AI",
  },
  description:
    "A visual-first, text-based learning platform for Python, GenAI, and computer science concepts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${schibstedGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
