import { NavbarRoutes } from "../../lib";

import Logo from "../../assets/images/acotados_logo.svg";
import { HeaderMobile } from "..";

export const Header = () => {
  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="w-full h-24 hidden lg:flex justify-between items-center px-8">
        <img
          src={Logo}
          alt="acotados logo"
          className="w-24 h-24 object-contain"
        />

        <nav>
          <ul className="w-full flex gap-8">
            {NavbarRoutes.map((navbarItem) => (
              <li>
                <a
                  className="font-semibold text-light-gray hover:text-main-yellow"
                  href={navbarItem.path}
                >
                  {navbarItem.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* MOBILE HEADER */}
      <HeaderMobile />
    </>
  );
};
