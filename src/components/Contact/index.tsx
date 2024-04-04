import { Social } from "../Hero/Social";
import { Title } from "./Title";

export function Contact() {
  return (
    <section data-section="Contact">
      <div className="flex flex-col gap-5 w-full pt-10 px-5 pb-12  bg-cloudy-white">
        <Title />
        <div>
          <p>
            <span className="font-bold text-primary">Thank you for stopping by. </span>{" "}
            I am always open for a chat. Feel free to contact me via email or other social platforms.
          </p>
        </div>
        <Social />
      </div>
    </section>
  );
}
