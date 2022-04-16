// import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

const Home = ({ results }) => {
  return (
    <>
      <Head>
        <title>Hulu Clone</title>
        <meta
          name="description"
          content="This is a Hulu Clone Created by Ayush"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar />
      {/* Movies */}
      <Results results={results} />
    </>
  );
};

export default Home;

// This tells next js this page gets server side rendered
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requestMovie = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: requestMovie.results,
    },
  };
}
