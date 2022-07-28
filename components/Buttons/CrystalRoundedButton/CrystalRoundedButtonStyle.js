import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const CrystalButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.35)",
  backdropFilter: "blur(10px)",
  color: "white",
  padding: 8,
  borderRadius: "100%",
}));
