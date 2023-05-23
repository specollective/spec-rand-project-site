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
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
        <meta property="og:title" content="SPEC CAREP website" />
        <meta property="og:url" content="https://carep.specollective.org/" />
        <meta property="og:image" content="/TwitterPost.png" />
        <meta name="twitter:card" content="/TwitterPost.png" />
        <meta
          property="og:description"
          content="SPEC and the RAND Corporation Center to Advance Racial Equity Policy established a two year partnership centered on digital educational initiatives,"
        />
      </Head>
      <TopHeroComponent />
      <OrgSection />
      <ResearchArticle />
      <ProjectsSection />
      <MeetRAsSection />
      <ByTheNumbers />
      <section className="bg-spec-teal-600 flex mt-6 px-8 py-12 justify-center">
        <ReflectionCarousel
          reflectionObjList={reflectionObjList}
          borderColor="spec-yellow-600"
        />
      </section>
      <Subfooter color="spec-teal-600" />
    </section>
  );
}
