import { FC } from "react";
import { Typography } from "@mui/material";
import { Warning as WarningIcon } from "@mui/icons-material";
import {
  Create,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from "react-admin";
import { v4 as uuid } from "uuid";
import { ImageInput } from "@/common/components/inputs";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { required } from "@/common/input-validator";
import { Image } from "@/gen/client";
import { storageProvider } from "@/providers/storage-provider";
import { createImagePath } from "@/providers/image-provider";
import { imagesApi } from "@/providers/api";

export type CreatePropsType = { name: string; images: any[] };
export type CreateImagePaylod = { name: string; raw: File };

const mapAndUploadImages = async (data: CreatePropsType): Promise<Image[]> => {
  const uploadPromises = data.images.map(async (image, index) => {
    const id = uuid();
    const { rawFile } = image;

    try {
      const { url } = await storageProvider.uploadFiles({
        path: createImagePath(id),
        rawFile,
      });

      return {
        id,
        url,
        name: data.name + index,
      };
    } catch (error) {
      console.error("Error uploading file:", error);
      return {
        id,
        url: "",
        name: data.name + index,
      };
    }
  });

  return await Promise.all(uploadPromises);
};

export const ImageCreate: FC = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  return (
    <Create
      redirect="show"
      title="Create Image"
      transform={mapAndUploadImages}
      mutationOptions={{
        mutationFn: async (images: any) => {
          return imagesApi()
            .saveOrUpdate(images)
            .then((response) => response.data);
        },
        mutationKey: ["images"],
        onSuccess: () => {
          notify("Image imported with success !!!", { type: "success" });
          redirect("list", "images");
        },
        onError: (error: any) => {
          //FIXME: react admin response type
          console.log(error);
          notify("Image imported with success !!!", { type: "warning" });
          redirect("list", "images");
        },
      }}
    >
      <SimpleForm>
        <Typography sx={{ mt: 1 }}>
          <WarningIcon color="warning" />A number suffix will be added for the
          files (ex: bmw1, bmw2 ...)
        </Typography>
        <TextInput
          source="name"
          label="Name"
          validate={required()}
          {...COMMON_INPUT_PROPS}
        />
        <ImageInput source="images" multiple />
      </SimpleForm>
    </Create>
  );
};
