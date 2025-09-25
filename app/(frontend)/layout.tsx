import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider"

import { Header } from "@/components/headers/header"
import { FooterBasic } from "@/components/headers/footer-simple"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi, I'm Piotr Szaran",
  description: "A Web Developer based in Toronto.",
  openGraph: {
    title: "Check out my portfolio!",
    description: "A Web Developer based in Toronto.",
    images: "https://www.piotrszaran.com/images/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <meta name="apple-mobile-web-app-title" content="Piotr Szaran" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-gradient-to-t dark:bg-gradient-to-b from-blue-50 dark:from-gray-100/5 to-background h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <FooterBasic />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}