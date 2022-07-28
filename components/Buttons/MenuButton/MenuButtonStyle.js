import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";

export const MenuEachButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: 50,
  color: "white",
  position: "relative",
  justifyContent: "flex-start",
  paddingLeft: 20,
}));

export const ActiveMenuRedLine = styled(Box)(({ theme }) => ({
  height: 40,
  width: 5,
  backgroundColor: "red",
  position: "absolute",
  right: 0,
  top: 0,
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
}));
