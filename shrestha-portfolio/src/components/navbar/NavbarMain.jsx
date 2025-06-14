import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";

const NavbarMain = () => {
  return (
    <nav className="w-full left-0 bg-black fixed top-0">
      <div className="flex justify-between items-center p-6 gap-x-15">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default NavbarMain;
