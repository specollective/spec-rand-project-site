import Image from "next/image";
import ProjectsAccordian from "./projects-accordian";

import microcredSnap from '../public/snap_microcredential.svg';
import meepleSnap from '../public/snap_meeple.svg';
import digitalGallerySnap from '../public/snap_digital_gallery.svg';
import joERSnap from '../public/snap_JoER.svg';

function ProjectsSection() {

  const projectsData = [
    {
      id: 1,
      name: 'Microcredential Project',
      tag: 'Learning Management System',
      info: 'CAREP and SPEC have partnered together on this project with the aim of expanding access to education in the areas of diversity, equity, inclusion (DEI), mass atrocity prevention, game-based learning, and professional development. This project kicked off: November 2021 ',
      pic: <Image src={microcredSnap} alt='mircocred-image'/>,
      linkLine:'View Project Details >>',
      link: '/micro-credential',
    }, 
    {
      id: 2,
      name: 'Gaming Project',
      tag: 'Socio-cultural game-based learning',
      info: "The aim of this project, funded by RAND's Center to Advance Racial Equity Policy, is to engage and educate the public on topics related to racial equity policy through socio-cultural game-based learning.This project kicked off: December 2021",
      pic: <Image src={meepleSnap} alt='meeple-image'/>,
      linkLine:'View Project Details >>',
      link: '/meeple',
    }, 
    {
      id: 3,
      name: 'Digital Expressions Gallery',
      tag: 'Digital Expressions of Mass Incarceration Online Gallery',
      info: 'Incarceration can be a particularly traumatizing experience for LGBTQ+ individuals. Studies of prison art programs suggest that artistic activities have several benefits for prisoner rehabilitation and institutional management. This gallery of work by LGBTQ+ incarcerated artists was produced during the CAREP/SPEC partnership in collaboration with advocacy group ABO Comix.',
      pic: <Image src={digitalGallerySnap} alt='digital-gallery-image'/>,
      linkLine:'Visit the Gallery >>',
      link: 'https://medium.com/journal-of-engaged-research/expressions/home',
    }, 
    {
      id: 4,
      name: 'Journal of Engaged Research',
      tag: 'Sharing Knowledge. Building Communities.',
      info: 'The diversity of the publishing sector does not reflect that of the US population. The Journal of Engaged Research (JoER) elevates the perspectives of emerging scholars, students, artists and activists from historically marginalized groups. During the CAREP/SPEC partnership, collaborators from the Pardee RAND Graduate School, Wabash College and a CAREP Public Discourse Fellow worked with the co editors of JoER to publish articles.',
      pic: <Image src={joERSnap} alt='JoER-image'/>,
      linkLine:'Visit the Journal >>',
      link: 'https://medium.com/journal-of-engaged-research',
    }, 

  ]

  return (
    <>
      <div className="p-5 md:px-36 w-screen h-auto bg-spec-black-600 font-Poppins">
        <h1 className="text-6xl md:text-10xl font-bold py-4 text-center"> Projects </h1>
        
        <section className="flex flex-col md:flex-row gap-y-3 py-4 text-spec-yellow-600 text-base md:text-xl tracking-wide font-medium justify-around items-center"> 
          <div>CAREP Pillar I - Methods and Action</div>
          <span className="hidden md:block rounded-full bg-spec-white-600 h-1.5 w-1.5"></span>
          <div>CAREP Pillar II - Dialogue and Change</div>
          <span className="hidden md:block rounded-full bg-spec-white-600 h-1.5 w-1.5"></span>
          <div>CAREP Pillar III - Policy Leadership</div>
        </section>
        
        <p className="py-4 md:px-44  text-lg text-center">
        Embodying all three pillars while moving through the project phase allowed both the SPEC and CAREP 
        teams to learn and grow while creating tangible 
        deliverables which will accelerate learning and up-skilling in pertinent knowledge areas. 
        </p>

        <ProjectsAccordian projectsData={projectsData}/>
      </div>
    </>
  )
}

export default ProjectsSection;