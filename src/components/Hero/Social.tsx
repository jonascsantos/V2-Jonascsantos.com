import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Social() {
  return (
    <div className="my-5 flex w-full justify-around text-primary">
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
