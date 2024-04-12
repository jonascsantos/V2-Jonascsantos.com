import { Avatar } from "./Avatar";
import { AboutMe } from "./AboutMe";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface Props {
  isLoading?: boolean
}

export const Hero = ({ isLoading }: Props) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const opacityVariant = {
    visible: { opacity: 1, transition:{ delay: 0.3, duration: 0.5 }},
    hidden: { opacity: 0 },
  }

  const opacityVariant2 = {
    visible: { opacity: 1, transition:{ delay: 0.4, duration: 0.5 }},
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    if (inView && !isLoading) {
      control.start("visible");
    } 
  }, [control, inView, isLoading]);
  
  return (
    <motion.div 
      ref={ref}
      variants={opacityVariant}
      initial="hidden"
      animate={control}
    >
      <section id="Hero" className="pb-24 pt-24 md:mt-24 md:mb-20 md:px-10 lg:mt-24 lg:mb-24 lg:px-10 flex flex-col items-center align-items-center md:flex-row md:flex-row-reverse max-w-3xl mx-auto">
        <motion.div 
          ref={ref}
          variants={opacityVariant2}
          initial="hidden"
          animate={control}
        >
          <Avatar />
        </motion.div>
        <AboutMe />
      </section>
    </motion.div>
  );
}
