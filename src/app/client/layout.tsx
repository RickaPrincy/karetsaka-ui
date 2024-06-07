import type { Metadata } from "next";
import "../globals.css";
import { Footer, ResponsiveAppBar } from "@/operations/front-office/components";

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
      <body>
        <ResponsiveAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
