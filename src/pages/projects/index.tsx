import NextPage from "next";
import Link from "next/link";
import Project from "../../components/project";

const Projects = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Project
        title="Sorting visualize"
        link="sorting"
        description="Visualize sorting algorithms"
      />
    </section>
  );
};

export default Projects;
