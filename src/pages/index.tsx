import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "../sections/about";
import ContactSection from "../sections/contact";
import ExperienceSection from "../sections/experience";
import HomeSection from "../sections/home";
import Navbar from "../sections/navigation";
import ProjectsSection from "../sections/projects";

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
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
