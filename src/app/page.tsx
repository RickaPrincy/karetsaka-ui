"use client";

import { HomePage } from "@/operations/front-office/home/home";
import Provider from "./(client)/layout";

export default function Home() {
  return (
    <Provider>
      <HomePage />;
    </Provider>
  );
}
