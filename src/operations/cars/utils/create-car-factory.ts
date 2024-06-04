import { CrupdateCar } from "@/gen/client";

export type CrupdateCarWithStatusAndColor = CrupdateCar & {
  status: undefined | boolean;
  color: string;
};

export const createCarFactory = (
  toCreate: CrupdateCarWithStatusAndColor & {
    status: undefined | boolean;
    color: string;
  }
): CrupdateCar => ({
  ...toCreate,
  status: toCreate.status !== undefined ? toCreate.status : false,
  color: [toCreate.color],
  placeNumber: +toCreate.placeNumber,
  power: +toCreate.power,
});
