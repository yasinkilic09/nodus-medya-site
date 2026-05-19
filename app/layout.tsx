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
  title: "NODUS MEDYA | Yeni Nesil Reklam & Medya Yönetimi",
  description:
    "NODUS MEDYA; reklam, sosyal medya, marka stratejisi ve teknoloji destekli medya yönetimi çözümleriyle markaların dijital büyüme düğümünü çözer.",
  keywords: [
    "NODUS MEDYA",
    "reklam ajansı",
    "sosyal medya yönetimi",
    "dijital pazarlama",
    "marka stratejisi",
    "Aydın reklam ajansı",
    "medya yönetimi",
    "SEO",
    "GEO",
  ],
  authors: [{ name: "NODUS MEDYA" }],
  openGraph: {
    title: "NODUS MEDYA | Yeni Nesil Reklam & Medya Yönetimi",
    description:
      "Markanızın büyüme düğümünü çözen yeni nesil reklam ve medya yönetimi markası.",
    siteName: "NODUS MEDYA",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#05070D] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}