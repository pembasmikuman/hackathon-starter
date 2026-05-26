import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hackathon Starter AI Infrastructure",
  description: "A polished Next.js, Clerk, Supabase, and Prisma starter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#0a0a0a",
          colorBackground: "#ffffff",
          colorText: "#0a0a0a",
          colorTextSecondary: "#5f5f5f",
          colorInputBackground: "#ffffff",
          colorInputText: "#0a0a0a",
          borderRadius: "16px",
          fontFamily:
            "var(--font-dm-sans), Inter, Helvetica Neue, Helvetica, Arial, sans-serif",
        },
        elements: {
          cardBox:
            "shadow-[rgba(0,0,0,0.08)_0px_4px_6px_0px] border border-[#e5e7eb]",
          card: "rounded-3xl",
          headerTitle: "text-[32px] font-semibold tracking-[-0.015em]",
          headerSubtitle: "text-[#5f5f5f]",
          formButtonPrimary:
            "rounded-full bg-[#0a0a0a] text-white hover:bg-[#222222] text-sm font-semibold",
          formFieldInput:
            "rounded-lg border-[#e5e7eb] focus:border-[#1d4ed8] focus:ring-[#1d4ed8]",
          footerActionLink: "text-[#0a0a0a] font-semibold",
          socialButtonsBlockButton:
            "rounded-full border-[#e5e7eb] text-[#0a0a0a]",
        },
      }}
    >
      <html lang="en">
        <body className={`${dmSans.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
