import SectionContent from './section-content'
import SectionHeader from './section-header'
import SubHeader from './sub-header'

function ProjectsSection() {

  return (
    <>
      <SectionContent className="bg-spec-black-600">
        <SectionHeader className="text-center"> Projects </SectionHeader>
        <SubHeader className="justify-around items-center py-7"> 
          CAREP Pillar I - Methods and Action
          <span className="hidden md:block rounded-full bg-spec-white-600 h-1.5 w-1.5"></span>
          CAREP Pillar II - Dialogue and Change
          <span className="hidden md:block rounded-full bg-spec-white-600 h-1.5 w-1.5"></span>
          CAREP Pillar III - Policy Leadership
        </SubHeader>
      </SectionContent>
    </>
  )
}

export default ProjectsSection;