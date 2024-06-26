import { useState } from 'react';
import Image from 'next/image';
import BreakLine from './break-line';
import downArrow from '../public/arrow_down.svg';
import upArrow from '../public/arrow_up.svg';
import rightArrow from '../public/arrow_right.svg';
import Link from 'next/link';

function ProjectsDisplay({ project }) {
	return (
		<div className="border border-spec-yellow-600 mb-2">
			<div className="flex justify-between p-10 max-h-[600px]">
				<div className="flex basis-1/2 place-self-start self-start p-4">
					<Image src={project.pic.url} alt={project.pic.alt} />
				</div>
				<div className="flex flex-col basis-1/2 justify-between p-4">
					<div className="text-lg"> {project.info} </div>
					<div className="text-xl text-spec-yellow-600 hover:underline self-end mt-4">
						<Link href={project.link}>
							<a>{project.linkLine}</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function ProjectsAccordion({ projectsData }) {
	const [isClicked, setIsClicked] = useState(null);

	const showProject = index => {
		setIsClicked(isClicked === index ? null : index);
	};

	const toggleBtn = index => {
		const downImage = <Image alt="down-arrow" src={downArrow} />;
		const upImage = <Image alt="up-arrow" src={upArrow} />;

		if (isClicked === index) {
			return upImage;
		} else {
			return downImage;
		}
	};

	return (
    <section className="py-14 md:py-30">
      {projectsData.map((project, index) => (
        <div key={`${project.name}-${index}`}>
          <section className="hidden lg:block">
            <div className="cursor-pointer" onClick={() => showProject(index)}>
              <div className="grid grid-rows-3 grid-flow-col place-content-between items-end">
                <h3 className="row-span-2 col-span-1 text-4xl text-whte-600">
                  {project.name}
                </h3>
                <p className="col-span-2 text-spec-yellow-600">{project.tag}</p>
                <button
                  className="row-span-3"
                  aria-expanded={isClicked === index ? "true" : "false"}
                >
                  {toggleBtn(index)}
                </button>
              </div>
              <BreakLine color="spec-teal-600" lineWidth="full" />
            </div>
            {
              <section className={isClicked === index ? "block" : "hidden"}>
                <ProjectsDisplay project={project} />
              </section>
            }
          </section>

          <section className="visible lg:hidden">
            <div className="flex place-content-between py-2">
              <h3 className="text-2xl text-whte-600">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                className="h-[40px] w-[40px]"
              >
                <Image alt="right-arrow" src={rightArrow} />
              </a>
            </div>
            <BreakLine color="spec-teal-600" lineWidth="full" />
          </section>
        </div>
      ))}
    </section>
  );
}

export default ProjectsAccordion;
