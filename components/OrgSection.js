import React from "react";
import Image from "next/image";
import SpecLogo from "../public/spec_logo.svg";
import RacialEquity from "../public/racialequityimg.svg";
import SpecWhite from "../public/specwhite.svg";
import PillarOne from "../public/pillar1.svg";
import PillarTwo from "../public/pillar2.svg";
import PillarThree from "../public/pillar3.svg";

const specData = [
  {
    key: "sustainability",
    imageSrc: SpecWhite,
    header: "Sustainability through Systems Thinking",
    textBody:
      "Using critical awareness when building systems, seeking solutions that usher in improvement locally and globally and applying a variety of research and development methods.",
  },
  {
    key: "progress",
    imageSrc: SpecWhite,
    header: "Progress through Open Collaboration ",
    textBody:
      "Striving for openess in our research and communications. Seeking to understand the world by trying to create transformative change through collaboration, research and critical reflection.",
  },
  {
    key: "equality",
    imageSrc: SpecWhite,
    header: "Equality through Mutual Reciprocity",
    textBody:
      "Treat everyone in our communities with compassion, mutual respect and accountability. Equality is the end goal; diversity, equity, inclusion and reciprocity are the means to get there.",
  },
];

const policyData = [
  {
    key: "1",
    imageSrc: PillarOne,
    header: "Methods and action",
    textBody:
      "Identifying the most effective combination of approaches that can have enduring impact on systemic racism.",
  },
  {
    key: "2",
    imageSrc: PillarTwo,
    header: "Dialogue and change",
    textBody:
      "Changing the narrative around how we talk about racial equity in systems and policies.",
  },
  {
    key: "1",
    imageSrc: PillarThree,
    header: " Policy leadership",
    textBody:
      "Preparing policy leaders and those that influence them to debate, design, and address racial equity going forward.",
  },
];

function OrgColumnData({ data, style = blue }) {
  const styleHash = {
    blue: "text-spec-turquoise-600",
    yellow: "text-spec-yellow-600",
  };

  return (
    <div className="flex flex-col pb-8 md:px-12 lg:px-24">
      <Image src={data.imageSrc} />
      <h3 className={`pb-8 font-Poppins ${styleHash[style]}`}>{data.header}</h3>
      <p>{data.textBody}</p>
    </div>
  );
}

function OrgSection() {
  const specDataBody = specData.map((data, index) => (
    <OrgColumnData data={data} style="blue" key={`${data.header.replace(" ", "-")}-${index}}`}/>
  ));

  const policyDataBody = policyData.map((data, index) => (
    <OrgColumnData data={data} style="yellow" key={`${data.header.replace(" ", "-")}-${index}}`}/>
  ));

  return (
    <section className="bg-spec-black-600">
      <div>
        <div className="p-12 text-center">
          <Image alt="spec logo" width={120} height={120} src={SpecLogo} />
          <h1 className="text-3xl text-extrabold pb-2 font-Poppins">
            Sustainable Progress & Equality Collective
          </h1>
          <p>The center's work is focused on three key components.</p>
        </div>
        <div className="md:grid md:grid-cols-3 lg:px-36 text-center">
          {specDataBody}
        </div>
      </div>
      <div>
        <div className="p-12 text-center">
          <Image
            alt="equity icon"
            height={120}
            width={120}
            src={RacialEquity}
          />
          <h2 className="text-3xl text-extrabold pb-2 font-Poppins">
            Center to Advance Racial Equity Policy
          </h2>
          <p>The center's work is focused on three key components.</p>
        </div>
        <div className="md:grid md:grid-cols-3 lg:px-36 pb-8 text-center ">
          {policyDataBody}
        </div>
      </div>
    </section>
  );
}

export default OrgSection;
