import React, { useState } from "react";

// components
import { SidebarMenu } from "..";

//resources (icons and images)
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/acotados_logo.svg";

export const HeaderMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="w-full h-24 flex lg:hidden justify-between items-center px-8">
      <img
        src={Logo}
        alt="acotados logo"
        className="w-24 h-24 object-contain"
      />

      <button
        type="button"
        onClick={() => {
          setIsOpenMenu(true);
        }}
      >
        <Bars3Icon color="#2A3362" className="h-7 w-7" aria-hidden={false} />
      </button>

      {isOpenMenu && <SidebarMenu open={isOpenMenu} setOpen={setIsOpenMenu} />}
    </header>
  );
};
