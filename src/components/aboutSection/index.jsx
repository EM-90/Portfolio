import React from "react";
import myImage from "../../assets/profilBilde.jpg";

function AboutSection() {
  return (
    <section className=" flex-col lg:items-center lg:flex-row pt-24 flex gap-10 pb-20 mb-20 md:mb-20 md:h-dvh">
      <img
        className="object-center size-48 lg:size-96 border-headerText border-4 rounded-full"
        src={myImage}
        alt="This is a picture of me"
      />
      <section className="flex flex-col w-full md:w-auto">
        <h3 className=" content-text text-2xl sm:text-4xl font-medium mb-3 text-headerText">
          My Name is Eirik Michielsen, and I am a front-end developer
        </h3>
        <p className="sm:text-lg md:text-2xl pb-7">
          As a passionate and innovative designer, I thrive on crafting visually
          stunning and thoughtfully structured designs that captivate and engage
          users. I'm constantly exploring new ways to blend form and function to
          create memorable experiences.
        </p>
        <p className="sm:text-lg md:text-2xl pb-7">
          If you want to stop dreaming and make the page you have always wanted,
          or maybe you need help with a project you are currently working on,
          contact me:
        </p>
        <section>
          <p>Email</p>
          <a className="section-header md:text-2xl text-blue-800">
            eirik.michielsen@gmail.com
          </a>
        </section>
      </section>
    </section>
  );
}

export default AboutSection;
