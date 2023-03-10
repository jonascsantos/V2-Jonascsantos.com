import Link from "next/link";
import { Suspense } from "react";
import { WorkExperience } from "../components/home/WorkExperience";

export const metadata = {
  title: "Home 1",
};

export default function Home() {
  return (
    <div>
      <WorkExperience />
    </div>
  );
}
