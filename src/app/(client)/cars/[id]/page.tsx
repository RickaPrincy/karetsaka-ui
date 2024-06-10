"use client";

import { useParams } from "next/navigation";
import { CarShow } from "@/operations/front-office/show/components";

export default function Car() {
  const { id } = useParams();
  return <CarShow id={id as string} />;
}
