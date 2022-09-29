import Image from "next/image";
import Head from "next/head";
import Subfooter from "../components/sub-footer";
import ReflectionCarousel from "../components/reflection-carousel";
import StatBox from "../components/stat-box";
import { microcredentialsObjList } from "../components/content/carouselContent";
import squiggle from "../public/squiggle.svg";
import microHeaderImg from '../public/microcredential_dev_img.svg';
import BreakLine from "../components/break-line";
import MicroCredentialRASquares from "../components/MicroCredentialRASquares";
import { MicroCredentialRASquareContent } from "../components/content/RASquares/RASquareContent";

const MicroCredentialPage = () => {
  return (
    <section className="bg-spec-black-600">
      <Head>
        <title>
          Microcredentials | Sustainable Progress Equality Collective
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-spec-black-600'>
        <div className='px-20 text-center'>
          <Image layout="responsive" src={microHeaderImg} />
        </div>
      </div>

      <div className="grid justify-center place-items-center">
        <h1 className="font-bold text-4xl mt-10">Microcredential Development</h1>
        <p>Project</p>
      </div>

      <div className="grid m-10 px-20 md:px-40 md:m-20">
        <h1 className="justify-start text-spec-yellow-600 font-extrabold text-4xl leading-relaxed">
          Intro
        </h1>
        <div className="pl-20">
          <p className="text-spec-white-600">
            The COVID19 pandemic has highlighted existing disparities in access
            to computer and communication technologies. The effect of the
            pandemic and challenges with remote-learning on students from
            underserved communities will undoubtedly have a lasting impact. In
            face of these challenges, new education research and technological
            developments present potential pathways forward to foster equity in
            the classroom.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center m-10 md:m-20">
        <div className="pl-20 justify-end">
          <Image src={squiggle} alt="squiggly-line" />
        </div>
        <div className="mb-20">
          <h1 className="text-spec-yellow-600 font-bold text-4xl md:pl-20 md:pr-40 leading-relaxed">
            Problem Statement
          </h1>
          <p className="text-spec-white-600">
            RAND CAREP requires a learning platform capable of scaling to
            hundreds to thousands of adopting institutions and millions of
            learners.
          </p>
        </div>
      </div>

      <div className="grid m-10 md:m-20">
        <h1 className="justify-start text-spec-yellow-600 font-bold text-4xl px-20 md:px-40 leading-relaxed">
          Solution
        </h1>
        <div className="pl-20">
          <p className="text-spec-white-600 px-30 md:px-40">
            SPEC will take a multimethodological approach to developing the
            learning platform and microcredentials.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 m-10 md:m-20">
        <div>
          <h1 className="text-spec-yellow-600 font-bold text-4xl md:px-40 leading-relaxed">
            Project Goals &amp; Objectives
          </h1>
        </div>
        <p>
          <ol className="list-decimal">
            <li>
              Create new learning programs in the areas of DEI and Mass Atrocity
              Prevention that are designed for CAREP’s internal stakeholders
            </li>
            <li>
              Create new learning programs in the area of professional
              development that are designed for use by educational organizations
              that use Moodle
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
        </p>
      </div>

      <div className="grid place-content-center">
        <h1 className="text-4xl font-bold text-spec-turquoise-600 mb-5">
          Impact
        </h1>
        <p className="text-white">
          <ul className="list-disc pl-7">
            <li># of OC contributions</li>
            <li>Upskilling in Moodle</li>
            <li>Boost resumes</li>
          </ul>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 align-items-center justify-items-center bg-spec-black-600 md:p-10">
        <div className="cols-span-1 md:justify-self-end md:pr-4">
          <div className="text-4xl font-bold text-spec-yellow-600 mb-5">
            <h1 className="text-center md:text-left mb-5 md:w-24">
              At a Glance
            </h1>
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
        <div className="cols-span-1 md:justify-self-start md:pl-4">
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
      <div className="flex justify-center bg-spec-black-600">
        <StatBox
          borderColor="spec-yellow-600"
          height="h-48"
          width="md:w-3/4"
          statColor="spec-turquoise-600"
          inputStat="6500+"
        >
          <p>
            Research Associates (RAs) placed at jobs; externally or through SPEC
          </p>
        </StatBox>
      </div>

      <div className="grid m-10 md:m-20">
        <h1 className="justify-start text-spec-yellow-600 font-bold text-4xl px-20 md:px-40 leading-relaxed">
          The Team
        </h1>
        <div className="">
          <MicroCredentialRASquares
           MicroCredentialRASquareContent={MicroCredentialRASquareContent}
          />
        </div>
      </div>

      <BreakLine></BreakLine>

      <section className="flex my-12 justify-center">
        <ReflectionCarousel
          reflectionObjList={microcredentialsObjList}
          borderColor="spec-turquoise-600"
        />
      </section>
      <Subfooter />
    </section>
  );
};

export default MicroCredentialPage;
