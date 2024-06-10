import { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { v4 as uuid } from "uuid";
import { CarBrand } from "@/gen/client";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { createBrandPath } from "@/providers/car-brand-provider";
import { ImageInput, retrieveImageFactory } from "@/common/components/inputs";
import { storageProvider } from "@/providers/storage-provider";

export const CarBrandCreate: FC = () => {
  return (
    <Create
      title="Create car brand"
      transform={async (data: any): Promise<CarBrand> => {
        const id = uuid();
        const { rawFile } = retrieveImageFactory(data, "image");
        const { url } = await storageProvider.uploadFiles({
          path: createBrandPath(id!),
          rawFile,
        });

        return {
          id: id!,
          name: data.name,
          picture: url,
        };
      }}
    >
      <SimpleForm>
        <TextInput
          source="name"
          label="Name"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <ImageInput source="image" />
      </SimpleForm>
    </Create>
  );
};
