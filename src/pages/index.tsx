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
    <div className="p-0 m-0 bg-indigo-900 text-indigo-200">
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
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
