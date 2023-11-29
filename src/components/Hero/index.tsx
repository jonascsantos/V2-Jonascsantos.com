import { Avatar } from "./Avatar";
import { AboutMe } from "./AboutMe";

export function Hero() {
  return (
    <section data-section="Hero" className="py-10">
      <Avatar />
      <AboutMe />
    </section>
  );
}
