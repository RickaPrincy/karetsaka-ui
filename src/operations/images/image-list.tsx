import { FC } from "react";
import {
  Button,
  Datagrid,
  EmailField,
  ExportButton,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";
import {
  AttachEmail as InviteIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";
import { PictureField } from "@/common/components/fields";
import { List } from "@/common/components/list";
import { ImageCreate } from "./image-create";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { useToggle } from "@/common/hooks";
import defaultProfileImage from "@/assets/images/default_image.png";

export const ImageList: FC = () => {
  const { value: showCreate, toggleValue: toggleShowCreate } = useToggle();

  return (
    <>
      <List
        title="Images"
        actions={
          <TopToolbar>
            <Button
              variant="contained"
              color="warning"
              label="Invite new Admin"
              startIcon={<InviteIcon />}
              onClick={toggleShowCreate}
            />
            <ExportButton variant="contained" />
          </TopToolbar>
        }
        filters={[
          <TextInput
            {...COMMON_INPUT_PROPS}
            alwaysOn
            key="productId"
            source="productId"
            label="Product ID"
          />,
        ]}
      >
        <Datagrid rowClick="show">
          <TextField source="productId" label="Product ID" />
          <PictureField source="url" label="Picture" />
        </Datagrid>
      </List>
    </>
  );
};
