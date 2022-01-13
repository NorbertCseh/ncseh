import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AboutSection from "../sections/about";
import ContactSection from "../sections/contact";
import ExperienceSection from "../sections/experience";
import HomeSection from "../sections/home";
import Navbar from "../sections/navigation";

const Home: NextPage = () => {

  const [color, setColor] = useState('dark')

  return (
    <div className={color}>
      <div className="p-0 m-0 bg-indigo-50 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        <Head>
          <title>NorbertCseh</title>
          <meta
            name="description"
            content="Norbert Istvan Cseh personal website created with Nextjs"
          />
          <link rel="icon" href="/me.jpg" />
        </Head>

        <Navbar color={color} setColor={setColor} />
        <main>
          <HomeSection />
          <AboutSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default Home;
