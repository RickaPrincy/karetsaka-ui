import { ResourceProps } from "react-admin";
import { ImageList } from "./image-list";
import { ImageCreate } from "./image-create";
import { ImageShow } from "./image-show";
import { ImageEdit } from "./image-edit";

export const IMAGE_UI: Partial<ResourceProps> = {
  list: ImageList,
  create: ImageCreate,
  edit: ImageEdit,
  show: ImageShow,
};
