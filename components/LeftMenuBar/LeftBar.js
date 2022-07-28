import React from "react";
import { LeftBarWrapper } from "./LeftBarStyle";
import LeftMenus from "./LeftMenus";
import LeftProviderChoice from "./LeftProviderChoice";

function LeftBar() {
  return (
    <LeftBarWrapper>
      <LeftProviderChoice />
      <LeftMenus />
    </LeftBarWrapper>
  );
}

export default LeftBar;
