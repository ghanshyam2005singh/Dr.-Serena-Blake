import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Serena Blake - Clinical Psychologist | Therapy in Los Angeles",
  description: "Licensed clinical psychologist offering anxiety treatment, relationship counseling, and trauma recovery in Los Angeles. In-person and virtual sessions available.",
  keywords: "therapist, psychologist, Los Angeles, anxiety, relationship counseling, trauma therapy, mental health",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}