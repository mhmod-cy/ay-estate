import type { Metadata } from "next";
import { Sora } from 'next/font/google';

import "./globals.css";

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Ay Estate",
  description: "Ay Estate description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
