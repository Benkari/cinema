import React from "react";
import {
  HeaderCenterText,
  HeaderCenterWrapper,
  LeftDrawerWrapper,
} from "./HeaderCenterStyle";
import SensorsIcon from "@mui/icons-material/Sensors";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LeftDrawer from "../LeftDrawer/LeftDrawer";

function HeaderCenter() {
  return (
    <HeaderCenterWrapper>
      <div
        style={{
          display: "flex",
          gap: 20,
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <LeftDrawerWrapper>
          <LeftDrawer />
        </LeftDrawerWrapper>
        <HeaderCenterText variant="h5" style={{ color: "white", fontSize: 14 }}>
          Movies
        </HeaderCenterText>
        <HeaderCenterText variant="h5" style={{ color: "gray", fontSize: 14 }}>
          Series
        </HeaderCenterText>
        <HeaderCenterText variant="h5" style={{ color: "gray", fontSize: 14 }}>
          TV Shows
        </HeaderCenterText>
      </div>
      <div>
        <IconButton>
          <SensorsIcon style={{ color: "white", fontSize: 18 }} />
        </IconButton>
        <IconButton>
          <NotificationsIcon style={{ color: "white", fontSize: 18 }} />
        </IconButton>
        <IconButton>
          <GridViewRoundedIcon style={{ color: "white", fontSize: 18 }} />
        </IconButton>
      </div>
    </HeaderCenterWrapper>
  );
}

export default HeaderCenter;
