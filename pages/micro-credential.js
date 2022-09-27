import Head from "next/head";
import Subfooter from "../components/sub-footer";
import ReflectionCarousel from "../components/reflection-carousel";
import StatBox from "../components/stat-box";
import { microcredentialsObjList } from "../components/content/carouselContent";

const MicroCredentialPage = () => {
  return (
    <section className="bg-spec-black-600">
      <Head>
        <title>
          Microcredentials | Sustainable Progress Equality Collective
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Microcredential Page</h1>
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
      <section className="flex my-12 justify-center">
        <ReflectionCarousel
          reflectionObjList={microcredentialsObjList}
          borderColor="spec-turquoise-600"
        />
      </section>
    </section>
  );
};

export default MicroCredentialPage;
