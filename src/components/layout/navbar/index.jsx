import React from "react";

function Navbar({ scrollToContact, scrollToProjects, scrollToAbout }) {
  return (
    <nav className="bg-header h-20 sticky top-0 left-0 right-0 w-full z-10">
      <section className="h-20 layout-navEl flex justify-end items-center gap-8 text-lg font-semibold">
        <a onClick={scrollToProjects} className="cursor-pointer">
          Projects
        </a>
        <a onClick={scrollToContact} className="cursor-pointer">
          Contact
        </a>
        <a onClick={scrollToAbout} className="cursor-pointer">
          About
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
