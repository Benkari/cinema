import React, { useEffect, useRef } from "react";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import { ContinueListContainer } from "./ContinueListStyle";

function ContinueList() {
  return (
    <ContinueListContainer className="Trend_List">
      <MiniPlayer />
    </ContinueListContainer>
  );
}

export default ContinueList;
