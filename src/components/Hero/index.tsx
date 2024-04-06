import { Avatar } from "./Avatar";
import { AboutMe } from "./AboutMe";

export function Hero() {
  return (
    <section data-section="Hero" className="pb-20 pt-20 md:mt-20 md:mb-20 md:px-10 flex flex-col items-center align-items-center md:flex-row md:flex-row-reverse max-w-3xl mx-auto">
      <Avatar />
      <AboutMe />
    </section>
  );
}
