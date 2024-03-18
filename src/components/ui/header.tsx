import { useState } from "react";

import Logo from "../../assets/icons/avatar_white.svg?react";
import X from "../../assets/icons/close.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import { Button } from "./button";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className="flex justify-between px-3 py-2 bg-primary">
        <p className="text-white">
          <Logo />
        </p>

        <button className="text-white" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <X /> : <MenuIcon />}
        </button>
      </header>
      {openMenu && (
        <menu className="absolute z-40 flex flex-col w-full h-full space-y-6 bg-primary place-content-center">
          <Button className="text-2xl text-white md:text-5xl" variant={"link"}>
            Entrada
          </Button>
          <Button className="text-2xl text-white md:text-5xl" variant={"link"}>
            Saída
          </Button>
        </menu>
      )}
    </>
  );
}
