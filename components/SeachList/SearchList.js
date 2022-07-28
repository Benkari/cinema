import React, { useEffect, useRef } from "react";
import SingleMediumCard from "../SingleMediumCard/SingleMediumCard";
import { SearchListContainer } from "./SearchListStyle";

function SearchList({ results, searchListRef }) {
  // const elRef = useRef();
  // useEffect(() => {
  //   const el = elRef.current;
  //   if (el) {
  //     const onWheel = (e) => {
  //       if (e.deltaY == 0) return;
  //       e.preventDefault();
  //       el.scrollTo({
  //         left: el.scrollLeft + e.deltaY,
  //         //   behavior: "smooth",
  //       });
  //     };
  //     el.addEventListener("wheel", onWheel);
  //     return () => el.removeEventListener("wheel", onWheel);
  //   }
  // }, []);
  return (
    <SearchListContainer className="Trend_List" ref={searchListRef}>
      {results.map((eachMovie, index) => (
        <div style={{ paddingLeft: index === 0 ? 10 : 0 }}>
          <SingleMediumCard key={eachMovie.id} movie={eachMovie} />
        </div>
      ))}
    </SearchListContainer>
  );
}

export default SearchList;
