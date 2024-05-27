"use client";

import * as React from "react";
import TabsMui from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";

import fcLogo from "@/assets/logos/FC.svg";
import sapLogo from "@/assets/logos/SAP.svg";
import butopeaLogo from "@/assets/logos/BUTOPEA.png";
import inssLogo from "@/assets/logos/INSS.svg";
import sesauLogo from "@/assets/logos/SESAU.png";

export function Tabs() {
  const tabRef = React.useRef<HTMLDivElement>(null)
  const [tabHeight, setTabHeight] = React.useState(0);
  React.useEffect(() => {
    if(tabRef.current)
      setTabHeight(tabRef.current.clientHeight)
  }, [tabRef]);

  const workExperiences = [
    {
      companyName: "FreshConstruct",
      jobTitle: "Full-Stack Developer",
      startDate: "Mar 2023",
      endDate: "Present",
      icon: fcLogo.src,
      bulletPoints: [
        "Orchestrated UI refactoring of audience coordination software, utilized by thousands accross Australia. This software efficiently handles bookings for television shows. Visit: https://v2.thatstheticket.com.au/audience",
        "Introduced isolated React components implementation with Storybook",
        "Developed innovative landing pages and UI features using React, React Native, Next.JS, MUI, Expo, Webflow, TypeScript, and JavaScript.",
        "Mentored apprentices to nurture their professional growth.",
        "Deployed projects on Azure, and successfully submitted applications to the App Store and Google Play Store.",
        "Managed REST API .NET endpoints and MSSQL databases.",
        "Ensured robust quality through Cypress testing for comprehensive QA.",
        "Designed user-friendly interfaces and prototypes using Figma.",
        "Conducted A/B testing and analytics with VWO, Google Analytics, and Google Tag Manager.",
        "Efficiently managed content with Umbraco and Episerver CMS.",
        "Successfully delivered HTML Email templates and PDFs (.NET).",
      ],
      technologies: ["React", "React Native", "Next.JS", "MUI", "Webflow", "TypeScript", "JavaScript", "Figma"],
    },
    {
      companyName: "SAP",
      jobTitle: "DevOps Engineer",
      startDate: "Feb 2022",
      endDate: "Mar 2023",
      icon: sapLogo.src,
      bulletPoints: [
        "Jenkins/automation scripting using Bash and Ruby.",
        "SUSE Linux Enterprise Servers diagnostics, troubleshooting, monitoring, and maintenance.",
        "Supervised and trained a new intern, helping him gain practical experience in DevOps methodologies and tools.",
        "Front-end development - HTML, CSS, and JavaScript. (Developing a unified maintenance page for all modules)",
        "Servers Loadtest preparation and execution.",
        "Internal and External ticket/incident solving.",
      ],
      technologies: ["Bash", "JavaScript", "MS Azure", "Jenkins"],
    },
    {
      companyName: "Butopêa",
      jobTitle: "Front-End / UX Developer",
      startDate: "Jun 2020",
      endDate: "Jan 2022",
      icon: butopeaLogo.src,
      bulletPoints: [
        "Developed new user interfaces and features using VueJS, Javascript / Typescript, NodeJS, HTML5, and CSS3 / SASS.",
        "Prepared and executed A/B Tests (Google Optimize, Google Tag Manager, and Google Analytics).",
        "Created different Figma designs/prototypes based on modern UX e-commerce best practices.",
        "Improved website performance by implementing various optimization techniques, reducing load time, and improving user experience.",
        "Implemented a social media feed containing posts fetched from the company's Instagram profile and WordPress blog.",
      ],
      technologies: ["Vue.js", "JavaScript", "Elasticsearch", "Figma"],
    },
    {
      companyName: "INSS",
      jobTitle: "IT Intern",
      startDate: "May 2019",
      endDate: "Aug 2019",
      icon: inssLogo.src,
      bulletPoints: [
        "Reduced computer maintenance time by 75% by implementing a new restoration method (Clonezilla)",
        "Created a local webserver that helped our team to manage the company’s network printers (Laravel / Bootstrap 4).",
        "Worked with Infrastructure Maintenance, IT support, and Network Troubleshooting.",
      ],
      technologies: ["JavaScript", "PHP", "Infrastucture Maintenance"],
    },
    {
      companyName: "SESAU",
      jobTitle: "IT Intern",
      startDate: "Dec 2014",
      endDate: "Nov 2016",
      icon: sesauLogo.src,
      bulletPoints: [
        "Server Management (Active Directory - Windows Server; BrazilFW - Linux Firewall).",
        "Worked with Infrastructure Maintenance, Helpdesk, and Network Troubleshooting.",
        "Customized the company’s firewall blocking page (CSS / HTML).",
      ],
      technologies: [
        "HTML",
        "CSS",
        "Server Management",
        "Infrastucture Maintenance",
      ],
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        ref={tabRef}
        style={{ minHeight: tabHeight }}
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <div className="py-3">{children}</div>}
      </div>
    );
  }

  return (
    <div className="w-98 px-5 pb-5 bg-cloudy-white rounded-lg ">
      <TabsMui
        value={value}
        onChange={handleChange}
        variant="scrollable"
        sx={{
          "& .MuiTabs-indicator": { backgroundColor: "#049CB1" },
          "& .MuiTabs-scroller": { borderBottom: 1, borderColor: "divider" },
          "& .MuiTabScrollButton-root.Mui-disabled": { display: "none" },
        }}
        aria-label="Work Experience tabs"
        allowScrollButtonsMobile
      >
        {workExperiences.map((item, index) => (
          <Tab
            key={index}
            {...a11yProps(index)}
            icon={<img src={item.icon} style={{mixBlendMode: "multiply", maxHeight: "70px"}} />}
            sx={{width: "140px", maxHeight: "80px"}}
          />
        ))}
      </TabsMui>
      <SwipeableViews 
        containerStyle={{
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
        }} 
        enableMouseEvents axis="x" index={value} onChangeIndex={handleChangeIndex}
      >
        {workExperiences.map((item, index) => (
          <TabPanel value={value} key={index} index={index} dir="ltr">
            <div>
              <h2 className="font-bold text-lg">
                {item.jobTitle}{" "}
                <span className="text-primary whitespace-nowrap">@ {item.companyName}</span>
              </h2>
              <h3 className="text-sm">
                {item.startDate} - {item.endDate}
              </h3>
              <ul className="my-4">
                {item.bulletPoints.map((bulletPoint, index2) => (
                  <li
                    key={index2}
                    className="before:content-['•'] before:text-primary  before:absolute before:left-0  text-sm mb-3 pl-4 relative"
                  >
                    {bulletPoint}
                  </li>
                ))}
              </ul>
            </div>
          </TabPanel>
        ))}
      </SwipeableViews>
    </div>
  );
}
