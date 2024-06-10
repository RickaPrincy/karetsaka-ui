import { FC } from "react";
import { Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";
import { useParams } from "react-router-dom";
import { ImageInput, retrieveImageFactory } from "@/common/components/inputs";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { required } from "@/common/input-validator";
import { storageProvider } from "@/providers/storage-provider";
import { Image } from "@/gen/client";
import { createImagePath } from "@/providers/image-provider";

export const ImageEdit: FC = () => {
  const { id } = useParams();

  return (
    <Edit
      transform={async (data: any): Promise<Image> => {
        let url = data.url;
        if (data.image) {
          const { rawFile } = retrieveImageFactory(data, "image");
          url = await storageProvider
            .uploadFiles({
              path: createImagePath(id!),
              rawFile,
            })
            .then((response) => response.url);
        }

        return {
          id: id!,
          name: data.name,
          url,
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
