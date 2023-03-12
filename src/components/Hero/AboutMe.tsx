import { Fira_Code } from "@next/font/google";

import { Social } from "./Social";

const firaCode = Fira_Code({ subsets: ["latin"] });

export function AboutMe() {
  return (
    <div className="px-5 text-center">
      <span style={firaCode.style}>👋 Hello there! I am </span>
      <h1>Jonas dos Santos</h1>
      <p>
        A resourceful <span>FullStack Developer</span> passionate about creating
        innovative and efficient web applications using cutting-edge tools and
        technologies.
      </p>
      <Social />
    </div>
  );
}
