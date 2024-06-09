import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import PrimaryButton from "../buttons/primaryButton";
import SecondaryButton from "../buttons/secondaryButton";
import ProjectDescription from "../projectDescription";

function ProjectArticle({ image, header, text, icon, repoLink, liveLink }) {
  return (
    <div className="flex items-start flex-wrap lg:flex-nowrap my-20">
      <img className="object-contain w-full md:w-1/2" src={image} alt="" />
      <div className="textAndBtnContainer flex flex-col justify-between">
        <ProjectDescription header={header} text={text} icon={icon} />
        <section className="flex flex-col sm:flex-row gap-2">
          <PrimaryButton
            link={repoLink}
            icon={<FaGithub />}
            text={"Repository"}
          />
          <SecondaryButton
            link={liveLink}
            icon={<FaGlobe />}
            text={"Live page"}
          />
        </section>
      </div>
    </div>
  );
}

export default ProjectArticle;
