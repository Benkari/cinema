import React from "react";
import { CustomCheckBoxButton } from "./CustomCheckboxStyle";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function CustomCheckbox({ title, onClick, active }) {
  return (
    <CustomCheckBoxButton
      endIcon={<AddOutlinedIcon />}
      onClick={onClick}
      style={{
        backgroundColor: active ? "red" : null,
        color: active ? "white" : null,
      }}
    >
      {title}
    </CustomCheckBoxButton>
  );
}

export default CustomCheckbox;
