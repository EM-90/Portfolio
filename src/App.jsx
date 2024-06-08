import React from "react";
import "./App.css";
import ProjectArticle from "./components/projectArticle";
import holidaze from "./assets/screenshot-Holidaze.png";
import auctionHouse from "./assets/screenshot-Auction-house.png";
import trendSetter from "./assets/screenshot-trend-setter.png";
import Layout from "./components/layout";

function App() {
  return (
    <main className="flex flex-col">
      <Layout>
        <section className="projectSection">
          <h1 className="headers text-8xl font-extrabold mb-16 text-orange-500">
            Projects
          </h1>
          <ProjectArticle image={holidaze} />
          <ProjectArticle image={auctionHouse} />
          <ProjectArticle image={trendSetter} />
        </section>
        <section></section>
      </Layout>
    </main>
  );
}

export default App;
