import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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

      <main className="flex w-full h-screen">
        <div className="flex h-fit m-auto">
          <div className="mr-5">
            <Image
              src="/me.jpg"
              alt="Norbert Cseh in sleep"
              className="rounded-full"
              width={200}
              height={200}
            />
          </div>
          <div className="m-auto">
            <h1 className="font-mono text-2xl pb-5 font-bold">Hi, I&apos;m Norbert Istvan Cseh.</h1>
            <h3 className="font-mono text-s pb-3">
              Software developer engineer in Test at{" "}
              <a className="text-emerald-500"
                href="https://www.logmein.com/"
                target="_blank"
                rel="noreferrer"
              >
                LogMeIn
              </a>
            </h3>
            <p className="font-mono text-xs italic">Slowly figuring out web development.</p>
            <p className="font-mono text-xs italic">
              You can find my personal GitHub profile{" "}
              <a
                className="text-emerald-500"
                href="https://github.com/NorbertCseh"
                target="_blank"
                rel="noreferrer"
              >
                Here.
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
