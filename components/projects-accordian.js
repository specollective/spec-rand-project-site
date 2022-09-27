import { useState } from "react";

import Image from 'next/image';
import downArrow from '../public/spec_logo.svg';
import BreakLine from "./break-line";

export default function ProjectsAccordian({ projectsData }) {
  const [isClicked, setIsClicked] = useState(null);

  const showProject = index => {
    isClicked === index ? setIsClicked(null) : setIsClicked(index)
  }

  const toggleBtn = (index) => {
    const downImage = <Image alt='down-arrow' src={downArrow} />
    const upImage = <Image alt='up-arrow' src={downArrow} />
    
    isClicked === index ? downImage : upImage 
  }
  
  const accordianClosed = 'hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opactity-0'
  const accordianOpen = 'block max-h-[400px] overlfow-y-visible opacity-100 mr-auto'

  return (
    <div className="py-14 md:py-32">
      {projectsData.map(project => {
        return (
          <div className='pb-8 px-36 cursor-pointer' 
                key={project.id}
                onClick={showProject}

          >
            {/* <Image src={data.imageSrc}/> */}
            <h3 className='text-4xl text-whte-600'>{project.name}</h3>
            <p className='hidden md:block text-spec-yellow-600'>{project.tag}</p>
            <BreakLine color='spec-teal-600' lineWidth='full'/>
          </div>
        )
      })}
    </div>
  )
};