import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const LargeCard = styled(Card)(({ theme }) => ({
  position: "relative",
  minWidth: 390,
  height: 240,
  borderRadius: 15,
  borderWidth: 0,
  backgroundColor: "transparent",
}));

export const LowerContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 99,
  alignItems: "baseline",
  justifyContent: "flex-end",
  padding: 20,
}));
