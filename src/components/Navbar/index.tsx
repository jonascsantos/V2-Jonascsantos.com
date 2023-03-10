import { Logo } from "./Logo";

export function Navbar() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <Logo />
      </div>
    </div>
  );
}
