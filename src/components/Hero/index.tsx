import { Avatar } from "./Avatar";
import { AboutMe } from "./AboutMe";

export function Hero() {
  return (
    <section data-section="Hero" className="pb-20 pt-20 md:mt-20 flex flex-col items-center align-items-center md:flex-row md:flex-row-reverse">
      <Avatar />
      <AboutMe />
    </section>
  );
}
