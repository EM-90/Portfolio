import React, { useRef } from "react";
import "./App.css";
import ProjectArticle from "./components/projectArticle";
import holidaze from "./assets/screenshot-Holidaze.png";
import auctionHouse from "./assets/screenshot-Auction-house.png";
import trendSetter from "./assets/screenshot-trend-setter.png";
import Layout from "./components/layout";
import IntroHeaderSection from "./components/introHeaderSection";
import AboutSection from "./components/aboutSection";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log(ref); // Debugging log
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref is not attached to any element");
    }
  };

  return (
    <main className="flex flex-col">
      <Layout
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
      >
        <IntroHeaderSection />
        <section ref={aboutRef} className="relative h-dvh">
          <AboutSection />
        </section>
        <section ref={projectsRef} className="projectSection relative">
          <h1 className="section-header text-6xl text-headerText">Projects</h1>
          <ProjectArticle image={holidaze} />
          <ProjectArticle image={auctionHouse} />
          <ProjectArticle image={trendSetter} />
        </section>
      </Layout>
    </main>
  );
}

export default App;
