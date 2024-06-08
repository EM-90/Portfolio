import Footer from "./footer";
import Navbar from "./navbar";

import React from "react";

function Layout({ children }) {
  return (
    <div className="pageContainer">
      <Navbar />
      <section className="layout-contentContainer">{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
