import React from "react";
import { LeftProviderWrapper } from "./LeftProviderChoiceStyle";
import ProviderButton from "../Buttons/ProviderButton/ProviderButton";

import NetflixIcon from "../../assets/images/NetflixIcon.png";
import HuluIcon from "../../assets/images/HuluIcon.png";
import AppleTvPlusIcon from "../../assets/images/AppleTvPlusIcon.png";

function LeftProviderChoice() {
  return (
    <LeftProviderWrapper>
      <ProviderButton bgColor="red" iconImage={NetflixIcon} active={true} />
      <ProviderButton bgColor="#45bb44" iconImage={HuluIcon} />
      <ProviderButton bgColor="#333333" iconImage={AppleTvPlusIcon} />
    </LeftProviderWrapper>
  );
}

export default LeftProviderChoice;
