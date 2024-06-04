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
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import {
  AttachEmail as InviteIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";
import { ProfilePictureField } from "@/common/components/fields";
import { List } from "@/common/components/list";
import { UserCreate } from "./user-create";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { useToggle } from "@/common/hooks";
import defaultProfileImage from "@/assets/images/default_image.png";

export const UserList: FC = () => {
  const { value: showCreate, toggleValue: toggleShowCreate } = useToggle();

  return (
    <>
      <List
        title="Users"
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
            key="name"
            source="name"
            label="Name"
          />,
        ]}
      >
        <Datagrid rowClick="show">
          <TextField source="name" label="Username" />
          <EmailField source="email" label="Email" />
          <ProfilePictureField
            source="picture"
            label="Picture"
            defaultImage={defaultProfileImage.src}
          />
        </Datagrid>
      </List>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={showCreate}
        onClose={toggleShowCreate}
        sx={{
          "& *": {
            boxShadow: "none",
          },
          "& .MuiDialogContent-root": {
            p: 1,
          },
        }}
      >
        <DialogTitle pb={"2px !important"} fontSize="1.5rem">
          Invite new Admin
        </DialogTitle>
        <DialogTitle py={"0 !important"} fontSize=".9rem">
          <WarningIcon color="warning" sx={{ mr: 1, mb: 1 }} />
          An Email will be send to the email with authentification information
        </DialogTitle>
        <DialogContent>
          <UserCreate onSubmit={toggleShowCreate} />
        </DialogContent>
      </Dialog>
    </>
  );
};
