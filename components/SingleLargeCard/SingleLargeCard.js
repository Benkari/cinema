import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { LargeCard, LowerContentWrapper } from "./SingleLargeCardStyle";
import IMDBLogo from "../../assets/images/IMDBLogo.png";
import RedRoundedButton from "../Buttons/RedRoundedButton/RedRoundedButton";
import CrystalRoundedButton from "../Buttons/CrystalRoundedButton/CrystalRoundedButton";

function SingleLargeCard({ movie }) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <LargeCard>
      <Image
        priority
        layout="fill"
        src={`${BASE_IMG_URL}${movie.backdrop_path || movie.poster_path}`}
        objectFit="cover"
        alt="largeImg"
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
      <LowerContentWrapper>
        <Typography
          variant="h3"
          style={{ color: "white", fontSize: 22, fontWeight: 600 }}
        >
          {movie?.name || movie?.original_title || movie?.title}
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography
              variant="h5"
              style={{ color: "white", fontSize: 16, fontWeight: 400 }}
            >
              {movie.release_date
                ? String(movie.release_date).slice(0, 4)
                : "2022"}
            </Typography>
            <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Image
                src={IMDBLogo}
                width={40}
                height={10}
                objectFit="contain"
                alt="imdb"
              />
              <Typography
                style={{ color: "white", fontSize: 14, fontWeight: 400 }}
              >
                {movie.vote_average ? movie.vote_average : 7.9}
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <RedRoundedButton />
            <CrystalRoundedButton />
          </div>
        </div>
      </LowerContentWrapper>
    </LargeCard>
  );
}

export default SingleLargeCard;
