import { Title } from "./Title";
import { Tabs } from "./Tabs";
import { styled } from "@mui/material";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GlobalContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1440px",
  marginLeft: "auto",
  marginRight: "auto",
}));

interface Props {
  isLoading?: boolean
}

export const Work = ({ isLoading }: Props) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const opacityVariant = {
    visible: { opacity: 1, transition:{ delay: 0.2, duration: 0.5 }},
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    if (inView && !isLoading) {
      control.start("visible");
    } 
  }, [control, inView, isLoading]);
  
  return (
    <section id="Work">
      <div className="bg-gradient-work">
        <motion.div 
          ref={ref}
          variants={opacityVariant}
          initial="hidden"
          animate={control}
        >
          <GlobalContainer>
            <div className="flex flex-col w-full pt-10 pb-24 px-5 sm:pl-10 sm:pr-10 sm:pb-24 sm:pt-12 md:pt-24 md:pb-32 lg:pl-24 lg:pr-24 lg:pl-24">
                <div className="pb-5 md:pb-8">
                  <Title />
                </div>
                <Tabs />
            </div>
          </GlobalContainer>
        </motion.div>
      </div>
    </section>
  );
}
