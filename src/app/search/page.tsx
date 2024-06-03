"use client";
import { QueryClientProvider, QueryClient } from "react-query";
import {
  CarModel,
  CarSearch,
} from "@/operations/front-office/search/components";

const queryClient = new QueryClient();

export default function Car() {
  return (
    <QueryClientProvider client={queryClient}>
      <CarSearch />
      <CarModel />
    </QueryClientProvider>
  );
}
