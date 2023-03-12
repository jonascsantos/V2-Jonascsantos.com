import Image from "next/image";

import AvatarImage from "@/assets/Avatar.png";

export function Avatar() {
  return (
    <div className="relative flex items-end w-[60vw] h-[80vw] mx-auto my-8 overflow-hidden ">
      <div className="absolute w-full h-4/5 flex-1 bg-gradient-to-tr from-gradient-1 via-gradient-2 to-gradient-3 animate-blob" />
      <div className="relative h-full w-full overflow-hidden animate-blobImage">
        <Image
          src={AvatarImage}
          fill
          alt=""
          quality={80}
          style={{
            objectFit: "contain",
          }}
          className=""
        />
      </div>
    </div>
  );
}
