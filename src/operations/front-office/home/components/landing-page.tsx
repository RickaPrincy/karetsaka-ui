import Image from "next/image";
import golfImage from "@/assets/images/golf.png";
import { CarSearch } from "../../car-search/components";

export function LandingPage() {
  return (
    <div className="landing">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="landing__title">Welcome to karetsaka</h1>
        <p className="landing__subtitle">Find your dream car in karetsaka</p>
        <div className="landing__search">
          <CarSearch />
        </div>
      </div>
      <div className="landing__image-container">
        <div className="landing__image">
          <Image src={golfImage} alt="golf" fill className="object-contain" />
        </div>
        <div className="landing__image-overlay" />
      </div>
    </div>
  );
}
