import { FC } from "react";
import { Box as MuiBox, BoxProps } from "@mui/material";
import { FLEX_BOX_SX } from "@/common/utils/common-props";

export const FlexBox: FC<BoxProps> = ({ sx = {}, ...boxProps }) => {
  return <MuiBox sx={{ ...FLEX_BOX_SX, ...sx }} {...boxProps} />;
};
