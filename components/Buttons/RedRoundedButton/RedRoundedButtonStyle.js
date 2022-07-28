import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const RedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(180, 18, 38, 0.9)",
  color: "white",
  padding: 8,
  borderRadius: 20,
  textTransform: "none",
}));
