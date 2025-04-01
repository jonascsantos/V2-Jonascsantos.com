import { Title } from "./Title";
import { Project, ProjectProps } from "./Project";

import brim from "@/assets/projects/brim.png";
import project1 from "@/assets/projects/project1.png";
import project2 from "@/assets/projects/project2.png";
import project3 from "@/assets/projects/project3.png";
import project4 from "@/assets/projects/project4.png";
import project5 from "@/assets/projects/project5.png";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Projects() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const opacityVariant = {
    visible: { opacity: 1, transition:{ delay: 0.2, duration: 0.5}},
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  const projectsObj = [
    {
      projectNumber: "01.",
      projectName: "Brim | Custom AI Solutions",
      websiteLink: "https://joinbrim.ai",
      description:
        "Custom AI agents designed to automate routine, time-consuming tasks, allowing teams to focus on high-impact work.",
      technologies: [
        "React",
        "Next.JS",
        "Python",
        "Generative AI",
        "LangGraph",
        "TypeScript",
        "Tailwind",
        "Node.JS",
        "GraphQL",
        "Zustand",
        "AWS",
        "Github Actions",
      ],
      image: brim.src,
      bgColor: "#d8e9e7",
      primaryProjectColor: "#1B5855",
      secondaryProjectColor: "#1B5855",
      tertiaryProjectColor: "#1B5855",
      gradient: 6,
    },
    {
      projectNumber: "02.",
      projectName: "That's The Ticket - Australia",
      websiteLink: "https://v2.thatstheticket.com.au/audience",
      description:
        "Live television audience coordination software utilized by thousands of people Australia-wide. I have orchestrated the UI refactoring of the application (MUI Custom theming)",
      technologies: [
        "React",
        "Next.JS",
        "MUI",
        "MUI Styled",
        "TypeScript",
        "Storybook",
        "ASP.NET Core",
        "Cypress",
        "Azure",
        "HTML",
        "CSS",
        "MSSQL",
      ],
      image: project1.src,
      bgColor: "#efefff",
      primaryProjectColor: "#070707",
      secondaryProjectColor: "#569BFF",
      tertiaryProjectColor: "#50F000",
      gradient: 4,
    },
    {
      projectNumber: "03.",
      projectName: "McArthurGlen Designer Outlets",
      websiteLink: "https://play.google.com/store/apps/details?id=com.mcarthurglen.a1&hl=en_US&pli=1",
      description:
        "McArthurGlen is Europe's leader in designer outlet shopping, with 25 locations in 8 countries. I've worked on implementing new features, fixing bugs, and releasing updates for their Expo React-Native app on both the Google Play Store and the App Store.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "ASP.NET Core",
        "Apple TestFlight",
        "Google Play Console",
        "Salesforce",
        "MSSQL",
      ],
      image: project5.src,
      bgColor: "#e6e5ff",
      primaryProjectColor: "#3e3a93",
      secondaryProjectColor: "#232052",
      tertiaryProjectColor: "#27245c",
      gradient: 5,
    },
    {
      projectNumber: "04.",
      projectName: "Simple Weather Forecast",
      githubLink: "https://github.com/jonascsantos/WeatherForecastApp",
      websiteLink: "https://weather.jonascsantos.com",
      description:
        "Simple Weather App made with React Native and ASP.NET. The forecast and location coordinates are being fetched using Open Meteo API.",
      technologies: [
        "React Native",
        "Styled Components",
        "TypeScript",
        "ASP.NET",
        "Docker",
        "C#",
        "OpenMeteoAPI",
        "NativeBase",
        "Expo",
      ],
      image: project2.src,
      bgColor: "#E4F2FF",
      primaryProjectColor: "#1D4ED8",
      secondaryProjectColor: "#148BFF",
      tertiaryProjectColor: "#3E5DFF",
      gradient: 1,
    },
    {
      projectNumber: "05.",
      projectName: "Indoor Positioning System",
      githubLink: "https://github.com/jonascsantos/IndoorPositioningAPP",
      websiteLink: "https://indoor.jonascsantos.com",
      description:
        "The system uses the strength of the nearby WiFi networks to generate a machine learning model that can determine in which room the user/device is located.",
      technologies: [
        "Vue.JS",
        "Microsoft Azure",
        "Python",
        "Firebase",
        "FastAPI",
        "Docker",
        "NodeMCU",
        "GitHub Actions",
      ],
      image: project3.src,
      bgColor: "#F2FFF5",
      primaryProjectColor: "#46B24A",
      secondaryProjectColor: "#95AF4C",
      tertiaryProjectColor: "#DF5E4A",
      gradient: 2,
    },
    {
      projectNumber: "06.",
      projectName: "Universal ClipSync (UI/UX)",
      githubLink: "https://github.com/jonascsantos/UniversalClipSyncAPP",
      websiteLink: "",
      description:
        "An awesome app that easily syncs your clipboard with any connected device!",
      technologies: [
        "Adobe XD",
        "React Native",
      ],
      image: project4.src,
      bgColor: "#EFFFFD",
      primaryProjectColor : "#00C7AE",
      secondaryProjectColor: "#02E9CB",
      tertiaryProjectColor: "#67F3B7",
      gradient: 3,
    },
  ] as ProjectProps[];

  return (
    <motion.div 
      ref={ref}
      variants={opacityVariant}
      initial="hidden"
      animate={control}
    >
      <section id="Projects">
        <div className="flex flex-col gap-5 md:gap-8 w-full pt-10 px-5 sm:pr-10 sm:pl-10 sm:pt-12 md:pt-24 lg:pl-24 lg:pr-24 pb-12 bg-cloudy-white">
          <Title />
          <div className="flex flex-col gap-16 md:gap-10 md:grid md:grid-cols-2 justify-center" >
            {projectsObj.map((item, index) => (
              <Project key={item.projectName + "-" + index} project={item} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
