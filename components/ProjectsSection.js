import Image from "next/image";
import ProjectsAccordion from "./ProjectsAccordian";
import microcredSnap from '../public/snap_microcredential.svg';
import meepleSnap from '../public/snap_meeple.svg';
import digitalGallerySnap from '../public/snap_digital_gallery.svg';
import joERSnap from '../public/snap_JoER.svg';
import { PROJECTS } from '../constants/projects';

function ProjectsSection() {
  return (
    <div className="p-5 md:px-36 w-screen h-auto bg-spec-black-600 font-Poppins">
      <h1 className="text-6xl md:text-10xl font-bold py-4 text-center"> Projects </h1>
      
      <section className="flex flex-col md:flex-row flex-wrap lg:gap-y-3 py-4 text-spec-yellow-600 text-base md:text-xl tracking-wide font-medium justify-around items-center"> 
        <div>CAREP Pillar I - Methods and Action</div>
        <span className="hidden md:block rounded-full bg-spec-white-600 h-1.5 w-1.5"></span>
        <div>CAREP Pillar II - Dialogue and Change</div>
        <span className="hidden md:block rounded-full bg-spec-white-600 h-1.5 w-1.5"></span>
        <div>CAREP Pillar III - Policy Leadership</div>
      </section>
      
      <p className="py-4 md:20 lg:px-44  text-lg text-center">
        Embodying all three pillars while moving through the project phase allowed both the SPEC and CAREP teams to learn and grow while creating tangible deliverables which will accelerate learning and up-skilling in pertinent knowledge areas. 
      </p>

      <ProjectsAccordion projectsData={PROJECTS} />
    </div>
  )
}

export default ProjectsSection;