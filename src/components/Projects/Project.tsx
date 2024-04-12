"use client";

import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export interface ProjectProps {
  projectNumber: string;
  projectName: string;
  githubLink?: string;
  websiteLink?: string;
  description: string;
  technologies: string[];
  image: string;
  bgColor: string;
  primaryProjectColor: string;
  secondaryProjectColor: string;
  tertiaryProjectColor: string;
  gradient: number;
}

type Gradients = {
  [key: number]: string;
};

const gradients: Gradients = {
  1: "bg-gradient-project-1",
  2: "bg-gradient-project-2",
  3: "bg-gradient-project-3",
  4: "bg-gradient-project-4",
};

export function Project(props: { project: ProjectProps }) {
  const project = props.project;
  const control = useAnimation()
  const [ref, inView] = useInView()

  const opacityVariant = {
    visible: { opacity: 1, transition:{ delay: 0.1, duration: 0.5}},
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
  let gradientClasses = gradients[project.gradient];

  const smallScreen = useMediaQuery("(max-width:600px)");

  return (
    <motion.div 
      ref={ref}
      variants={opacityVariant}
      initial="hidden"
      animate={control}
    >
      <div
        style={{
          backgroundColor: project.bgColor,
        }}
        className={
          "w-98 h-full relative rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] transition-all hover:drop-shadow-lg duration-500 hover:scale-105 hover:shadow-xl px-5 pt-5 pb-12 flex flex-col gap-3 overflow-hidden"
        }
      >
        <h1
          className={`my-3 text-4xl md:text-3xl font-bold text-transparent bg-clip-text bg-[length:400%_400%]  animate-textGradient ${gradientClasses}`}
        >
          {project.projectNumber}
          <br />
          {project.projectName}
        </h1>
        <div
          className={"relative w-full overflow-hidden rounded-3xl shadow-lg"}
          style={{ aspectRatio: 1.236 }}
        >
          <Image
            style={{ objectFit: "contain" }}
            src={project.image}
            fill={true}
            alt={`${project.projectName} Image`}
          />
        </div>
        <div>
          <p className={`my-3 text-sm font-medium`}>{project.description}</p>
        </div>

        <div className={"flex flex-wrap gap-2"}>
          {project.technologies.map((item, index) => (
            <div
              key={"Tech-" + index} 
              style={{
                backgroundColor: project.primaryProjectColor,
                color: project.bgColor,
              }}
              className={
                "flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 "
              }
            >
              {item}
            </div>
          ))}
        </div>
        <div className={`flex flex-1 w-full mt-5 justify-between items-end`}>
          <div className={`flex w-100 font-medium text-sm `}>
            {project.websiteLink && (
              <a rel="noopener" target="_blank" href={project.websiteLink}>
                <span className={`px-4`}>Visit Website </span>{" "}
                <span
                  className={`flex w-100 h-1 mt-2 rounded-lg bg-[length:400%_400%] animate-textGradient ${gradientClasses}`}
                />
              </a>
            )}
          </div>
          {project.githubLink && 
            <div>
              <a
                rel="noopener"
                target="_blank"
                href={project.githubLink}
              >
                <Image width="32" height="32" src="images/logo-github.svg" alt="github icon" />
              </a>
            </div>
          }
        </div>
      </div>
    </motion.div>
  );
}
