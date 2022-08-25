import Overview from './overview';
import Article from './article';
import Projects from './projects';
import MeetRAs from './meet-ras';
import ByTheNumbers from './by-the-numbers';
import WhereNow from './where-are-they-now';
import Testimonials from './testimonials';

export default function SpecXRandPage() {
  return (
    <div className="">
      <div>"nav bar"</div>
      <Overview />
      <Article />
      <Projects />
      <MeetRAs />
      <ByTheNumbers />
      <WhereNow />
      <Testimonials />
      <footer className="bg-spec-yellow-600">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  );
}