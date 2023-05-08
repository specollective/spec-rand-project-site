import ProjectsAccordion from './projects-accordion';
import microcredSnap from '../public/snap_microcredential.svg';
import meepleSnap from '../public/snap_meeple.svg';
import digitalGallerySnap from '../public/snap_digital_gallery.svg';
import joERSnap from '../public/snap_JoER.svg';
import realTimeCollaborationSnap from '../public/real_time_collaboration.svg';

function ProjectsSection() {
	const projectsData = [
		{
			id: 1,
			name: 'Microcredential Project',
			tag: 'Expanding access to digital learning resources',
			info: 'This project aimed to expand access to education and professional development in the areas of diversity, equity, inclusion (DEI), mass atrocity prevention, and workplace collaboration and communication. SPEC brought in individuals from diverse backgrounds to develop a series of mini-courses aimed at building these sought-after skills.',
			pic: {
				alt: 'mircocred-image',
				url: microcredSnap,
			},
			linkLine: 'View Project Details >>',
			link: '/microcredentials',
		},
		{
			id: 2,
			name: 'Gaming Project',
			tag: 'Socio-cultural game-based learning',
			info: "The aim of this project, funded by RAND's Center to Advance Racial Equity Policy, is to engage and educate the public on topics related to racial equity policy through socio-cultural game-based learning.",
			pic: {
				alt: 'meeple-image',
				url: meepleSnap,
			},
			linkLine: 'View Project Details >>',
			link: '/socio-cultural-gaming',
		},
		{
			id: 3,
			name: 'Digital Expressions Gallery',
			tag: 'Digital Expressions of Mass Incarceration Online Gallery',
			info: 'Incarceration can be a particularly traumatizing experience for LGBTQ+ individuals. Studies of prison art programs suggest that artistic activities have several benefits for prisoner rehabilitation and institutional management. This gallery of work by LGBTQ+ incarcerated artists was produced during the CAREP/SPEC partnership in collaboration with advocacy group ABO Comix.',
			pic: {
				alt: 'digital-gallery-image',
				url: digitalGallerySnap,
			},
			linkLine: 'Visit the Gallery >>',
			link: 'https://medium.com/journal-of-engaged-research/expressions/home',
		},
		{
			id: 4,
			name: 'Journal of Engaged Research',
			tag: 'Sharing Knowledge. Building Communities.',
			info: 'The diversity of the publishing sector does not reflect that of the US population. The Journal of Engaged Research (JoER) elevates the perspectives of emerging scholars, students, artists and activists from historically marginalized groups. During the CAREP/SPEC partnership, collaborators from the Pardee RAND Graduate School, Wabash College and a CAREP Public Discourse Fellow worked with the co-editors of JoER to publish articles.',
			pic: {
				alt: 'JoER-image',
				url: joERSnap,
			},
			linkLine: 'Visit the Journal >>',
			link: 'https://medium.com/journal-of-engaged-research',
		},
		{
			id: 5,
			name: 'Impact Website',
			tag: 'Created with love through a partnership with Of Ash and Fire',
			info: 'This website was designed with love by Ilia de Leon. Nan Eileen Mead headed content creation. The site was built from scratch by development RA’s Crystal Shamsi, Yoline Banerjee, and Victoria Lo. Their process was graciously guided through a partnership with Of Ash and Fire. The site is hosted on GitHub and is open source.',
			pic: {
				alt: 'real-time-collaboration-image',
				url: realTimeCollaborationSnap,
			},
			linkLine: 'View the Github Repository >>',
			link: 'https://github.com/specollective/spec-website',
		},
	];

	return (
		<div className="bg-spec-black-600 font-Poppins p-10 md:p-20 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 md:m-auto">
			<h2 className="text-6xl md:text-10xl font-bold mb-10 text-center">Projects</h2>

			<section className="grid xs:grid-cols-1 md:grid-cols-11 text-spec-yellow-600 font-medium items-center">
				<h3 className="text-center md:col-span-3 text-lg basis-1/3">CAREP Pillar I - Methods and Action </h3>
				<span className="xs:hidden md:inline-block rounded-full bg-spec-white-600 h-1.5 w-1.5 align-middle place-self-center"></span>

				<h3 className="text-center md:col-span-3 text-lg basis-1/3">CAREP Pillar II - Dialogue and Change</h3>
				<span className="xs:hidden md:inline-block rounded-full bg-spec-white-600 h-1.5 w-1.5 align-middle place-self-center"></span>

				<h3 className="text-center md:col-span-3 text-lg basis-1/3">CAREP Pillar III - Policy Leadership</h3>
			</section>

			<p className="py-4 md:20 text-lg text-center">
				Embodying all three pillars while moving through the project phase allowed the SPEC and CAREP teams to learn and
				grow while creating tangible deliverables that will accelerate learning and up-skilling in pertinent knowledge
				areas.
			</p>

			<ProjectsAccordion projectsData={projectsData} />
		</div>
	);
}

export default ProjectsSection;
