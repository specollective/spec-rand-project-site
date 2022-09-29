import Image from "next/image";
import SectionHeader from "../../components/section-header";
import TextContent from "../../components/text";
import SubHeader from "../../components/sub-header";
import ImageBubbles from "../../components/image-bubbles";
import Microcred from "../../public/microcredential_dev_img.svg"
import GridContainer from "../../components/grid-container";
import Footnote from "../../components/foot-note";
import marcus from "../../public/marcus_sm_bubble.svg";
import nan from "../../public/nan_sm_bubble.svg";
import alicia from "../../public/alicia_sm_bubble.svg";
import menoukha from "../../public/menoukha_sm_bubble.svg";
import joe_g from "../../public/joe_g_sm_bubble.svg";
import crystal from "../../public/crystal_sm_bubble.svg";
import yoline from "../../public/yoline_sm_bubble.svg";
import victoria from "../../public/victoria_sm_bubble.svg";
import ReflectionCarousel from "../../components/reflection-carousel";
import StatBox from "../../components/stat-box";

const teamList = [ marcus, nan, alicia, menoukha, joe_g, crystal, yoline, victoria ];

const reflectionObjList = [
    {
      name: "Marcus Steiner",
      image: marcus,
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
      name: "Nan Eileen Mead",
      image: nan,
      quote:
        "Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean.",
      title: "Research Associate",
    },
  ];



export default function Microcredentials() {
    return (
    <div className="bg-spec-black-600 justify-center content-center text-slate-100 font-medium md:px-44 pt-12">
        <SectionHeader className="text-center">Microcredential Development Project</SectionHeader>
        <div className="text-center p-8">
          <Image src={Microcred} alt="microcredentials" />
        </div>

        <GridContainer>
          <div>
            <SubHeader className="font-bold"> Introduction:</SubHeader>
            <TextContent>
              The COVID19 pandemic has highlighted existing disparities in
              access to computer and communication technologies. The effect of
              the pandemic and challenges with remote-learning on students from
              underserved communities will undoubtedly have a lasting impact. In
              face of these challenges, new education research and technological
              developments present potential pathways forward to foster equity
              in the classroom.
            </TextContent>
          </div>
          <div>
            <SubHeader className="font-bold">Problem Statement:</SubHeader>
            <TextContent>
              RAND CAREP requires a learning platform capable of scaling to
              hundreds to thousands of adopting institutions and millions of
              learners.
              <SubHeader className="font-bold"> Solution:</SubHeader>
              SPEC will take a multimethodological approach to developing the
              learning platform and microcredentials.
            </TextContent>
          </div>
        </GridContainer>

        {/* TO DO: figure out how to center this divider line, or keep the code in lines 53-57 */}
        {/* <div id="page-divider" className="flex items-center justify-center border-spec-yellow-600 border-t-4 w-3/5"></div> */}

        <div className="flex items-center py-4">
          <div className="flex-grow h-px w-1/5"></div>
          <span className="flex-grow border-spec-yellow-600 border-t-4 w-3/5"></span>
          <div className="flex-grow h-px w-1/5"></div>
        </div>

        <GridContainer>
          <div>
            <SubHeader className="font-bold">
              {" "}
              Project Goals & Objectives:
            </SubHeader>
            <TextContent>
              <ol className="list-decimal pl-7">
                <li>
                  Create new learning programs in the areas of DEI and Mass
                  Atrocity Prevention that are designed for CAREP’s internal
                  stakeholders
                </li>
                <li>
                  Create new learning programs in the area of professional
                  development that are designed for use by educational
                  organizations that use Moodle
                </li>
                <li>
                  Deliver new learning programs in the area of professional
                  development for CAREP’s internal stakeholders
                </li>
                <li>Expand access to educational game technologies</li>
                <li>
                  Establish a sustainable funding plan to continue research and
                  program development in the micro credential space
                </li>
              </ol>
            </TextContent>
          </div>
        </GridContainer>

        <div className="grid place-content-center">
          <h1 className="text-4xl font-bold text-spec-turquoise-600 mb-5"> Impact</h1>
          <p className="text-white">
            <ul className="list-disc pl-7">
              <li># of OC contributions</li>
              <li>Upskilling in Moodle</li>
              <li>Boost resumes</li>
            </ul>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 align-items-center justify-items-center bg-spec-black-600 p-10">
          <div className="cols-span-1">
            <div className="text-4xl font-bold text-spec-yellow-600 mb-5">
              <h1 className="mb-5">At a</h1>
              <h1 className="mb-5">Glance</h1>
            </div>
            <StatBox
              borderColor="spec-yellow-600"
              height="h-96"
              width="w-80"
              statColor="spec-turquoise-600"
              inputStat="6"
            >
              <p>Microcredentials created:</p>
              <ul className="list-disc text-left pl-10">
                <li>Cultural Mediation</li>
                <li>Intro to Moodle for Learners</li>
                <li>Anti-Racism 1.0</li>
                <li>Intercultural Competency 1.0</li>
                <li>Office Street Smarts</li>
                <li>Mentoring</li>
              </ul>
            </StatBox>
          </div>
          <div className="cols-span-1">
            <StatBox
              borderColor="spec-yellow-600"
              height="h-48"
              width="w-96"
              statColor="spec-turquoise-600"
              inputStat="1"
            >
              <p>Learning Management System (LMS)</p>
            </StatBox>
            <StatBox
              borderColor="spec-yellow-600"
              height="h-48"
              width="w-96"
              statColor="spec-turquoise-600"
              inputStat="8"
            >
              <p>Research Associates (RAs) worked on this project</p>
            </StatBox>
            <StatBox
              borderColor="spec-yellow-600"
              height="h-48"
              width="w-96"
              statColor="spec-turquoise-600"
              inputStat="41"
            >
              <p>participants enrolled in courses</p>
            </StatBox>
          </div>
        </div>
        <div className="grid grid-rows-1 place-items-center bg-spec-black-600">
          {/* place-content-center */}
          {/* justify-center */}
          {/* content-center */}

          <StatBox
            borderColor="spec-yellow-600"
            height="h-48"
            width="max-w-4xl"
            statColor="spec-turquoise-600"
            inputStat="6500+"
          >
            <p>
              Research Associates (RAs) placed at jobs; externally or through
              SPEC
            </p>
          </StatBox>
        </div>

        <SubHeader className="font-bold"> The Team:</SubHeader>
        {/* <ImageBubbles>
            <img
                src={marcus.src}
                alt="marcus"
            />
            <img
                src={nan.src}
                alt="nan"
            />
            <img
                src={alicia.src}
                alt="alicia"
            />
            <img
                src={menoukha.src}
                alt="menoukha"
            />
            <img
                src={joe_g.src}
                alt="joe_g"
            />
            <img
                src={crystal.src}
                alt="crystal"
            />
            <img
                src={yoline.src}
                alt="yoline"
            />
            <img
                src={victoria.src}
                alt="victoria"
            />
        </ImageBubbles> */}

        <ReflectionCarousel
          reflectionObjList={reflectionObjList}
          borderColor="spec-turquoise-600"
        />

        <Footnote />
      </div>
    );
}
