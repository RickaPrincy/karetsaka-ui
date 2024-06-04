import type { Metadata } from "next";
import "./globals.css";
import { ResponsiveAppBar } from "@/operations/front-office/components";

export const metadata: Metadata = {
  title: "Karetsaka",
  description: "Buy your car here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  );
}
