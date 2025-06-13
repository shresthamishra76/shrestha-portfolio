import React from "react";
import { Link } from "react-scroll";

const NavbarLinks = () => {
  return (
    <div className="font-inter uppercase tracking-wider">
      <header>
        <nav>
          <ul className="flex justify-around w-full gap-x-10">
            <li className="hover:text-gold cursor-pointer">
              <Link activeClass="active" smooth spy to="about">
                about me{" "}
              </Link>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <Link activeClass="active" smooth spy to="skills">
                skills{" "}
              </Link>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <Link activeClass="active" smooth spy to="experiences">
                experiences{" "}
              </Link>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <Link activeClass="active" smooth spy to="projects">
                projects{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavbarLinks;
