import { Title } from "./Title";
import { Tabs } from "./Tabs";

export function Work() {
  return (
    <section data-section="Work">
      <div className="flex flex-col gap-5 w-full pt-10 px-3 pb-24 bg-gradient-work">
        <Title />
        <Tabs />
      </div>
    </section>
  );
}
