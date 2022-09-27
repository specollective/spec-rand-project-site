import { useState } from "react";

import Image from 'next/image';
import downArrow from '../public/spec_logo.svg';
import BreakLine from "./break-line";


function ProjectsDisplay({ project })  {
  return (
    <div className='border border-spec-yellow-600 mb-2'>
      <div className="grid grid-cols-3 grid-rows-2 p-10">
        <div className='col-span-2 row-start-1 row-span-2 place-self-center'> {project.pic} </div>
        <div className='col-start-3 row-start-1 text-lg'> {project.info} </div>
        <div className='col-start-3 row-start-2 text-xl text-spec-yellow-600 hover:underline self-end'> 
          <a href={project.link}>{project.linkLine} </a>
        </div>
      </div>
    </div>
  )
}

function ProjectsAccordian({ projectsData }) {
  const [isClicked, setIsClicked] = useState(null);
  const accordionClosed = 'hidden'
  const accordionOpen = 'block'

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
  
  return (
    <section id='projects' className='py-14 md:py-30 md:px-36 '>
      {projectsData.map((project, index) => (
        <div>

          <section className='hidden md:block'>
            <div className='cursor-pointer' onClick={() => showProject(index)}>
              <div className='grid grid-rows-3 grid-flow-col place-content-between items-end'>
                <h3 className='row-span-2 col-span-1 text-4xl text-whte-600'>
                  {project.name}
                </h3>
                <p className='col-span-2 text-spec-yellow-600'>
                  {project.tag}
                </p>
                <button
                className='row-span-3'
                aria-expanded={isClicked === index ? 'true' : 'false'}
                >
                  {toggleBtn(index)}
                </button>
              </div>
              <BreakLine color='spec-teal-600' lineWidth='full'/>
            </div>
            {
              <section className={isClicked === index ? accordionClosed && accordionOpen : accordionClosed}>
                <ProjectsDisplay project={project}/>
              </section>
            }
          </section>

          <section className='visible md:hidden'>
            <div className='flex place-content-between py-2'>
              <h3 className='text-2xl text-whte-600'>
                {project.name}
              </h3>
              <a 
                href={project.link} 
                className='h-[40px] w-[40px]'
                target='_blank'
              >
                <Image alt='down-arrow' src={downArrow}/>
              </a>
            </div>
            <BreakLine color='spec-teal-600' lineWidth='full'/>
          </section>

        </div>
      ))}
    </section>
  )
};

export default ProjectsAccordian;
