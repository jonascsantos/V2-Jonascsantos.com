import { Fira_Code } from "@next/font/google";

import { Social } from "./Social";

const firaCode = Fira_Code({ subsets: ["latin"] });

export function AboutMe() {
  return (
    <div className="px-5 text-center">
      <span style={firaCode.style} className="font-semibold">
        👋 Hello there! I am
      </span>
      <h1 className="my-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gradient-1 via-gradient-2 to-gradient-3">
        Jonas dos Santos
      </h1>
      <p>
        A resourceful{" "}
        <span className="font-bold text-primary">Full Stack Developer</span>{" "}
        passionate about creating innovative and efficient web applications
        using cutting-edge tools and technologies.
      </p>
      <Social />
    </div>
  );
}
