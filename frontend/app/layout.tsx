import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iSnippetsCrafters",
  description: "Building Seamless Code Snippet Management for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/sr-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
