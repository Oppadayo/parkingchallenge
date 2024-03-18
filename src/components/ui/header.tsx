import { useState } from "react";

import Logo from "../../assets/icons/avatar_white.svg?react";

import MenuIcon from "../../assets/icons/menu.svg?react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="flex justify-between px-3 py-2 bg-primary">
      <p className="text-white">
        <Logo />
      </p>

      <button className="text-white" onClick={() => setOpenMenu(!openMenu)}>
        <MenuIcon />
      </button>
    </header>
  );
}
