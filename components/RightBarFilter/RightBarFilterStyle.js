import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const RightBarWrapper = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#1a171e",
  overflow: "hidden",
}));

export const RightBarTopUser = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 10,
  paddingRight: 20,
  paddingLeft: 20,
  gap: 10,
  justifyContent: "space-between",
}));

export const RightFilterWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 20,
  gap: 15,
}));
