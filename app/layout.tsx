import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AE Hiring Hub | Zapier",
  description: "Single source of truth for AE hiring at Zapier — targets, profiles, process, and strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
