"use client";

import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Loader from "@/components/Loader";
import { useState } from "react";
import NavBar from "@/components/Navbar";
import { styled } from "@mui/material";
import { ReactLenis } from '@studio-freight/react-lenis'

const GlobalContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1440px",
  marginLeft: "auto",
  marginRight: "auto",
}));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
          <ReactLenis root options={{ lerp: 0.1 }}>
            <NavBar isLoading={isLoading}/>
            <main>
              <GlobalContainer>
                <Hero isLoading={isLoading}/>
              </GlobalContainer>
              <Work isLoading={isLoading} />
              <GlobalContainer>
                <Projects  />
                <Contact />
              </GlobalContainer>
              <Footer />
            </main>
          </ReactLenis>
    </>
  );
}
