import { FC } from "react";
import { Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";
import { useParams } from "react-router-dom";
import { ImageInput, retrieveImageFactory } from "@/common/components/inputs";
import { required } from "@/common/input-validator";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { CarBrand } from "@/gen/client";
import { createBrandPath } from "@/providers/car-brand-provider";
import { storageProvider } from "@/providers/storage-provider";

export const CarBrandEdit: FC = () => {
  const { id } = useParams();

  return (
    <Edit
      transform={async (data: any): Promise<CarBrand> => {
        let url = data.url;
        if (data.image) {
          const { rawFile } = retrieveImageFactory(data, "image");
          url = await storageProvider
            .uploadFiles({
              path: createBrandPath(id!),
              rawFile,
            })
            .then((response) => response.url);
        }

        return {
          id: id!,
          name: data.name,
          picture: url,
        };
      }}
    >
      <SimpleForm
        toolbar={
          <Toolbar>
            <SaveButton />
          </Toolbar>
        }
      >
        <TextInput
          source="name"
          label="Name"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <ImageInput isRequired={false} source="image" />
      </SimpleForm>
    </Edit>
  );
};
