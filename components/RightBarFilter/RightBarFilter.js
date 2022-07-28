import React from "react";
import {
  RightBarTopUser,
  RightBarWrapper,
  RightFilterWrapper,
} from "./RightBarFilterStyle";
import SteveJobs from "../../assets/images/SteveJobs.png";
import { Avatar, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import CustomSerachInput from "../CustomSerachInput/CustomSerachInput";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { useRouter } from "next/router";
import genres from "../../utils/requests.js";

function RightBarFilter() {
  const router = useRouter();
  const [selectedGenres, setSelectedGenres] = React.useState("Action");
  const handleClickGenre = (key, genre) => {
    setSelectedGenres(genre);
    router.push(`/?genre=${key}`);
  };

  return (
    <RightBarWrapper>
      <RightBarTopUser>
        <Avatar alt="EliteNoob">
          <Image src={SteveJobs} objectFit="cover" layout="fill" />
        </Avatar>
        <div style={{ flex: 1 }}>
          <Typography
            variant="h5"
            style={{ fontSize: 18, fontWeight: 500, color: "white" }}
          >
            EliteNoob
          </Typography>
          <Typography
            variant="h6"
            style={{ fontSize: 10, fontWeight: 500, color: "gray" }}
          >
            Benjamin.Karimei@icloud.com
          </Typography>
        </div>
        <IconButton>
          <ExpandMoreRoundedIcon style={{ color: "white" }} />
        </IconButton>
      </RightBarTopUser>
      <div>
        <CustomSerachInput />
      </div>
      <div style={{ padding: 20, width: "100%" }}>
        <Typography variant="span" style={{ fontSize: 12, color: "gray" }}>
          GENRE
        </Typography>
        <RightFilterWrapper style={{ marginTop: 20 }}>
          {Object.entries(genres).map(([key, { title, url }]) => (
            <CustomCheckbox
              key={title}
              title={title}
              onClick={() => handleClickGenre(key, title)}
              active={selectedGenres === title}
            />
          ))}
        </RightFilterWrapper>
      </div>
    </RightBarWrapper>
  );
}

export default RightBarFilter;
