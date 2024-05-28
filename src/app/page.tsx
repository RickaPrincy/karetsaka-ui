import {
  CarBrand,
  LandingPage,
} from "@/operations/front-office/home/components";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <LandingPage />
      <div className="mt-12 padding-x padding-y max-width">
        <CarBrand />
      </div>
    </div>
  );
}
