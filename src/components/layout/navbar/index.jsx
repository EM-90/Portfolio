import React from "react";

function Navbar({ scrollToProjects, scrollToAbout }) {
  return (
    <nav className="sm:bg-header text-white sm:text-headerText bg-orange-700 h-20 sticky top-0 left-0 right-0 w-full z-20">
      <section className="h-20 layout-navEl flex justify-end items-center gap-8 text-lg font-semibold pr-7">
        <a onClick={scrollToProjects} className="cursor-pointer">
          Projects
        </a>
        <a onClick={scrollToAbout} className="cursor-pointer">
          About
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
