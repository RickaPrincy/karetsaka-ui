"use client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../page";
import {
  CarModel,
  CarSearch,
} from "@/operations/front-office/search/components";

export default function Car() {
  return (
    <QueryClientProvider client={queryClient}>
      <CarSearch />
      <CarModel />
    </QueryClientProvider>
  );
}
