import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { IconButton } from "@mui/material";
import RightBarFilter from "../RightBarFilter/RightBarFilter";

export default function RightDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key={"right"}>
        <IconButton onClick={toggleDrawer("right", true)}>
          <FilterAltOutlinedIcon style={{ color: "white" }} />
        </IconButton>

        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <div style={{ maxWidth: 300 }}>
            <RightBarFilter />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
