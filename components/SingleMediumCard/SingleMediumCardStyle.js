import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const MediumCard = styled(Card)(({ theme }) => ({
  position: "relative",
  minWidth: 220,
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
  zIndex: 999,
  alignItems: "baseline",
  justifyContent: "flex-end",
  padding: 20,
}));

export const MediumRateWrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  padding: 5,
  paddingRight: 10,
  paddingLeft: 10,
  backgroundColor: "#0b0809",
  gap: 5,
}));
