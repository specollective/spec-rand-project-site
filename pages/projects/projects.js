import Image from "next/image";
import meeples from "/public/projects_meeples.svg";
import microcredentials from "/public/projects_microcredentials.svg";
import impact from "/public/projects_SPECxCAREP.svg";
import yoline from "/public/yoline_sm_bubble.svg";
import victoria from "/public/victoria_sm_bubble.svg";
import crystal from "/public/crystal_sm_bubble.svg";
import ilia from "/public/ilia_sm_bubble.svg";
import joe from "/public/joe_g_sm_bubble.svg";
import nan from "/public/nan_sm_bubble.svg";
import menoukha from "/public/menoukha_sm_bubble.svg";
import marcus from "/public/marcus_sm_bubble.svg";
import alicia from "/public/alicia_sm_bubble.svg"

import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-spec-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-10">II Projects</h1>
      <div>
        <div className="grid grid-rows-3 grid-cols-2 mt-10 mb-10">
          <div className="container mx-auto px-10 content-align-left mt-10 mb-10">
            <Image
              src={microcredentials}
              alt="projects-microcredentials"
              width={498}
              height={312}
              className=""
            />
          </div>
          <div className="container mx-auto px-10 mt-10 mb-10">
            <h1 className="pb-10 text-2xl font-bold">
              <Link href="/projects/microcredentials">
                <a>Microdential Project</a>
              </Link>
            </h1>

            <p className="text-sm mt-6 mb-6">
              CAREP and SPEC have partnered together on this project with the
              aim of expanding access to education in the areas of diversity,
              equity, inclusion (DEI), mass atrocity prevention, game-based
              learning, and professional development.
            </p>
            <p className="text-sm mt-6">
              This project kicked off: November 2021
            </p>
            <div className="flex flex-row p-0 relative">
              <Image
                src={marcus.src}
                alt="projects-impact"
                width={100}
                height={50}
                className="absolute left-[0px]"
              />

              <img
                src={nan.src}
                alt="projects-impact"
                
                className="absolute left-[60px]"
              />

              <img
                src={alicia.src}
                alt="projects-impact"
                width={66}
                height={33}
                className="absolute left-[120px]"
              />
              <img
                src={menoukha.src}
                alt="projects-impact"
                width={66}
                height={33}
                className="absolute left-[180px]"
              />
              <img
                src={joe.src}
                alt="projects-impact"
                width={66}
                height={33}
                className="absolute left-[240px]"
              />
              <img
                src={crystal.src}
                alt="projects-impact"
                width={66}
                height={33}
                className="absolute left-[300px]"
              />
              <img
                src={yoline.src}
                alt="projects-impact"
                width={66}
                height={33}
                className="absolute left-[360px]"
              />
              <img
                src={victoria.src}
                alt="projects-impact"
                width={66}
                height={33}
                className="absolute left-[420px]"
              />
            </div>
          </div>
          <div className="container mx-auto px-10 mt-10 mb-10">
            <h1 className="pb-10 text-2xl font-bold">
              <Link href="/projects/meeple_metaverse">
                <a>Gaming Project</a>
              </Link>
            </h1>
            <p className="text-sm">
              The aim of this project, funded by RAND's Center to Advance Racial
              Equity Policy, is to engage and educate the public on topics
              related to racial equity policy through socio-cultural game-based
              learning.
            </p>
            <p className="text-sm mt-6 mb-6">
              This project kicked off: December 2021
            </p>
            <div className="flex flex-row p-0">
              <div>
                <Image
                  src={yoline}
                  alt="projects-impact"
                  width={66}
                  height={33}
                  className=""
                />
              </div>
              <div>
                <Image
                  src={victoria}
                  alt="projects-impact"
                  width={66}
                  height={33}
                  className=""
                />
              </div>
              <div>
                <Image
                  src={crystal}
                  alt="projects-impact"
                  width={66}
                  height={33}
                  className=""
                />
              </div>
              <div>
                <Image
                  src={ilia}
                  alt="projects-impact"
                  width={66}
                  height={33}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-10 content-align-left mt-10 mb-10">
            <Image
              src={meeples}
              alt="projects-meeple"
              width={498}
              height={312}
              className=""
            />
          </div>
          <div className="container mx-auto px-10 content-align-left mt-10 mb-10">
            <Image
              src={impact}
              alt="projects-impact"
              width={498}
              height={312}
              className=""
            />
          </div>
          <div className="container mx-auto px-10 content-align-left mt-10 mb-10">
            <h1 className="pb-10 text-2xl font-bold">
              <Link href="/projects/impact_website">
                <a>Impact Website Project</a>
              </Link>
            </h1>
            <p className="text-sm mt-6 mb-6">
              CAREP and SPEC have partnered together on this project with the
              aim of expanding access to education in the areas of diversity,
              equity, inclusion (DEI), mass atrocity prevention, game-based
              learning, and professional development.
            </p>
            <p className="text-sm mt-6 mb-6">
              This project kicked off: August 2022
            </p>
            <p className="">
              <Image
                src={yoline}
                alt="projects-impact"
                width={66}
                height={33}
                className=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
