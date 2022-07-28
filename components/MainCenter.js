import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import SearchList from "./SeachList/SearchList";
import TrendList from "./TrendList/TrendList";
import ContinueList from "./ContinueList/ContinueList";
import DarkShadow from "./DarkShadow/DarkShadow";
import Scrollable from "./Scrollable/Scrollable";
import RightDrawer from "./RightDrawer/RightDrawer";

export const RightDrawerWrapper = styled.div`
  display: none;
  @media (max-width: 1080px) {
    display: block;
  }
`;

function MainCenter({ trending, search }) {
  const searchListRef = React.useRef();
  const trendingListRef = React.useRef();

  return (
    <div
      className="main_center_body"
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        gap: 10,
        backgroundColor: "#0b0809",
        overflow: "auto",
      }}
    >
      <HeaderCenter />
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            style={{
              fontSize: 16,
              fontWeight: 50,
              color: "white",
            }}
          >
            Search Result
          </Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              variant="text"
              endIcon={<ArrowForwardIosRoundedIcon />}
              style={{ color: "gray", textTransform: "none" }}
            >
              See All
            </Button>
            <RightDrawerWrapper>
              <RightDrawer />
            </RightDrawerWrapper>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Scrollable searchListRef={searchListRef}>
            <DarkShadow />
            <SearchList results={search} searchListRef={searchListRef} />
          </Scrollable>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            style={{
              fontSize: 16,
              fontWeight: 50,
              color: "white",
            }}
          >
            Trending Movies
          </Typography>
          <Button
            variant="text"
            endIcon={<ArrowForwardIosRoundedIcon />}
            style={{ color: "gray", textTransform: "none" }}
          >
            See All
          </Button>
        </div>
        <div style={{ position: "relative" }}>
          <Scrollable searchListRef={trendingListRef}>
            <DarkShadow />
            <TrendList results={trending} trendingListRef={trendingListRef} />
          </Scrollable>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            style={{
              fontSize: 16,
              fontWeight: 50,
              color: "white",
            }}
          >
            Continue Watching
          </Typography>
          <Button
            variant="text"
            endIcon={<ArrowForwardIosRoundedIcon />}
            style={{ color: "gray", textTransform: "none" }}
          >
            See All
          </Button>
        </div>
        <ContinueList />
      </div>
    </div>
  );
}

export default MainCenter;
