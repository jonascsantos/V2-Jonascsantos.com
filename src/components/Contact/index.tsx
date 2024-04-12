import { Social } from "../Hero/Social";
import { Title } from "./Title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function Contact() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const opacityVariant = {
    visible: { opacity: 1, transition:{ delay: 0.2, duration: 0.5 }},
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div 
      ref={ref}
      variants={opacityVariant}
      initial="hidden"
      animate={control}
    >
      <section id="Contact">
        <div className="flex flex-col gap-5 w-full pt-10 px-5 sm:pr-10 sm:pl-10 lg:pl-24 lg:pr-24 pb-12  bg-cloudy-white">
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
    </motion.div>
  );
}
