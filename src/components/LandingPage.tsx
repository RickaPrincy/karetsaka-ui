"use client";
import Image from "next/image";

export function LandingPage() {
  return (
    <div className="landing">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="landing__title">Welcome to karetsaka</h1>
        <p className="landing__subtitle">Find your dream car in karetsaka</p>
      </div>
      <div className="landing__image-container">
        <div className="landing__image">
          <Image src="/golf.png" alt="golf" fill className="object-contain" />
        </div>

        <div className="landing__image-overlay" />
      </div>
    </div>
  );
}
