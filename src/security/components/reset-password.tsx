import { FC } from "react";
import { Button, SimpleForm, TextInput, useNotify } from "react-admin";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { Warning as WarningIcon } from "@mui/icons-material";
import { useLogin } from "../hooks";
import { useToggle } from "@/common/hooks";
import { emailProvider } from "@/providers/email-provider";
import authFirebase from "../auth-firebase";

export const ResetPassword: FC = () => {
  const { isLoading, setIsLoading } = useLogin();
  const notify = useNotify();
  const { value: showResetPassword, toggleValue: toggleShowResetPassword } =
    useToggle();

  return (
    <>
      <Button
        disabled={isLoading}
        variant="text"
        label="Reset password"
        onClick={toggleShowResetPassword}
      />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={showResetPassword}
        onClose={toggleShowResetPassword}
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
          Send email reset password
        </DialogTitle>
        <DialogTitle py={"0 !important"} fontSize=".9rem">
          <WarningIcon color="warning" sx={{ mr: 1, mb: 1 }} />A reset link will
          be send to the email
        </DialogTitle>
        <DialogContent>
          <SimpleForm
            onSubmit={(data: any) => {
              setIsLoading(true);
              authFirebase
                .resetPassword(data.email)
                .then(() => {
                  notify("Email sended !!", { type: "success" });
                  toggleShowResetPassword();
                })
                .catch(() => {
                  notify("Oops, an error occured, please try again !!", {
                    type: "error",
                  });
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }}
          >
            <TextInput source="email" label="Email" {...COMMON_INPUT_PROPS} />
          </SimpleForm>
        </DialogContent>
      </Dialog>
    </>
  );
};
