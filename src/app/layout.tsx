import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CoogCasa - UH Student Hub",
    template: "%s | CoogCasa",
  },
  description:
    "The all-in-one student hub for University of Houston. Course grades, instructor ratings, careers, scholarships, and more.",
  keywords: [
    "University of Houston",
    "UH",
    "courses",
    "grades",
    "GPA",
    "instructors",
    "CougarGrades",
    "student",
    "Houston",
  ],
  authors: [{ name: "CoogCasa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coogcasa.com",
    siteName: "CoogCasa",
    title: "CoogCasa - UH Student Hub",
    description:
      "The all-in-one student hub for University of Houston. Course grades, instructor ratings, careers, scholarships, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoogCasa - UH Student Hub",
    description:
      "The all-in-one student hub for University of Houston. Course grades, instructor ratings, careers, scholarships, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
