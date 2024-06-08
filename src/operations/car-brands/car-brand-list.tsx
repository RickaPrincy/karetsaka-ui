import { FC } from "react";
import { TextInput, useListContext, useRedirect } from "react-admin";
import { List } from "@/common/components/list";
import { COMMON_INPUT_PROPS } from "@/common/utils/common-props";
import { CarBrand } from "@/gen/client";
import { CarBrandC } from "./components";
import { FlexBox } from "@/common/components/box";

//TODO: rename PictureField
export const CarBrandList: FC = () => {
  return (
    <List
      hasCreate
      title="Brands"
      filters={[
        <TextInput alwaysOn key="name" source="name" {...COMMON_INPUT_PROPS} />,
      ]}
    >
      <ListContent />
    </List>
  );
};

const ListContent = () => {
  const { data: brands = [] } = useListContext<CarBrand>();
  const redirect = useRedirect();
  return (
    <FlexBox
      sx={{ flexWrap: "wrap", justifyContent: "start", alignItems: "center" }}
    >
      {brands.map((el) => (
        <CarBrandC
          onClick={() => {
            redirect("show", "carBrands", el.id);
          }}
          brand={el}
          key={el.id}
        />
      ))}
    </FlexBox>
  );
};
