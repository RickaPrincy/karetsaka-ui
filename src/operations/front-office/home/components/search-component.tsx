import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import { CarMotorTypeEnum } from "@/gen/client";

export const SearchComponent = () => {
  const { handleSubmit, register } = useForm();

  const redirectToSearch = (data: any) => {
    console.log(data);
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 10px",
        backgroundColor: "white",
        gap: "10px",
        borderRadius: "15px",
        marginTop: "10px",
      }}
      onSubmit={handleSubmit(redirectToSearch)}
    >
      <TextField
        sx={{ width: "350px" }}
        variant="outlined"
        label="Name"
        type="text"
        size="small"
        {...register("name")}
      />
      <FormControl size="small" sx={{ width: "350px" }}>
        <InputLabel id="demo-simple-select-label">Motor Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Age"
          id="demo-simple-select"
          {...register("motorType")}
        >
          <MenuItem value={CarMotorTypeEnum.Diesel}>Diesel</MenuItem>
          <MenuItem value={CarMotorTypeEnum.Electric}>Electric</MenuItem>
          <MenuItem value={CarMotorTypeEnum.Gasoline}>Gasoline</MenuItem>
          <MenuItem value={CarMotorTypeEnum.Hybrid}>Hybrid</MenuItem>
        </Select>
      </FormControl>
      <Button color="warning" variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
};
