import { Image } from "@/gen/client";
import { AutocompleteArrayInput, useGetList } from "react-admin";

export const SelectImagesInput = () => {
  const { data = [], isLoading } = useGetList<Image>("images", {
    pagination: {
      page: 1,
      perPage: 500, // FIXME
    },
  });

  const IMAGE_CHOICES = data.map((image) => ({
    value: image.id,
    label: image.name,
  }));

  return (
    <AutocompleteArrayInput
      fullWidth
      isLoading={isLoading}
      optionText="label"
      optionValue="value"
      choices={IMAGE_CHOICES}
      label="Images"
      source="imagesId"
    />
  );
};
