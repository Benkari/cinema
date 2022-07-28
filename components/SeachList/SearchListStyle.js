import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SearchListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  overflow: "auto",
}));
