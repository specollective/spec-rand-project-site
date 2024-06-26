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

const SocialCulturalGamingPage = () => {
  const microCredentialProfiles = profileData.filter((profile) => {
    return profile.projects.find(project => project.name === "gamingProj")
  })
  return (
    <section className="bg-spec-black-600">
      <Head>
        <title>Meeple | Sustainable Progress Equality Collective</title>
        <link rel="icon" type="image/png" href="/favicon-16x16.png"/>
      </Head>
      <div className="p-12 bg-spec-black-600 text-center">
        <div className="pb-8 lg:py-32">
          <Image src={MeepleMetaverse} alt="meeple hero" />
        </div>
        <div className="md:grid md:grid-cols-2 lg:px-24 xl:px-60 text-left">
          <h1 className="pb-8 px-8 xs:text-center md:text-left text-5xl text-spec-yellow-600">
            Project Overview
          </h1>
          <p>
            The aim of this project, funded by RAND's Center to Advance Racial
            Equity Policy, is to engage and educate the public on topics related
            to racial equity policy through socio-cultural game-based learning
            This involves developing a site that will host original, web-based
            minigames and interactives highlighting key learnings from RAND
            racial equity research.
          </p>
        </div>
        <div>
          <h1 className="pt-20 text-5xl font-extrabold text-spec-turquoise-600">Goals</h1>
          <div className="py-12 md:px-60 lg:px-60 xl:px-96 text-left">
            <p>
              • Develop socio-cultural minigames based on RAND research on
              racial equity
            </p>
            <p>
              • Develop a new methodological framework that is equity centered
            </p>
            <p>
              • Assess the immediate impact of game-based learning to create
              awareness of equity policy.
            </p>
          </div>
          <div className="text-center">
            <Image src={Meeples} alt="meeples" />
          </div>
        </div>
        <div className="py-20 md:grid md:grid-cols-2 lg:px-24 xl:px-60 text-left">
          <h1 className="pb-8 px-8 text-5xl xs:text-center md:text-left text-spec-yellow-600">
            Learning Objectives
          </h1>
          <div>
            <p>
              • To have a self-directed learning experience on certain racial
              equity issues
            </p>
            <p>
              • To inspire individuals to take actions to better their
              communities
            </p>
            <p>• To create self-awareness of unconscious biases</p>
            <p>
              • To learn about policy solutions/recommendation that improve
              racial equity
            </p>
          </div>
        </div>
        <MeepleLoading />

      <div className="grid m-10 md:m-20">
        <h2 className="justify-start text-spec-yellow-600 font-bold text-4xl px-20 md:px-40 leading-relaxed text-left">
          The Team
        </h2>
        <div>
          <RaSquares
            profileData={microCredentialProfiles}
          />
        </div>
      </div>

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

export default SocialCulturalGamingPage;
