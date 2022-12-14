import Head from "next/head";
import LeftBar from "../components/LeftMenuBar/LeftBar";
import styles from "../styles/Home.module.css";
import RightBarFilter from "../components/RightBarFilter/RightBarFilter";
import requests from "../utils/requests";
import MainCenter from "../components/MainCenter";
import styled from "@emotion/styled";

export default function Home({ trending, search }) {
  return (
    <div>
      <Head>
        <title>Cinema</title>
        <meta name="description" content="Let's Watch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LeftWrapepr>
          <LeftBar />
        </LeftWrapepr>
        <div style={{ flex: 6, minWidth: 1 }}>
          <MainCenter search={search} trending={trending} />
        </div>
        <RightWrapepr style={{ flex: 2.5, maxWidth: 300 }}>
          <RightBarFilter />
        </RightWrapepr>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getServerSideProps(contex) {
  const genre = contex.query.genre;

  const trendingRequest = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTrending.url}`
  ).then((res) => res.json());

  const serachRequest = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchAction.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      trending: trendingRequest.results,
      search: serachRequest.results,
    },
  };
}

export const LeftWrapepr = styled.div`
  flex: 2;
  height: 100vh;
  max-width: 300px;
  position: sticky;
  top: 0;
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const RightWrapepr = styled.div`
  flex: 2;
  height: 100vh;
  max-width: 300;
  position: sticky;
  top: 0;
  @media (max-width: 1080px) {
    display: none;
  }
`;
