import { Fira_Code } from "@next/font/google";

import { Social } from "./Social";

const firaCode = Fira_Code({ subsets: ["latin"] });

export function AboutMe() {
  return (
    <div className="px-5 gap-2 md:pl-0 flex-1 max-w-lg text-center md:text-left flex flex-col justify-center">
      <span style={firaCode.style} className="font-semibold md:text-lg">
        👋 Hello there! I am
      </span>
      <h1 className="my-3 md:my-4 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-[length:400%_400%] bg-gradient-hero animate-textGradient ">
        Jonas dos Santos
      </h1>
      <p>
        A resourceful{" "}
        <span className="font-bold text-primary">Full Stack Engineer</span>{" "}
        passionate about creating innovative and efficient web applications
        using cutting-edge tools and technologies.
      </p>
      <Social />
    </div>
  );
}
