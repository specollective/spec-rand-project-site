import Head from 'next/head'
import Layout from '../components/Layout'
import TopHeroComponent from '../components/TopHeroComponent'
import OrgSection from '../components/OrgSection'
import ResearchMethodsArticle from '../pages/projects/article'
import Projects from '../pages/projects/projects'
import MeetRAs from '../pages/projects/meet-ras'
import ByTheNumbers from '../pages/projects/by-the-numbers'
import ReflectionCarousel from '../components/reflection-carousel'

export default function Home() {
  return (
    <div className="bg-spec-blue-600">
      <Head>
        <title>Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <TopHeroComponent />
          <OrgSection />
          <ResearchMethodsArticle />
          <Projects />
          <MeetRAs />
          <ByTheNumbers />
          {/* carousel will be added upon receiving data */}
          {/* <ReflectionCarousel /> */}
        </Layout>
      </main>

    </div>
  )
}
