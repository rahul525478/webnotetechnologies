import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "devicon/devicon.min.css";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { COMPANY_CONTACT } from "@/data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webnotetechnologies.com"),
  title: {
    default: "WebNote Technologies | Enterprise Digital Engineering & AI Growth Agency",
    template: "%s | WebNote Technologies",
  },
  description:
    "WebNote Technologies is a leading global digital engineering agency specializing in enterprise web development, scalable mobile apps, digital marketing, and AI automation.",
  keywords: [
    "WebNote Technologies",
    "Digital Engineering Agency",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing Agency",
    "AI Automation",
    "Global Technology Partner",
    "Custom Software Development",
  ],
  authors: [{ name: COMPANY_CONTACT.companyName, url: "https://webnotetechnologies.com" }],
  creator: COMPANY_CONTACT.companyName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webnotetechnologies.com",
    siteName: COMPANY_CONTACT.companyName,
    title: "WebNote Technologies | Enterprise Digital Engineering & AI Growth Agency",
    description:
      "Global digital engineering, scalable web & mobile apps, digital marketing, and enterprise AI automation.",
    images: [
      {
        url: "/webnotelogo.png",
        width: 900,
        height: 320,
        alt: "WebNote Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNote Technologies | Enterprise Digital Engineering & AI Growth Agency",
    description:
      "Global digital engineering, scalable web & mobile apps, digital marketing, and enterprise AI automation.",
    images: ["/webnotelogo.png"],
  },
  icons: {
    icon: "/webnotelogo.png",
    shortcut: "/webnotelogo.png",
    apple: "/webnotelogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col text-slate-900 selection:bg-blue-600/15 selection:text-blue-900 antialiased overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="flex-1 pt-18 sm:pt-20 overflow-x-hidden w-full max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
