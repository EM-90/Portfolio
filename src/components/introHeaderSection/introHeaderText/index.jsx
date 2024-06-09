import React from "react";

function IntroHeaderText() {
  return (
    <article className="relative z-10">
      <h1 className="intro-header text-headerText text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-3">
        <span className=" text-orange-700">Design</span>,{" "}
        <span className=" text-blue-600">functionality </span>and good
        <span className=" text-teal-700"> user experience</span>?
      </h1>
      <h3 className="intro-text text-xl md:text-3xl">
        Look no further! I am a problem solver who loves to take on a chalange
      </h3>
    </article>
  );
}

export default IntroHeaderText;
