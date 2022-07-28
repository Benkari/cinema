import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const LeftMenusWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 5,
  height: "100vh",
  backgroundColor: "#1a171e",
  paddingTop: 60,
  paddingBottom: 30,
  gap: 1,
  overflow: "auto",
}));
