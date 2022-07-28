import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const CustomCheckBoxButton = styled(Button)(({ theme }) => ({
  width: 120,
  height: 40,
  backgroundColor: "#0b0809",
  color: "gray",
  textTransform: "none",
  fontSize: 12,
  borderRadius: 20,
  alignItems: "flex-start",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: 12,
  paddingLeft: 12,
}));
