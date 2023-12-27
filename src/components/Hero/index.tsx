import { Avatar } from "./Avatar";
import { AboutMe } from "./AboutMe";

export function Hero() {
  return (
    <section data-section="Hero" className="pb-10 pt-20">
      <Avatar />
      <AboutMe />
    </section>
  );
}
