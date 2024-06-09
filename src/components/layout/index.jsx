import Footer from "./footer";
import Navbar from "./navbar";

import React from "react";

function Layout({ children, scrollToProjects, scrollToAbout }) {
  return (
    <div className="pageContainer">
      <Navbar
        scrollToProjects={scrollToProjects}
        scrollToAbout={scrollToAbout}
      />
      <section className="layout-contentContainer">{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
