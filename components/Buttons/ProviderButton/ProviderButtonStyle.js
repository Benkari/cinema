import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const ProviderButtonWrapper = styled(Button)(({ theme }) => ({
  width: "100%",
  position: "relative",
  alignItems: "center",
  height: 50,
  overflow: "hidden",
  color: "black",
}));
export const ActiveRedLine = styled(Box)(({ theme }) => ({
  height: 50,
  width: 5,
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "red",
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
}));
export const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  height: 60,
  width: 60,
  borderRadius: "100%",
  justifyContent: "center",
  alignItems: "center",
}));
