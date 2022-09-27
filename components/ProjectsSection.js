import ProjectsAccordian from "./projects-accordian";


function ProjectsSection() {

  const projectsData = [
    {
      id: 1,
      name: 'Microcredential Project',
      tag: 'Learning Management System',
    }, 
    {
      id: 2,
      name: 'Gaming Project',
      tag: 'Socio-cultural game-based learning',
    }, 

  ]

  return (
    <>
      <div className="p-5 md:px-36 w-screen h-auto bg-spec-black-600 font-Poppins">
        <h1 className="text-6xl md:text-10xl font-bold py-4 text-center"> Projects </h1>
        
        <section className="flex flex-col md:flex-row gap-y-3 py-4 text-spec-yellow-600 text-xl tracking-wide font-medium justify-around items-center"> 
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