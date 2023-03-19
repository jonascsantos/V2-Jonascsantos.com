import { Title } from "./Title";
import { Project } from "./Project";

import project1Mobile from "@/assets/projects/project1-mobile.png";
import project2Mobile from "@/assets/projects/project2-mobile.png";
import project3Mobile from "@/assets/projects/project3-mobile.png";
import project1Desktop from "@/assets/projects/project1-desktop.png";
import project2Desktop from "@/assets/projects/project2-desktop.png";
import project3Desktop from "@/assets/projects/project3-desktop.png";

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
      iconMobile: project1Mobile.src,
      iconDesktop: project1Desktop.src,
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
      iconMobile: project2Mobile.src,
      iconDesktop: project2Desktop.src,
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
      iconMobile: project3Mobile.src,
      iconDesktop: project3Desktop.src,
      bgColor: "#EFFFFD",
      primaryProjectColor: "#00C7AE",
      secondaryProjectColor: "#02E9CB",
      tertiaryProjectColor: "#67F3B7",
      gradient: 3,
    },
  ];

  return (
    <section data-section="Work">
      <div className="w-full pt-5 pb-10 bg-cloudy-white">
        <Title />
        {projectsObj.map((item, index) => (
          <Project key={index} project={item} />
        ))}
      </div>
    </section>
  );
}
