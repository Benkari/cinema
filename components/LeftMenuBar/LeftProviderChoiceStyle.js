import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";

export const LeftProviderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 2,
  height: "100vh",
  backgroundColor: "#0b0809",
  overflow: "hidden",
  paddingTop: 60,
  gap: 20,
}));
