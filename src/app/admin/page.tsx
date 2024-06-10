import dynamic from "next/dynamic";

const AdminApp = dynamic(() => import("@/dashboard"), { ssr: false });

export default function Home() {
  return <AdminApp />;
}

Home.getLayout = (page: any) => {
  return <>{page}</>;
};
