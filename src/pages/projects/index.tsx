import NextPage from "next";
import Link from "next/link";
import Head from "next/head";
import Project from "../../components/project";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <section className="w-full h-screen flex justify-center items-center">
        <Project
          title="Sorting visualize"
          link="sorting"
          description="Visualize sorting algorithms"
        />
      </section>
    </>
  );
};

export default Projects;
