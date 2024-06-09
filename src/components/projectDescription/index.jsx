import React from "react";

function ProjectDescription({ header, text }) {
  return (
    <div className=" mb-4">
      <h3 className="mt-7 sm:mt-7 md:mt-7 lg:mt-0 section-header text-xl md:text-2xl pb-4">
        {header}
      </h3>
      <p className="content-text sm:text-lg lg:text-xl">{text}</p>
    </div>
  );
}

export default ProjectDescription;
