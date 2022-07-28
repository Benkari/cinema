import styled from "@emotion/styled";
import { Box, Card, IconButton, Typography } from "@mui/material";

export const MiniPlayerCard = styled(Card)(({ theme }) => ({
  position: "relative",
  minWidth: 300,
  height: 220,
  borderRadius: 20,
  borderWidth: 0,
  backgroundColor: "transparent",
}));

export const MiniPlayerPlayButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 40,
  width: 40,
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(3px)",
}));

export const MiniPlayerLowerContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
}));

export const SmallTimeText = styled(Typography)(({ theme }) => ({
  fontSize: 10,
  fontWeight: 300,
  color: "white",
}));
