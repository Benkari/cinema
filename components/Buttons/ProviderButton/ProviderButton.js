import Image from "next/image";
import React from "react";
import {
  ActiveRedLine,
  IconWrapper,
  ProviderButtonWrapper,
} from "./ProviderButtonStyle";

function ProviderButton({ bgColor, iconImage, active }) {
  return (
    <ProviderButtonWrapper>
      <div style={{ flex: 1 }}>{active && <ActiveRedLine />}</div>
      <div
        style={{
          display: "flex",
          flex: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconWrapper
          style={{ backgroundColor: bgColor, width: 50, height: 50 }}
        >
          <Image
            src={iconImage}
            objectFit="contain"
            width={30}
            height={30}
            alt="icon"
          />
        </IconWrapper>
      </div>
    </ProviderButtonWrapper>
  );
}

export default ProviderButton;
