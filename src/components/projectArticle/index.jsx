import React from 'react';
import { FaGithub, FaGlobe } from "react-icons/fa6"; 
import PrimaryButton from '../buttons/primaryButton';
import SecondaryButton from '../buttons/secondaryButton';
import ProjectDescription from '../projectDescription';

function ProjectArticle({ image }) {
  return (
    <div className='flex items-start flex-wrap lg:flex-nowrap my-8'>
      <img className='object-contain w-full md:w-1/2' src={image} alt="" />
      <div className='textAndBtnContainer flex flex-col justify-between'>
        <ProjectDescription header={'Holidaze'} 
          text={'This project is my exam where I have attempted to learn and apply TypeScript and Tailwind CSS. Holidaze is a travel booking site where users can book venues for their stay. If the user registers to become a venue manager they can additionally rent out their venues.'}/>
        <section className='flex flex-col sm:flex-row gap-2'>
          <PrimaryButton icon={<FaGithub />} text={"Repository"} />
          <SecondaryButton icon={<FaGlobe />} text={"Live page"} />
        </section>
      </div>
    </div>
  );
}

export default ProjectArticle;

