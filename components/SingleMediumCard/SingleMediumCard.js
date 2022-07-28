import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  LowerContentWrapper,
  MediumCard,
  MediumRateWrapper,
} from "./SingleMediumCardStyle";
import RedRoundedButton from "../Buttons/RedRoundedButton/RedRoundedButton";
import CrystalRoundedButton from "../Buttons/CrystalRoundedButton/CrystalRoundedButton";
import StarIcon from "@mui/icons-material/Star";

function SingleMediumCard({ movie }) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <MediumCard>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 999,
          padding: 20,
        }}
      >
        <MediumRateWrapper>
          <StarIcon style={{ color: "yellow", fontSize: 22 }} />
          <Typography style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
            7.9
          </Typography>
        </MediumRateWrapper>
      </div>
      <Image
        priority
        layout="fill"
        src={`${BASE_IMG_URL}${movie.backdrop_path || movie.poster_path}`}
        objectFit="cover"
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
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: 600,
            marginBottom: 5,
          }}
        >
          {movie?.name || movie?.original_title || movie?.title}
        </Typography>
        <Typography
          variant="h5"
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: 400,
            marginBottom: 5,
          }}
        >
          {movie.release_date ? String(movie.release_date).slice(0, 4) : "2022"}
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
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 20,
            }}
          >
            <RedRoundedButton />
            <CrystalRoundedButton />
          </div>
        </div>
      </LowerContentWrapper>
    </MediumCard>
  );
}

export default SingleMediumCard;
