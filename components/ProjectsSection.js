import SectionHeader from './section-header'
import SubHeader from './sub-header'

function ProjectsSection() {

  return (
    <>
      <div className="p-5 md:px-36 w-screen h-auto bg-spec-black-600">
        <h1 className="text-4xl md:text-6xl font-bold py-4 text-center"> Projects </h1>
        <section className="flex flex-col md:flex-row gap-y-3 py-4 text-spec-yellow-600 text-xl tracking-wide font-medium justify-around items-center"> 
          <div>CAREP Pillar I - Methods and Action</div>
          <span className="hidden md:block rounded-full bg-spec-white-600 h-1.5 w-1.5"></span>
          <div>CAREP Pillar II - Dialogue and Change</div>
          <span className="hidden md:block rounded-full bg-spec-white-600 h-1.5 w-1.5"></span>
          <div>CAREP Pillar III - Policy Leadership</div>
        </section>
      </div>
    </>
  )
}

export default ProjectsSection;