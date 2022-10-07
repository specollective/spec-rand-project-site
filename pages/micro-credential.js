import Image from 'next/image';
import Head from 'next/head';
import Subfooter from '../components/sub-footer';
import ReflectionCarousel from '../components/reflection-carousel';
import StatBox from '../components/stat-box';
import { microcredentialsObjList } from '../components/content/carouselContent';
import squiggle from '../public/squiggle.svg';
import microHeaderImg from '../public/microcredential_hero.svg';
import BreakLine from '../components/break-line';
import { profileData } from '../components/content/profileContent';
import RaSquares from '../components/RaSquares';

const MicroCredentialPage = () => {
	const microCredentialProfiles = profileData.filter(profile => {
		return profile.projects.find(project => project.name === 'microcredenital');
	});
	return (
		<section className="bg-spec-black-600">
			<Head>
				<title>Microcredentials | Sustainable Progress Equality Collective</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="hidden md:block">
				<Image layout="responsive" src={microHeaderImg} />
			</section>

			<section className="md:hidden text-center px-5 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl md:m-auto">
				<h1 className="font-bold text-4xl mt-10">
					Microcredential Development <br />
					<small className="text-md font-thin">Project</small>
				</h1>
			</section>

			<section className="px-8 py-4 mb-10 grid md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl md:m-auto">
				<div>
					<h2 className="md:justify-start text-spec-yellow-600 font-extrabold text-4xl md:text-5xl leading-relaxed">
						Intro
					</h2>
				</div>
				<div>
					<p className="text-spec-white-600">
						The COVID19 pandemic has highlighted existing disparities in access to computer and communication
						technologies. The effect of the pandemic and challenges with remote-learning on students from underserved
						communities will undoubtedly have a lasting impact. In face of these challenges, new education research and
						technological developments present potential pathways forward to foster equity in the classroom.
					</p>
				</div>
			</section>

			<section className="px-8 mb-10 lg:flex md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl md:m-auto">
				<div className="justify-end pr-20">
					<Image src={squiggle} alt="squiggly-line" />
				</div>

				<div>
					<h2 className="text-left font-bold text-4xl md:text-5xl md:pr-40 leading-relaxed text-spec-yellow-600">
						Problem Statement
					</h2>
					<p className="text-spec-white-600">
						RAND CAREP requires a learning platform capable of scaling to hundreds to thousands of adopting institutions
						and millions of learners.
					</p>
				</div>
			</section>

			<section className="grid px-8 mb-10 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl md:m-auto">
				<h2 className="text-left font-bold text-4xl md:text-5xl md:pr-40 leading-relaxed text-spec-yellow-600">
					Solution
				</h2>
				<p className="text-spec-white-600">
					SPEC will take a multimethodological approach to developing the learning platform and microcredentials.
				</p>
			</section>

			<section className="lg:flex px-8 mb-10 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl md:m-auto">
				<div>
					<span className="text-left font-bold text-4xl md:text-5xl md:pr-40 leading-relaxed text-spec-yellow-600">
						Project Goals &amp; Objectives
					</span>
				</div>
				<div className="px-6">
					<ol className="list-decimal">
						<li>
							Create new learning programs in the areas of DEI and professional development designed for CAREP's
							internal stakeholders
						</li>
						<li>
							Create new learning programs in the areas of DEI and professional development that are designed for use by
							educational organizations that use Moodle
						</li>
					</ol>
				</div>
			</section>

			<section className="lg:flex px-8 mb-10 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl md:m-auto">
				<div className="grid place-content-center">
					<span className="text-4xl md:text-5xl font-bold text-spec-turquoise-600 mb-5">Impact</span>
					<p className="text-white">
						The project allowed RA's from underrepresented backgrounds to create course content and implement the
						courses in the Moodle Platform. The content team worked collaboratively, building research and editing
						skills. The development team worked in the back end of the Moodle platform and gained valuable Learning
						Management System (LMS) experience. All have gained transferable skills that will boost their resumes.
					</p>
				</div>
			</section>

			<section className="px-8 mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-4 justify-items-center items-center bg-spec-black-600 md:p-10 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl md:m-auto">
				<h2 className="text-4xl md:text-5xl font-bold text-spec-yellow-600">At a Glance</h2>
				<StatBox
					className="md:row-start-2 md:row-span-2 max-w-[24rem]"
					borderColor="spec-yellow-600"
					height="h-96"
					width="w-full"
					statColor="spec-turquoise-600"
					inputStat="6"
				>
					<p>Microcredentials created:</p>
					<ul className="list-disc text-left pl-10">
						<li>Cultural Mediation</li>
						<li>Intro to Moodle for Learners</li>
						<li>Anti-Racism 1.0</li>
						<li>Intercultural Competency 1.0</li>
						<li>Office Street Smarts</li>
						<li>Mentoring</li>
					</ul>
				</StatBox>
				<StatBox
					className="max-w-[24rem]"
					borderColor="spec-yellow-600"
					height="h-48"
					width="w-full"
					statColor="spec-turquoise-600"
					inputStat="1"
				>
					<p>Learning Management System (LMS)</p>
				</StatBox>
				<StatBox
					className="max-w-[24rem]"
					borderColor="spec-yellow-600"
					height="h-48"
					width="w-full"
					statColor="spec-turquoise-600"
					inputStat="8"
				>
					<p>Research Associates (RAs) worked on this project</p>
				</StatBox>
				<StatBox
					className="max-w-[24rem]"
					borderColor="spec-yellow-600"
					height="h-48"
					width="w-full"
					statColor="spec-turquoise-600"
					inputStat="41"
				>
					<p>participants enrolled in courses</p>
				</StatBox>
				<StatBox
					className="md:col-span-2 xs:max-w-[24rem] md:max-w-full"
					borderColor="spec-yellow-600"
					height="h-48"
					width="w-full"
					statColor="spec-turquoise-600"
					inputStat="6500+"
				>
					<p>data points collected</p>
				</StatBox>
			</section>

			<section className="grid px-8 mb-10">
				<h2 className="text-center text-spec-yellow-600 font-bold text-4xl px-20 md:px-40 leading-relaxed">The Team</h2>
				<div className="">
					<RaSquares profileData={microCredentialProfiles} />
				</div>
			</section>

			<BreakLine lineWidth="96" lineHeight="1" color="spec-white-600" />

			<section className="flex my-12 justify-center">
				<ReflectionCarousel reflectionObjList={microcredentialsObjList} borderColor="spec-turquoise-600" />
			</section>
			<Subfooter />
		</section>
	);
};

export default MicroCredentialPage;
