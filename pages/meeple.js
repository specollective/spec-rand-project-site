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
        <Image src={MeepleMetaverse} alt="meeple hero" />
      </div>


      <Subfooter />
    </section>
  );
};

export default MeeplePage;
