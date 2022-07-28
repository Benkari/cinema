import React, { useEffect, useRef } from "react";
import SingleLargeCard from "../SingleLargeCard/SingleLargeCard";
import { TrendListContainer } from "./TrendListStyle";

function TrendList({ results, trendingListRef }) {
  return (
    <TrendListContainer className="Trend_List" ref={trendingListRef}>
      {results.map((eachMovie, index) => (
        <div key={eachMovie.id} style={{ paddingLeft: index === 0 ? 10 : 0 }}>
          <SingleLargeCard movie={eachMovie} />
        </div>
      ))}
    </TrendListContainer>
  );
}

export default TrendList;
