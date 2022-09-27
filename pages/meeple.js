import Head from "next/head";
import Image from 'next/image'
import MeepleMetaverse from '../public/MeepleMetaverse.svg'
import Meeples from '../public/meeples.svg'
import MeepleBlue from '../public/meeple_blue_character.svg'
import MeepleGray from '../public/meeple_gray_character.svg'
import MeepleCheck from '../public/meeple_checkmark.svg'
import MeepleBullet from '../public/meeple_bullet.svg'

const MeeplePage = () => {
  const meepleCheckmark = <div className="text-center inline-block pr-2"><Image width={20} height={20} src={MeepleCheck} /></div>
  const meepleBullet = <div className="inline-block align-middle pr-2"><Image width={20} height={20} src={MeepleBullet} /></div>

  return (
    <section>
      <Head>
        <title>Meeple | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-auto p-12 bg-spec-black-600 text-center">
        <div className="pb-8 lg:py-32">
          <Image src={MeepleMetaverse} alt="meeple hero" />
        </div>
        <div className="md:grid md:grid-cols-2 lg:px-24 xl:px-60 text-left">
          <h1 className="pb-8 px-8 xs:text-center md:text-left text-5xl font-extrabold text-spec-yellow-600">Project Overview</h1>
          <p>The aim of this project, funded by RAND's Center to Advance Racial Equity Policy, is to engage and educate the public on topics related to racial equity policy through socio-cultural game-based learning This involves developing a site that will host original, web-based minigames and interactives highlighting key learnings from RAND racial equity research.</p>
        </div>
        <div>
          <h1 className="pt-20 text-5xl font-extrabold text-spec-turquoise-600">Goals</h1>
          <div className="py-12 md:px-60 lg:px-60 xl:px-96 text-left">
            <p>• Develop socio-cultural minigames based on RAND research on racial equity </p>
            <p>• Develop a new methodological framework that is equity centered </p>
            <p>• Assess the immediate impact of game-based learning to create awareness of equity policy.</p>
          </div>
            <div className="text-center">
              <Image src={Meeples} alt="meeples" />
            </div>
        </div>
        <div className="py-20 md:grid md:grid-cols-2 lg:px-24 xl:px-60 text-left">
          <h1 className="pb-8 px-8 text-5xl xs:text-center md:text-left font-extrabold text-spec-yellow-600">Learning Objectives</h1>
          <div>
            <p>• To have a self-directed learning experience on certain racial equity issues</p>
            <p>• To inspire individuals to take actions to better their communities</p>
            <p>• To create self-awareness of unconscious biases</p>
            <p>• To learn about policy solutions/recommendation that improve racial equity</p>
          </div>
        </div>

        <div>
          <div className="p-8 text-center text-spec-turquoise-600 text-5xl font-extrabold">
            Loading...
          </div>

          <div className="md:px-36 lg:grid lg:grid-cols-3 pt-8">
            <div>
              <Image src={MeepleBlue} alt="meeple one" />
              <h1 className="pt-4 text-2xl font-bold">Phase 1: Complete</h1>
              <div className="lg:px-6 text-left">
                <div className="justify-center p-6">
                  <p className="py-2">{meepleCheckmark}Identify goals & objectives</p>
                  <p className="py-2">{meepleCheckmark}Literature review on RAND research</p>
                  <p className="py-2">{meepleCheckmark}Selection of game topic</p>
                  <p className="py-2">{meepleCheckmark}Selection of game mechanic</p>
                  <p className="py-2">{meepleCheckmark}Produced a development process</p>
                </div>
              </div>
            </div>

            <div>
              <Image src={MeepleGray} alt="meeple one" />
              <h1 className="text-2xl font-bold pt-4">Phase 2</h1>
              <div className="lg:px-6 text-left">
                <div className="justify-center p-6 text-base">
                  <p className="py-2">{meepleCheckmark}Game design direction </p>
                  <p className="py-2">{meepleCheckmark}Create moodboards for look and feel</p>
                  <p className="py-2">{meepleCheckmark}Produce UI wireframes</p>
                  <p className="py-2">{meepleBullet}Finalize Meeple artwork</p>
                  <p className="py-2">{meepleBullet}Content development</p>
                </div>
              </div>
            </div>

            <div>
              <Image src={MeepleGray} alt="meeple one" />
              <h1 className="text-2xl font-bold pt-4">Phase 3</h1>
              <div className="lg:px-6 text-left">
                <div className="justify-center p-6 text-base">
                  <p className="py-2">{meepleBullet}Game design direction </p>
                  <p className="py-2">{meepleBullet}Create moodboards for look and feel</p>
                  <p className="py-2">{meepleBullet}Produce UI wireframes</p>
                  <p className="py-2 text-xl font-bold">{meepleBullet}GAME ONE LAUNCH!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeeplePage;
