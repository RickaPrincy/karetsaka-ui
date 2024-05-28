"use client";
import { useState } from "react";
import Image from "next/image";

type CarBrandType = {
  id: string;
  logo: string;
  name: string;
};

const staticBrands: CarBrandType[] = [
  {
    id: "1",
    logo: "/blob.png",
    name: "Brand One",
  },
  {
    id: "2",
    logo: "/blob.png",
    name: "Brand Two",
  },
  {
    id: "3",
    logo: "/blob.png",
    name: "Brand Three",
  },
];

export function CarBrand() {
  const [brands] = useState<CarBrandType[]>(staticBrands);

  return (
    <div>
      <div className="home__text-container text-center">
        <h1 className="text-4xl font-extrabold">Car Brands</h1>
        <p>Explore our brands cars you might like</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div key={brand.id} className="card__brand">
            <div className="flex flex-row items-center">
              <div className="flex-shrink-0">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={50}
                  height={50}
                />
              </div>
              <div className="ml-4">
                <div className="text-lg font-semibold">{brand.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
