import { BrandCard, LandingPage} from "@/components";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <LandingPage />
      <div className="mt-12 padding-x padding-y max-width">
        <BrandCard />
      </div>
    </div>
  );
}
