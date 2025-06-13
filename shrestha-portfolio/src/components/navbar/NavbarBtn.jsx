import React from "react";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link activeClass="active" smooth spy to="contact">
      <button
        type="button"
        className="text-gold hover:text-yellow-300 rounded-2xl cursor-pointer uppercase border-white"
      >
        Contact Me
      </button>
    </Link>
  );
};

export default NavbarBtn;
