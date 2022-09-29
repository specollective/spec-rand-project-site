import Head from "next/head";
import TopHeroComponent from "../components/TopHeroComponent";
import OrgSection from "../components/OrgSection";
import ResearchMethodsArticle from "../pages/projects/article";
import ProjectsSection from "../components/ProjectsSection";
import RaSquares from "../components/RaSquares";
import ByTheNumbers from "../pages/projects/by-the-numbers";
import ReflectionCarousel from "../components/reflection-carousel";
import { microcredentialsObjList } from "../components/content/carouselContent";

export default function Home() {
  return (
    <section className="bg-spec-blue-600">
      <Head>
        <title>Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeroComponent />
      <OrgSection />
      <ResearchMethodsArticle />
      <ProjectsSection />
      <RaSquares />
      <ByTheNumbers />
      <section className="bg-spec-teal-600 flex mt-6 px-8 py-12 justify-center">
        <ReflectionCarousel
          reflectionObjList={microcredentialsObjList}
          borderColor="spec-yellow-600"
        />
      </section>
    </section>
  );
}
