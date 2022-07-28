import React, { useEffect, useRef } from "react";
import SingleMediumCard from "../SingleMediumCard/SingleMediumCard";
import { SearchListContainer } from "./SearchListStyle";

function SearchList({ results, searchListRef }) {
  return (
    <SearchListContainer className="Trend_List" ref={searchListRef}>
      {results.map((eachMovie, index) => (
        <div key={eachMovie.id} style={{ paddingLeft: index === 0 ? 10 : 0 }}>
          <SingleMediumCard movie={eachMovie} />
        </div>
      ))}
    </SearchListContainer>
  );
}

export default SearchList;
