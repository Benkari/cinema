import { Divider, Typography } from "@mui/material";
import React from "react";
import { LeftMenusWrapper } from "./LeftMenusStyle";
import MenuButton from "../Buttons/MenuButton/MenuButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function LeftMenus() {
  return (
    <LeftMenusWrapper className="Left_Menu_Container">
      <Typography style={{ color: "gray", paddingLeft: 20, fontSize: 12 }}>
        MENU
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <MenuButton title={"Home"} Icon={HomeRoundedIcon} active />
          <MenuButton title={"Discovery"} Icon={ExploreOutlinedIcon} />
          <MenuButton title={"Community"} Icon={GroupsOutlinedIcon} />
          <MenuButton title={"Coming soon"} Icon={TimerOutlinedIcon} />
          <Divider
            style={{
              borderColor: "#363636",
              borderWidth: 1,
              marginBottom: 20,
              marginTop: 20,
            }}
            variant="middle"
          />
          <Typography style={{ color: "gray", paddingLeft: 20, fontSize: 12 }}>
            LIBRARY
          </Typography>
          <MenuButton title={"Recent"} Icon={AccessTimeOutlinedIcon} />
          <MenuButton title={"Bookmarked"} Icon={BookmarkBorderOutlinedIcon} />
          <MenuButton title={"Top rated"} Icon={StarOutlineOutlinedIcon} />
          <MenuButton title={"Downloaded"} Icon={FileDownloadOutlinedIcon} />
          <Divider
            style={{
              borderColor: "#363636",
              borderWidth: 1,
              marginBottom: 20,
              marginTop: 20,
            }}
            variant="middle"
          />
          <MenuButton title={"Settings"} Icon={SettingsSuggestOutlinedIcon} />
          <MenuButton title={"Help"} Icon={InfoOutlinedIcon} />
        </div>
        <div style={{ marginTop: 80 }}>
          <MenuButton title={"Log out"} Icon={LogoutOutlinedIcon} />
        </div>
      </div>
    </LeftMenusWrapper>
  );
}

export default LeftMenus;
