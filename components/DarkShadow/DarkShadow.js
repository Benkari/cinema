import React from "react";

function DarkShadow() {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: 20,
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.14049369747899154) 0%, rgba(0,0,0,0.48503151260504207) 36%, rgba(0,0,0,1) 90%)",
        top: 0,
        right: 0,
        zIndex: 99,
      }}
    />
  );
}

export default DarkShadow;
