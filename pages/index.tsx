import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
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
    </>
  );
};

export default Home;
