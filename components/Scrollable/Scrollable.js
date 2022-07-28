import React from "react";
import { LeftArrow, RightArrow, ScrollableWrapper } from "./ScrollableStyle";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Scrollable(props) {
  const elRef = props.searchListRef;

  const scrollToRight = () => {
    const el = elRef.current;
    if (el) {
      el.scrollTo({
        left: el.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };

  const scrollToLeft = () => {
    const el = elRef.current;
    if (el) {
      el.scrollTo({
        left: el.scrollLeft - 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollableWrapper>
      {props.children}
      <LeftArrow className="hoverOver">
        <Button
          style={{
            width: "100%",
            color: "white",
            minWidth: 30,
            height: "100%",
          }}
          onClick={() => scrollToLeft()}
        >
          <ArrowBackIosIcon
            className="hoveredIcon"
            style={{ color: "white", fontSize: 18 }}
          />
        </Button>
      </LeftArrow>
      <RightArrow className="hoverOver">
        <Button
          style={{
            height: "100%",
            color: "white",
            minWidth: 30,
          }}
          onClick={() => scrollToRight()}
        >
          <ArrowForwardIosIcon
            className="hoveredIcon"
            style={{ color: "white", fontSize: 16 }}
          />
        </Button>
      </RightArrow>
    </ScrollableWrapper>
  );
}

export default Scrollable;
