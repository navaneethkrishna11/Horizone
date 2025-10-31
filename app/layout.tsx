import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import QueryProvider from "./providers/QueryProvider";
import "./globals.css";



export const metadata: Metadata = {
  title: "Horizone website",
  description: "created by navaneeth krishna",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}

