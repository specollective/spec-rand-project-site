import Head from "next/head";
import Subfooter from "../components/sub-footer";
import Image from 'next/image'
import MeepleMetaverse from '../public/MeepleMetaverse.svg'

const MeeplePage = () => {
  return (
    <section>
      <Head>
        <title>Meeple | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div>
        BACK TO HOME LINK
      </div> */}

      <div className="w-screen h-auto p-12 bg-spec-black-600 text-center">
        <div className="py-8 lg:py-32">
          <Image src={MeepleMetaverse} alt="meeple hero" />
        </div>

        <div className="md:grid md:grid-cols-2 lg:px-24 xl:px-60 text-left">
          <h1 className="pb-8 px-8 xs:text-center md:text-left xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-spec-yellow-600">Project Overview</h1>
          <p>The aim of this project, funded by RAND's Center to Advance Racial Equity Policy, is to engage and educate the public on topics related to racial equity policy through socio-cultural game-based learning This involves developing a site that will host original, web-based minigames and interactives highlighting key learnings from RAND racial equity research.</p>
        </div>
      </div>


      <Subfooter />
    </section>
  );
};

export default MeeplePage;
