import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-header h-20 top sticky top-0 left-0 right-0 w-full z-10">
      <section className="h-20 layout-navEl flex justify-end items-center gap-8 text-lg font-semibold">
        <a className="cursor-pointer">Projects</a>
        <a className="cursor-pointer">Contact</a>
      </section>
    </nav>
  );
}

export default Navbar;
