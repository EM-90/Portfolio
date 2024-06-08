import React from "react";
import "./App.css";
import ProjectArticle from "./components/projectArticle";
import holidaze from "./assets/screenshot-Holidaze.png";
import auctionHouse from "./assets/screenshot-Auction-house.png";
import trendSetter from "./assets/screenshot-trend-setter.png";
import Layout from "./components/layout";
import IntroHeaderSection from "./components/introHeaderSection";
import AboutSection from "./components/aboutSection";

function App() {
  return (
    <main className="flex flex-col">
      <Layout>
        <IntroHeaderSection />
        <section className=" relative mt-64">
          <AboutSection />
        </section>
        <section className="projectSection relative mt-60">
          <h1 className="section-header text-6xl mb-16 text-headerText">
            Projects
          </h1>
          <ProjectArticle image={holidaze} />
          <ProjectArticle image={auctionHouse} />
          <ProjectArticle image={trendSetter} />
        </section>
      </Layout>
    </main>
  );
}

export default App;
