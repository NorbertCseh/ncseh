import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NorbertCseh</title>
      </Head>
      <section
        className="flex m-auto text-center h-screen sm:flex sm:text-left"
        id="home"
      >
        <div className="m-auto">
          <h1 className="font-mono text-5xl pb-5 font-bold">
            Hi, I&apos;m Norbert Istvan Cseh.
          </h1>
          <h3 className="font-mono text-2xl pb-3">
            Software developer engineer in Test at{" "}
            <a
              className="text-emerald-500"
              href="https://www.logmein.com/"
              target="_blank"
              rel="noreferrer"
            >
              LogMeIn
            </a>
          </h3>
          <p className="font-mono text-xl italic">
            Slowly figuring out web development.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
