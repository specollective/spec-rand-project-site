import Head from "next/head";
import TopHeroComponent from "../components/TopHeroComponent";
import OrgSection from "../components/OrgSection";
import ResearchArticle from "../components/researchArticle";
import ProjectsSection from "../components/ProjectsSection";
import MeetRAs from "../components/MeetRAsSection";
import ByTheNumbers from "../components/byTheNumbers";
import ReflectionCarousel from "../components/reflection-carousel";
import ScrollButton from "../components/scroll-button";
import { microcredentialsObjList } from "../components/content/carouselContent";
import { profileData } from "../components/content/profileContent";
import RaSquares from '../components/RaSquares';

export default function Home() {
  return (
    <section className="bg-spec-blue-600">
      <Head>
        <title>Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeroComponent />
      <OrgSection />
      <ResearchArticle />
      <ProjectsSection />
      <div className="bg-spec-teal-600 xs:p-6 md:px-24 md:py-12">
        <RaSquares profileData={profileData}/>
      </div>
      <ByTheNumbers />
      <section className="bg-spec-teal-600 flex mt-6 px-8 py-12 justify-center">
        <ReflectionCarousel
          reflectionObjList={microcredentialsObjList}
          borderColor="spec-yellow-600"
        />
      </section>
      <ScrollButton />
    </section>
  );
}
