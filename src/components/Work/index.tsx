import { Title } from "./Title";
import { Tabs } from "./Tabs";

export function Work() {
  return (
    <section data-section="Work">
      <div className="w-full py-5 bg-gradient-work bg-sky-blue">
        <Title />
        <Tabs />
      </div>
    </section>
  );
}
