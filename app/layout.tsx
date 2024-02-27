import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-providers";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "../providers/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My E-commerce",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute = "class" defaultTheme="system" enableSystem >
            <ToasterProvider/>
            <ModalProvider/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
