import { FC } from "react";
import { ListProps, List as RaList, useListContext } from "react-admin";
import { LinearProgress } from "@mui/material";

export const List: FC<ListProps> = ({ children, ...listProps }) => {
  return (
    <RaList {...listProps} empty={false}>
      <ListContent>{children}</ListContent>
    </RaList>
  );
};

const ListContent: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useListContext();

  return <> {isLoading ? <LinearProgress /> : children} </>;
};
