import type { Metadata } from "next";
import { Sora } from "next/font/google";

import { Footer } from "@/components/atoms/footer";
import { Header } from "@/components/atoms/header";
import { Dehydrate } from "@/components/shared/Dehydrate";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
  weight: ["400", "600", "700"],
});

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
        <Dehydrate>
          <Header />
        </Dehydrate>
        {children}
        <Footer />
      </body>
    </html>
  );
}
