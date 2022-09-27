import Head from 'next/head'
import Subfooter from '../components/sub-footer'
import ReflectionCarousel from '../components/reflection-carousel'

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

const MicroCredentialPage = () => {
  return (
    <section>
      <Head>
        <title>Microcredentials | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Microcredential Page</h1>
      <ReflectionCarousel
        reflectionObjList={reflectionObjList}
        borderColor="spec-turquoise-600"
        />

    </section>

  )
}

export default MicroCredentialPage