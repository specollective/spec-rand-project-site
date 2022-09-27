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
    
    if (isClicked=== index) {
      return downImage
    } else {
      return upImage
    };
  };
  
  const accordionClosed = 'hidden overflow-y-hidden leading-snug'
  const accordionOpen = 'block max-h-[400px] overlfow-y-visible'

  return (
    <section id='projects' className='py-14 md:py-32 md:px-36 '>
      {projectsData.map((project, index) => (
        <div className=''>
          <div className='cursor-pointer' 
               onClick={() => showProject(index)}>
                <div className='grid grid-rows-3 grid-flow-col'>
                  <h3 className='row-span-2 col-span-1 text-4xl text-whte-600'>
                    {project.name}
                  </h3>
                  <p className='hidden md:block col-span-2  text-spec-yellow-600'>
                    {project.tag}
                  </p>
                  <button
                  className='row-span-3'
                  aria-expanded={isClicked === index ? 'true' : 'false'}>
                  {toggleBtn(index)}
                  </button>
                </div>
                <div className=''>
                  <BreakLine color='spec-teal-600' lineWidth='full'/>
                </div>
          </div>
            {
              <div className={isClicked === index ? 
              accordionClosed && accordionOpen : accordionClosed}>
                  <p className='font-normal text-[0.9rem]sm:text-base'
                  >
                  {project.info}
                  </p>
              </div>
            }
        </div>
      ))}
    </section>
  )
};

// {/* <div className="py-14 md:py-32">
// {projectsData.map(project => {
//   return (
//     <div className='pb-8 px-36 cursor-pointer' 
//           key={project.id}
//           onClick={showProject}

//     >
//       {/* <Image src={data.imageSrc}/> */}
//       <h3 className='text-4xl text-whte-600'>{project.name}</h3>
//       <p className='hidden md:block text-spec-yellow-600'>{project.tag}</p>
//       <BreakLine color='spec-teal-600' lineWidth='full'/>
//     </div>
//   )
// })}
// </div> */}