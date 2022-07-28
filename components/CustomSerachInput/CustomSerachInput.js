import React from "react";
import {
  CustomInput,
  CustomInputWrapper,
  RightBarCustomInput,
} from "./CustomSerachInputStyle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function CustomSerachInput() {
  return (
    <RightBarCustomInput>
      <CustomInputWrapper>
        <SearchOutlinedIcon />
        <CustomInput
          color="primary"
          id="standard-basic"
          variant="standard"
          placeholder="Seach Movies"
        />
      </CustomInputWrapper>
    </RightBarCustomInput>
  );
}

export default CustomSerachInput;
