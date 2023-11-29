import { Title } from "./Title";
import { Project, ProjectProps } from "./Project";

import project1 from "@/assets/projects/project1.png";
import project2 from "@/assets/projects/project2.png";
import project3 from "@/assets/projects/project3.png";

export function Projects() {
  const projectsObj = [
    {
      projectNumber: "01.",
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
      image: project1.src,
      bgColor: "#E4F2FF",
      primaryProjectColor: "#1D4ED8",
      secondaryProjectColor: "#148BFF",
      tertiaryProjectColor: "#3E5DFF",
      gradient: 1,
    },
    {
      projectNumber: "02.",
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
      image: project2.src,
      bgColor: "#F2FFF5",
      primaryProjectColor: "#46B24A",
      secondaryProjectColor: "#95AF4C",
      tertiaryProjectColor: "#DF5E4A",
      gradient: 2,
    },
    {
      projectNumber: "03.",
      projectName: "Universal ClipSync (In progress)",
      githubLink: "https://github.com/jonascsantos/UniversalClipSyncAPP",
      websiteLink: "",
      description:
        "An awesome app that easily syncs your clipboard with any connected device!",
      technologies: [
        "Adobe XD",
        "React Native",
        "ASP.NET",
        "MongoDB",
        "Express.JS",
        "Node.JS",
      ],
      image: project3.src,
      bgColor: "#EFFFFD",
      primaryProjectColor: "#00C7AE",
      secondaryProjectColor: "#02E9CB",
      tertiaryProjectColor: "#67F3B7",
      gradient: 3,
    },
  ] as ProjectProps[];

  return (
    <section data-section="Work">
      <div className="flex flex-col gap-5 w-full pt-10 px-3 pb-24  bg-cloudy-white">
        <Title />
        <div className="flex flex-col gap-16" >
          {projectsObj.map((item, index) => (
            <Project key={item.projectName + "-" + index} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
