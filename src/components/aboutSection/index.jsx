import React from "react";
import myImage from "../../assets/profilBilde.jpg";

function AboutSection() {
  return (
    <section className=" flex-col lg:items-center lg:flex-row pt-24 flex gap-10 pb-20 mb-20 md:mb-0 md:h-dvh">
      <img
        className="object-center size-48 md:size-96 border-headerText border-4 rounded-full"
        src={myImage}
        alt="This is a picture of me"
      />
      <section className="flex flex-col w-full md:w-auto">
        <h3 className=" content-text text-2xl sm:text-4xl font-medium mb-3 text-headerText">
          My Name is Eirik Michielsen and I am a front-end developer
        </h3>
        <p className="sm:text-lg md:text-2xl pb-7">
          As a passionate and innovative designer, I thrive on crafting visually
          stunning and thoughtfully structured designs that captivate and engage
          users. My creativity knows no bounds; I'm constantly exploring new
          ways to blend form and function to create memorable experiences. if
          are tired of thinking and want to make something contact me.
        </p>
        <a className="section-header md:text-2xl text-blue-800">
          eirik.michielsen@gamil.com
        </a>
      </section>
    </section>
  );
}

export default AboutSection;
