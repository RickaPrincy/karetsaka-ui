import { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { v4 as uuid } from "uuid";
import { ImageInput, retrieveImageFactory } from "@/common/components/inputs";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { required } from "@/common/input-validator";
import { Image } from "@/gen/client";
import { storageProvider } from "@/providers/storage-provider";
import { createImagePath } from "@/providers/image-provider";

export const ImageCreate: FC = () => {
  return (
    <Create
      redirect="show"
      title="Create Image"
      transform={async (data: any): Promise<Image> => {
        const id = uuid();
        const { rawFile } = retrieveImageFactory(data, "image");
        const { url } = await storageProvider.uploadFiles({
          path: createImagePath(id),
          rawFile,
        });

        return {
          id,
          name: data.name,
          url,
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
