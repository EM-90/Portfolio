import React, { useRef } from "react";
import "./App.css";
import ProjectArticle from "./components/projectArticle";
import holidaze from "./assets/screenshot-Holidaze.png";
import auctionHouse from "./assets/screenshot-Auction-house.png";
import trendSetter from "./assets/screenshot-trend-setter.png";
import Layout from "./components/layout";
import IntroHeaderSection from "./components/introHeaderSection";
import AboutSection from "./components/aboutSection";
import { DiJsBadge } from "react-icons/di";

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
        scrollToAbout={() => scrollToSection(aboutRef)}
      >
        <section className="paddingContainer px-4 sm:px-7">
          <IntroHeaderSection />
          <section ref={aboutRef} className="relative">
            <AboutSection />
          </section>

          <section ref={projectsRef} className="projectSection relative">
            <h1 className=" section-header text-3xl sm:text-4xl lg:text-6xl font-medium mb-3 text-headerText">
              Projects
            </h1>
            <ProjectArticle
              header={"Holidaze"}
              text={
                "This project is my exam. I have used TypeScript and Tailwind CSS. Holidaze is a travel booking site where users can book venues for their stay. If the user registers to become a venue manager, they can rent out venues."
              }
              repoLink={"https://github.com/EM-90/exam-project-2"}
              liveLink={"https://splendorous-yeot-c90369.netlify.app/"}
              image={holidaze}
            />
            <ProjectArticle
              header={"The Auction House"}
              text={
                "This is an auction page. The user can create an account to start bidding on items. Registered users can also put their items up for auction"
              }
              repoLink={
                "https://github.com/EM-90/Semester-Project-2-AuctionHouse"
              }
              liveLink={"https://funny-llama-1a3bdc.netlify.app/"}
              image={auctionHouse}
            />
            <ProjectArticle
              header={"TrendSetter"}
              text={
                "TrendSetter is a page with popular items that are trending. This is an e-commerce site. The main functionality is the shopping cart"
              }
              repoLink={"https://github.com/EM-90/trend-setter"}
              liveLink={"https://incandescent-flan-2c1cc1.netlify.app/"}
              image={trendSetter}
            />
          </section>
        </section>
      </Layout>
    </main>
  );
}

export default App;
