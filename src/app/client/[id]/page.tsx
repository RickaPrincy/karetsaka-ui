"use client";

import { CarShow } from "@/operations/front-office/show/components";
import { useParams } from "next/navigation";

export default function Car() {
  const { id } = useParams();
  return <CarShow id={id as string} />;
}
