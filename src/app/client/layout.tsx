"use client";
import { ResponsiveAppBar } from "@/operations/front-office/components";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0b0c40",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ResponsiveAppBar />
        {children}
      </QueryClientProvider>
    </div>
  );
}
