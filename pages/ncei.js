import Head from "next/head";
import Image from "next/image";
import BreakLine from "../components/break-line";
import { profileData } from "../components/content/profileContent";
import NCEI from "../public/NCEI.svg";
import NCEILogo from "../public/NCEI_Logo_Transparent.svg";
import NCEIGroup from "../public/NCEI_group.svg";
import designDraft1 from "../public/designDraft1.svg";
import designDraft2 from "../public/designDraft2.svg";
import RaSquares from "../components/RaSquares";
import Subfooter from "../components/sub-footer";

const NationalCoaltionEquityImpactPage = () => {
  const nceiProfiles = profileData.filter((profile) => {
    return profile.projects.find(project => project.name === "NCEIProj")
  })
  return (
    <section className="bg-spec-black-600">
      <Head>
        <title>Meeple | Sustainable Progress Equality Collective</title>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      </Head>

      <div className="p-12 bg-spec-black-600 text-center">
        <div className="pb-8 lg:py-32">
          <Image src={NCEI} alt="NCEI logo" />
        </div>
        <div className="md:grid md:grid-cols-2 lg:p-24 xl:p-40 text-left">
          <div className="text-center">
            <Image src={NCEIGroup} alt="meeples" />
          </div>
          <div>
            <h1 className="pb-8 px-8 xs:text-center md:text-left text-5xl text-spec-yellow-600 font-bold">
              Intro
            </h1>
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

        <div className="py-20 md:grid md:grid-cols-2 lg:p-24 xl:p-60 text-left">
          <h1 className="pb-8 px-8 text-5xl xs:text-center md:text-left text-spec-yellow-600 font-bold">
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

        <div className="py-20 lg:p-24 xl:p-24">
          <h1 className="pb-8 px-8 text-5xl xs:text-center md:text-center text-spec-yellow-600 font-bold">
            Logo Design
          </h1>
          <div className="py-20 md:grid md:grid-cols-2 lg:px-24 xl:px-60 text-left">
            <div className="flex flex-col justify-center items-center ">
              <Image src={NCEILogo} alt="NCEILogo" />
            </div>

            <div className="flex flex-col justify-center items-center lg:px-14 xl:px-14">
              <p>
                Inspired by the Seventh Generation Principle to promote true
                sustainability.{" "}
              </p>
              <p className="mt-6">
                The Seventh Generation Principle is an Indigenous Concept, to
                think of the 7th generation coming after you in your words, work
                and actions, and to remember the seventh generation who came
                before you.
              </p>

              <ul className="list-disc mt-6">
                <li>Roots signify the 7 generations before us</li>
                <li>Branches signify the 7 generations ahead of us</li>
                <li>
                  {" "}
                  Colorful leaves representing the people we are uniting and
                  impacting
                </li>
              </ul>

              <p className="mt-6">
                To learn more about this concept, follow this link:
                <a
                  href="https://fisherpub.sjf.edu/cgi/viewcontent.cgi?article=1278&context=education_etd"
                  className="underline underline-offset-0"
                >
                  Lyman-Wright, K. (2016). A Survey of the Educational Practices
                  of the Haudenosaunee Confederacy and the Implications for
                  Cultural Sovereignty.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:p-24 xl:p-60">
        <h1 className="pb-8 px-8 text-5xl xs:text-center md:text-center text-spec-yellow-600 font-bold">
          Design Drafts
        </h1>
        <div className="py-20 md:grid md:grid-cols-2 lg:px-24 xl:px-60">
         
          <Image src={designDraft1} alt="designDraft" />
      
            <Image src={designDraft2} alt="designDraft2" />
         
        </div>
      </div>

      <div className="grid m-10 md:m-20">
        <h2 className="justify-start text-spec-yellow-600 font-bold text-4xl px-20 md:px-40 leading-relaxed text-center">
          The Team
        </h2>
        <div>
          <RaSquares profileData={nceiProfiles} />
        </div>
      </div>

      <BreakLine lineWidth="96" lineHeight="1" color="spec-white-600" />

      {/* <section className="flex my-12 justify-center">
        <ReflectionCarousel
          reflectionObjList={reflectionObjList}
          borderColor="spec-turquoise-600"
        />
      </section> */}

      <Subfooter />
    </section>
  );
};

export default NationalCoaltionEquityImpactPage;
