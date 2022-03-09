import Footer from "components/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div  className=" flex flex-col h-screen justify-between">
      <Head>
        <title>Burn NFT UI</title>
        <meta
          name="description"
          content="Burn your Solana NFT and earn SOL"
        />
      </Head>
      <GalleryView />
      <Footer/>
    </div>
  );
};

export default Home;
