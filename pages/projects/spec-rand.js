import Overview from './overview';
import Article from './article';
import Projects from './projects';
import MeetRAs from './meet-ras';
import ByTheNumbers from './by-the-numbers';
import WhereNow from './where-are-they-now';
import Testimonials from './testimonials';
import NavBar from './navbar'
import Footer from './footer'

export default function SpecXRandPage() {
  return (
    <div className="">
      <NavBar />
      <Overview />
      <Article />
      <Projects />
      <MeetRAs />
      <ByTheNumbers />
      <WhereNow />
      <Testimonials />
      <Footer />
    </div>
  );
}