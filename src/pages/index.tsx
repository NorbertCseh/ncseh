import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "../sections/about";
import { HomeSection } from "../sections/home";
import { Navbar } from "../sections/navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NorbertCseh</title>
        <meta
          name="description"
          content="Norbert Istvan Cseh personal website created with Nextjs"
        />
        <link rel="icon" href="/me.jpg" />
      </Head>

      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Home;
