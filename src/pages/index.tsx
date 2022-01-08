import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
          <div className="pt-5">
            <h1 className="font-mono text-3xl pb-5 font-bold">Hi, I&apos;m Norbert Istvan Cseh.</h1>
            <h3 className="font-mono text-m pb-3">
              Software developer engineer in Test at{" "}
              <a className="text-emerald-500"
                href="https://www.logmein.com/"
                target="_blank"
                rel="noreferrer"
              >
                LogMeIn
              </a>
            </h3>
            <p className="font-mono text-s italic">Slowly figuring out web development.</p>
            <p className="font-mono text-s italic">
              You can find my personal GitHub profile{" "}
              <a
                className="text-emerald-500"
                href="https://github.com/NorbertCseh"
                target="_blank"
                rel="noreferrer"
              >
                here.
              </a>
            </p>
            <p className="font-mono test-s italic">
              My cv can be found <Link href="/cv"><a className="text-emerald-500">here</a></Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
