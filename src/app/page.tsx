"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import {
  CarBrand,
  LandingPage,
  CarList,
} from "@/operations/front-office/home/components";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="overflow-hidden">
        <LandingPage />
        <div className="mt-12 padding-x padding-y max-width">
          <CarBrand />
        </div>
        <div className="mt-12 padding-x padding-y max-width">
          <CarList />
        </div>
      </div>
    </QueryClientProvider>
  );
}
