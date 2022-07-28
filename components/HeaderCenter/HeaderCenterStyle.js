import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const HeaderCenterWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 10,
  paddingRight: 20,
  paddingLeft: 20,
  alignItems: "center",
  border: "solid",
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.12)",
}));
export const HeaderCenterText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 300,
  cursor: "pointer",
}));

export const LeftDrawerWrapper = styled.div`
  display: none;
  @media (max-width: 1080px) {
    display: block;
  }
`;
