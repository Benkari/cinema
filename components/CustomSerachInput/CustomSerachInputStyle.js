import styled from "@emotion/styled";
import { Box, OutlinedInput } from "@mui/material";

export const RightBarCustomInput = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
}));
export const CustomInputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#0b0809",
  width: "90%",
  borderRadius: 40,
  color: "white",
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 10,
  paddingRight: 10,
}));

export const CustomInput = styled(OutlinedInput)(({ theme }) => ({
  width: "80%",
  color: "white",
  height: 40,
}));
