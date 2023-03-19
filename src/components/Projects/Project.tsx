"use client";

import sapLogo from "@/assets/logos/SAP.svg";
import butopeaLogo from "@/assets/logos/BUTOPEA.png";
import inssLogo from "@/assets/logos/INSS.svg";
import sesauLogo from "@/assets/logos/SESAU.png";

interface ProjectProps {
  projectNumber: string;
  projectName: string;
  githubLink?: string;
  websiteLink?: string;
  description: string;
  technologies: string[];
  iconMobile?: string;
  iconDesktop?: string;
  bgColor: string;
  primaryProjectColor: string;
  secondaryProjectColor: string;
  tertiaryProjectColor: string;
}

const gradients = {
  1: "bg-gradient-project-1",
  2: "bg-gradient-project-2",
  3: "bg-gradient-project-3",
};

export function Project(props: { project: ProjectProps }) {
  const project = props.project;

  let gradientClasses = gradients[project.gradient];

  return (
    <div
      style={{
        backgroundColor: project.bgColor,
      }}
      className={"w-98 rounded-lg shadow-lg mx-2"}
    >
      <h1
        className={`my-3 text-4xl font-bold text-transparent bg-clip-text bg-[length:400%_400%]  animate-textGradient ${gradientClasses}`}
      >
        {project.projectNumber}
        <br />
        {project.projectName}
      </h1>
    </div>
  );
}
