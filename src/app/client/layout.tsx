import { ResponsiveAppBar } from "@/operations/front-office/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResponsiveAppBar />
      {children}
    </>
  );
}
