import { Avatar } from "./Avatar";
import { AboutMe } from "./AboutMe";

export function Hero() {
  return (
    <section data-section="Hero" className="pb-24 pt-24 md:mt-24 md:mb-20 md:px-10 lg:mt-24 lg:mb-24 lg:px-10 flex flex-col items-center align-items-center md:flex-row md:flex-row-reverse max-w-3xl mx-auto">
      <Avatar />
      <AboutMe />
    </section>
  );
}
