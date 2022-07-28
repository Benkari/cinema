import Image from "next/image";
import React from "react";
import {
  MiniPlayerPlayButton,
  MiniPlayerCard,
  MiniPlayerLowerContent,
  SmallTimeText,
} from "./MiniPlayerStyle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Slider, Typography } from "@mui/material";
import PlayerSlider from "../PlayerSlider/PlayerSlider";

function MiniPlayer() {
  return (
    <MiniPlayerCard>
      <Image
        priority
        src="http://www.tasteofcinema.com/wp-content/uploads/2018/02/La-La-Land-04-1_.jpg"
        layout="fill"
        objectFit="cover"
        alt="miniplayer"
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
      <MiniPlayerLowerContent style={{ position: "absolute" }}>
        <div>
          <Typography
            variant="h5"
            style={{ fontSize: 18, fontWeight: 600, color: "white" }}
          >
            LA LA Land
          </Typography>
          <Typography
            style={{ fontSize: 14, fontWeight: 300, color: "white" }}
            variant="h6"
          >
            2021
          </Typography>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <SmallTimeText variant="span">43:31</SmallTimeText>
            <PlayerSlider />
            <SmallTimeText variant="span">1:20:8</SmallTimeText>
          </div>
        </div>
      </MiniPlayerLowerContent>
      <div>
        <MiniPlayerPlayButton>
          <PlayArrowIcon style={{ color: "white" }} />
        </MiniPlayerPlayButton>
      </div>
    </MiniPlayerCard>
  );
}

export default MiniPlayer;
