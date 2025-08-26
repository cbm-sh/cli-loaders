import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { METADATA } from "@/lib/config/metadata";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import "./globals.css";

const ToastProvider = dynamic(() =>
  import("@/components/ToastProvider").then((mod) => mod.ToastProvider),
);
const ToastWrapper = dynamic(() =>
  import("@/components/ToastWrapper").then((mod) => mod.ToastWrapper),
);

export const metadata = METADATA;

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <ToastProvider>
    <html lang="en" suppressHydrationWarning>
      <body className="mx-auto min-h-screen max-w-3xl overflow-x-hidden scroll-smooth border-0 bg-black font-sans text-sm text-neutral-100 antialiased md:border md:border-y-0 md:border-x-neutral-800">
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastWrapper />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  </ToastProvider>
);

export default RootLayout;
