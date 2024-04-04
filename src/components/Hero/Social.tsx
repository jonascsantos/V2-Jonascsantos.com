import { Github, Linkedin, Instagram, Mail } from "lucide-react";

interface SocialProps {
  leftAligned?: boolean
}

export const Social = ({ leftAligned }: SocialProps) => {
  return (
    <div className={`mt-5 flex w-full gap-20 justify-around md:justify-start text-primary`}>
      <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow-button">
        <Github size={30} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow-button">
        <Linkedin size={30} />
      </div>
      {/* <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow-button">
        <Instagram size={30} />
      </div> */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow-button">
        <Mail size={30} />
      </div>
    </div>
  );
}
