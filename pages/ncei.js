import Head from "next/head";
import Image from "next/image";
import BreakLine from '../components/break-line';
import MeepleMetaverse from "../public/MeepleMetaverse.svg";
import Meeples from "../public/meeples.svg";
import ReflectionCarousel from "../components/reflection-carousel";
import {reflectionObjList} from "../components/content/carouselContent";
import MeepleLoading from '../components/MeepleLoading';
import { profileData } from "../components/content/profileContent";
import RaSquares from "../components/RaSquares";
import Subfooter from '../components/sub-footer';

const NationalCoaltionEquityImpactPage = () => {
  // const microCredentialProfiles = profileData.filter((profile) => {
  //   return profile.projects.find(project => project.name === "gamingProj")
  // })
  return (
    <section className="bg-spec-black-600">
      <Head>
        <title>Meeple | Sustainable Progress Equality Collective</title>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      </Head>
      <div className="p-12 bg-spec-black-600 text-center">
        <div className="pb-8 lg:py-32">
          <Image src={MeepleMetaverse} alt="meeple hero" />
        </div>
        <div className="md:grid md:grid-cols-2 lg:px-24 xl:px-60 text-left">
          <h1 className="pb-8 px-8 xs:text-center md:text-left text-5xl text-spec-yellow-600">
            Intro
          </h1>
          <p>
            Conversations of racial and gender equity are advancing to the
            forefront in the living room and the boardroom. The collective
            consciousness around systemic inequities and identity has expanded.
            To meet this expansion, Diversity, Equity, and Inclusion (DEI) work
            across sectors has exploded, as has the number of practitioners
            engaging in DEI work. NCEI was formed to create a community of
            people who want to change the world!
          </p>
        </div>
        <div>
          <div className="text-center">
            <Image src={Meeples} alt="meeples" />
          </div>
        </div>
        <div className="py-20 md:grid md:grid-cols-2 lg:px-24 xl:px-60 text-left">
          <h1 className="pb-8 px-8 text-5xl xs:text-center md:text-left text-spec-yellow-600">
            Project Overview
          </h1>
          <div>
            <p>
              Conversations of racial and gender equity are advancing to the
              forefront in the living room and the boardroom. The collective
              consciousness around systemic inequities and identity has
              expanded. To meet this expansion, Diversity, Equity, and Inclusion
              (DEI) work across sectors has exploded, as has the number of
              practitioners engaging in DEI work. NCEI was formed to create a
              community of people who want to change the world!
            </p>
          </div>
        </div>
        <MeepleLoading />
      </div>

      <BreakLine lineWidth="96" lineHeight="1" color="spec-white-600" />

      <section className="flex my-12 justify-center">
        <ReflectionCarousel
          reflectionObjList={reflectionObjList}
          borderColor="spec-turquoise-600"
        />
      </section>

      <Subfooter />
    </section>
  );
};

export default NationalCoaltionEquityImpactPage;
