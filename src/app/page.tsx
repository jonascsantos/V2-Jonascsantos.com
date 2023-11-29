"use client";

import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import Loader from "@/components/Loader";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      <main>
        <Hero />
        <Work />
        <Projects />
      </main>
    </>
  );
}
