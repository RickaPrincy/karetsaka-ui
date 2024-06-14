import {
  ImageInput as RaImageInput,
  ImageField,
  ImageFieldProps,
  ImageInputProps as RaImageInputProps,
  useInput,
} from "react-admin";

export type ImageInputProps = Omit<
  RaImageInputProps,
  "image" | "label" | "accept"
> & {
  imageFieldProps?: Omit<ImageFieldProps, "title">;
};

// export type ImageInputEditProps = ImageInputProps & {
//   editSource: string;
// };

export const retrieveImageFactory = (data: any, source: string) => {
  return {
    filename: data[source].title,
    rawFile: data[source].rawFile,
  };
};

export const ImageInput = ({
  imageFieldProps,
  ...imageInputProps
}: ImageInputProps) => {
  return (
    <RaImageInput isRequired {...imageInputProps}>
      <ImageField source="src" title="title" {...imageFieldProps} />
    </RaImageInput>
  );
};

// export const ImageEditInput = ({
//   editSource,
//   ...inputImageProps
// }: ImageInputEditProps) => {
//   const { field } = useInput({ source: editSource });
//   return <ImageInput defaultValue={field.name} {...inputImageProps} />;
// };
