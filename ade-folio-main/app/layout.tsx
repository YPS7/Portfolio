import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Pratap Singh — Software Engineer",
  description:
    "Software Engineer specializing in React, Next.js, JAVA and Python. Building, deploying and maintaining scalable products implementing new age technologies. Let's build something amazing together.",
  keywords: [
    "software",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "backend engineer",
    "developer portfolio",
    "creative development",
    "nigeria",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Yash Pratap Singh — Software Engineer",
    description:
      "Software Engineer at Andor Communications Pvt. Ltd., passionate about crafting new gen softwares and applications. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into products.",
    url: "https://www.adeolabadero.me",
    siteName: "www.adeolabadero.me",
    images: [
      {
        url: "https://drive.google.com/file/d/1yVV86Lo513nxyEBWpOzCiI-4uadmEJcn/view?usp=drive_link",
        width: 1200,
        height: 630,
        alt: "Adeola Badero — Frontend Software Engineer",
      },
      {
        url: "https://drive.google.com/file/d/1yVV86Lo513nxyEBWpOzCiI-4uadmEJcn/view?usp=drive_link",
        width: 800,
        height: 800,
        alt: "Adeola Badero — Frontend Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeola Badero — Software Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and TypeScript. Creating modern, responsive web experiences with a focus on performance and accessibility. Let's build something amazing together.",
    creator: "@Ade_the_great",
    images: ["https://drive.google.com/file/d/1yVV86Lo513nxyEBWpOzCiI-4uadmEJcn/view?usp=drive_link"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
