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
import yoline from "../../public/yoline_sm_bubble.svg";
import crystal from "../../public/crystal_sm_bubble.svg";


const reflectionObjList = [
  {
    name: "Yoline Banerjee",
    image: yoline,
    quote:
      "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
    title: "Research Associate",
  },
  {
    name: "Crystal Shamsi",
    image: crystal,
    quote:
      "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
    title: "Research Associate",
  },
  {
    name: "Yoline Banerjee",
    image: yoline,
    quote:
      "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
    title: "Research Associate",
  },
  {
    name: "Crystal Shamsi",
    image: crystal,
    quote:
      "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
    title: "Research Associate",
  },
];

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
        <Reflections />
        <ReflectionCarousel reflectionObjList={reflectionObjList} />
        <Footnote />
      </Layout>
    </>
  );
}