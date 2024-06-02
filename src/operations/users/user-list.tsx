import { FC } from "react";
import {
  Button,
  Datagrid,
  EmailField,
  ExportButton,
  List,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Add as CreateIcon, Warning as WarningIcon } from "@mui/icons-material";
import { ProfilePictureField } from "@/common/components/fields";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { useToggle } from "@/common/hooks";
import { UserCreate } from "./user-create";

export const UserList: FC = () => {
  const { value: showCreate, toggleValue: toggleShowCreate } = useToggle();

  return (
    <>
      <List
        title="Users"
        actions={
          <TopToolbar>
            <Button
              startIcon={<CreateIcon />}
              label="Create"
              onClick={toggleShowCreate}
            />
            <ExportButton />
          </TopToolbar>
        }
        filters={[
          <TextInput
            {...COMMON_INPUT_PROPS}
            alwaysOn
            key="name"
            source="name"
            label="Username"
          />,
        ]}
      >
        <Datagrid>
          <TextField source="name" label="Username" />
          <EmailField source="email" label="Email" />
          <ProfilePictureField source="picture" label="Picture" />
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
          Create amin user
        </DialogTitle>
        <DialogTitle py={"0 !important"} fontSize=".9rem">
          <WarningIcon color="warning" sx={{ mr: 1, mb: 1 }} />
          An Email will be send to the email with authentification information
        </DialogTitle>
        <DialogContent>
          <UserCreate />
        </DialogContent>
      </Dialog>
    </>
  );
};
