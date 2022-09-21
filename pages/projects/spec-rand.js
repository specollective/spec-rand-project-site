import Overview from './overview';
import Article from './article';
import Projects from './projects';
import MeetRAs from './meet-ras';
import ByTheNumbers from './by-the-numbers';
import WhereNow from './where-are-they-now';
import NavBar from './navbar'
import Footer from './footer'
import Footnote from '../../components/foot-note';
import Reflections from './reflections';
import ReflectionCarousel from '../../components/reflection-carousel';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className="">
        { children }
      </main>
      <Footer />
    </div>

  )
}

export default function SpecXRandPage() {
  return (
    <>
      <Layout >
        <Overview />
        <Article />
        <Projects />
        <MeetRAs />
        <ByTheNumbers />
        <WhereNow />
        {/* <Reflections /> */}
        <ReflectionCarousel />
        <Footnote />
      </Layout>
    </>
  );
}