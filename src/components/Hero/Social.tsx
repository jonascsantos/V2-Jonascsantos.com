import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

interface SocialProps {
  leftAligned?: boolean
}

export const Social = ({ leftAligned }: SocialProps) => {
  return (
    <div className={`mt-5 flex w-full gap-20 justify-around md:justify-start text-primary`}>
      <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow-button">
        <Link target={"_blank"} href={"https://github.com/jonascsantos"}>
          <Github size={30} />
        </Link>
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow-button">
        <Link target={"_blank"} href={"https://www.linkedin.com/in/jonascsantos"}>
          <Linkedin size={30} />
        </Link>
      </div>
      {/* <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow-button">
        <Instagram size={30} />
      </div> */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow-button">
        <Link target={"_blank"} href={"mailto:contact@jonascsantos.com"}>
          <Mail size={30} />
        </Link>
      </div>
    </div>
  );
}
