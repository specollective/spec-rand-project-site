import Head from 'next/head';
import ByTheNumbers from '../components/byTheNumbers';
import OrgSection from '../components/OrgSection';
import ProjectsSection from '../components/ProjectsSection';
import MeetRAsSection from '../components/MeetRAsSection';
import ReflectionCarousel from '../components/reflection-carousel';
import ResearchArticle from '../components/researchArticle';
import Subfooter from '../components/sub-footer';
import TopHeroComponent from '../components/TopHeroComponent';
import { reflectionObjList } from '../components/content/carouselContent';
import { profileData } from '../components/content/profileContent';

export default function Home() {
	return (
		<section className="bg-spec-blue-600">
			<Head>
				<title>Sustainable Progress Equality Collective</title>
				<link rel="icon" type="image/png" href="/favicon-16x16.png"/>
			</Head>
			<TopHeroComponent />
			<OrgSection />
			<ResearchArticle />
			<ProjectsSection />
      <MeetRAsSection />
			<ByTheNumbers />
			<section className="bg-spec-teal-600 flex mt-6 px-8 py-12 justify-center">
				<ReflectionCarousel reflectionObjList={reflectionObjList} borderColor="spec-yellow-600" />
			</section>
			<Subfooter color="spec-teal-600"/>
		</section>
	);
}
