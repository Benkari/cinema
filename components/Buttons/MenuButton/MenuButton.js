import { Typography } from "@mui/material";
import React from "react";
import { ActiveMenuRedLine, MenuEachButton } from "./MenuButtonStyle";

function MenuButton({ title, Icon, active }) {
  return (
    <MenuEachButton
      startIcon={<Icon style={{ color: active ? "red" : "gray" }} />}
      size="large"
    >
      <Typography
        style={{
          fontSize: 14,
          fontWeight: active ? 600 : 400,
          color: active ? "white" : "gray",
          textTransform: "none",
        }}
      >
        {title}
      </Typography>
      {active && <ActiveMenuRedLine />}
    </MenuEachButton>
  );
}

export default MenuButton;
