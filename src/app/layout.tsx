import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIdeas - AI Consulting Services",
  description: "Transform your business with AI consulting services from AIdeas. We help businesses leverage artificial intelligence for growth and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
} 