import { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <section className="w-full flex justify-center text-3xl h-screen items-center">
        This is not the page are you looking for.
      </section>
    </>
  );
};

export default Custom404;
