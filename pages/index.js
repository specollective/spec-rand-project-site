import Head from 'next/head';
import TopHeroComponent from '../components/TopHeroComponent';
import OrganizationSection from '../components/OrganizationSection';
import ResearchMethodsArticle from '../components/ResearchMethodsArticle';
import ProjectsSection from '../components/ProjectsSection';
import MeetTheRAsSection from '../components/MeetTheRAsSection';
import ByTheNumbersSection from '../components/ByTheNumbersSection';
import ReflectionsSection from '../components/ReflectionsSection';

export default function Home() {
  return (
    <section className="bg-spec-blue-600">
      <Head>
        <title>Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeroComponent />
      <OrganizationSection />
      <ResearchMethodsArticle />
      <ProjectsSection />
      <MeetTheRAsSection />
      <ByTheNumbersSection />
      <ReflectionsSection />
    </section>
  );
}
