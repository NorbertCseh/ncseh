import Link from "next/link";

type projectProps = {
  link: string;
  title: string;
  description: string;
};

const Project = (props: projectProps) => {
  return (
    <div className="flex-col w-1/5 h-1/5 border-2 border-indigo-500 rounded-lg p-4">
      <div className="mb-4">
        <Link href={"/projects/" + props.link}>
          <a className="text-lg">{props.title}</a>
        </Link>
      </div>
      <div className="text-justify text-sm">{props.description}</div>
    </div>
  );
};

export default Project;
