import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const ContinueListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  overflow: "auto",
  width: "100%",
  whiteSpace: "nowrap",
  padding: 10,
}));
