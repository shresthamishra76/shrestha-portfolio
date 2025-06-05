import React from "react";
import { Link } from "react-scroll";

const NavbarLinks = () => {
  return (
    <div className="text-gold hover:text-yellow-300 font-inter uppercase tracking-wider">
      <header>
        <nav>
          <ul className="flex justify-around w-full gap-x-10">
            <li>
              <Link activeClass="active" smooth spy to="about">
                about me{" "}
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skills">
                skills{" "}
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="experiences">
                experiences{" "}
              </Link>
            </li>
            <li>
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
