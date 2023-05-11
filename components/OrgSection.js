import React from 'react';
import Image from 'next/image';
import SpecLogo from '../public/spec_logo.svg';
import RacialEquity from '../public/racialequityimg.svg';
import SpecWhite from '../public/specWhite.svg';
import PillarOne from '../public/pillar1.svg';
import PillarTwo from '../public/pillar2.svg';
import PillarThree from '../public/pillar3.svg';

const specData = [
	{
		imageSrc: SpecWhite,
		header: 'Sustainability through Systems Thinking',
		textBody:
			'Using critical awareness when building systems, seeking solutions that usher in improvement locally and globally and applying a variety of research and development methods.',
	},
	{
		imageSrc: SpecWhite,
		header: 'Progress through Open Collaboration ',
		textBody:
			'Striving for openess in our research and communications. Seeking to understand the world by trying to create transformative change through collaboration, research and critical reflection.',
	},
	{
		imageSrc: SpecWhite,
		header: 'Equality through Mutual Reciprocity',
		textBody:
			'Treat everyone in our communities with compassion, mutual respect and accountability. Equality is the end goal; diversity, equity, inclusion and reciprocity are the means to get there.',
	},
];

const policyData = [
  {
    key: "1",
    imageSrc: RacialEquity,
    header: <span>Pillar I <br/> Methods and action</span>,
    textBody:
      "Identifying the most effective combination of approaches that can have enduring impact on systemic racism.",
  },
  {
    key: "2",
    imageSrc: RacialEquity,
    header: <span>Pillar II <br/> Dialogue and change</span>,
    textBody:
      "Changing the narrative around how we talk about racial equity in systems and policies.",
  },
  {
    key: "3",
    imageSrc: RacialEquity,
    header: <span>Pillar III<br/>Policy leadership</span>,
    textBody:
      "Preparing policy leaders and those that influence them to debate, design, and address racial equity going forward.",
  },
];

function OrgColumnData({ data, style = blue }) {
	const styleHash = {
		blue: 'text-spec-turquoise-600',
		yellow: 'text-spec-yellow-600',
	};

  return (
    <div className="flex flex-col pb-8 gap-4 md:px-12 lg:px-24">
      <Image src={data.imageSrc} height={60} width={60} />
      <h3 className={`font-semibold pt-1 text-lg pb-2 font-Poppins ${styleHash[style]}`}>{data.header}</h3>
      <p>{data.textBody}</p>
    </div>
  );
}

function Highlight ({children}) {
  return (
    <span className="text-spec-yellow-600 font-semibold">
      {children}
    </span>
  )
}

function OrgSection() {
	const specDataBody = specData.map((data, index) => (
		<OrgColumnData data={data} style="blue" key={`${data.header.replace(' ', '-')}-${index}}`} />
	));

  const policyDataBody = policyData.map((data, index) => (
    <OrgColumnData data={data} style="yellow" key={data.key}/>
  ));

  return (
    <section className="bg-spec-black-600 px-10 md:px-20 py-5 md:py-10">
      <div className="container mx-auto md:text-xl font-medium">
        <div className="px-4 py-4 md:py-8 md:mx-auto md:w-1/2 lg:py-14">
          <p className="tracking-wider text-center">
            In February 2022,{" "}
            <React.Fragment>
              <Highlight>
                {" "}
                <a
                  href="https://www.specollective.org"
                  target="_blank"
                  className="underline text-decoration-style:solid"
                >
                  Sustainable Progress and Equality Collective (SPEC){" "}
                </a>
              </Highlight>
              and the{" "}
              <Highlight>
                <a
                  href=" https://www.rand.org/"
                  target="_blank"
                  className="underline text-decoration-style:solid"
                >
                  RAND Corporation
                </a>{" "}
              </Highlight>
              Center to Advance Racial Equity Policy established a two year
              partnership centered on digital educational initiatives, with SPEC
              leading content development and RAND providing research oversight.
            </React.Fragment>
          </p>
          <div className=" mt-4 space-y-4">
            <p className="tracking-wider text-center ">
              SPEC is an open learning organization that empowers individuals to
              be catalysts for positive change.
            </p>
            <p className="tracking-wider text-center">
              The RAND{" "}
              <Highlight>
                <a
                  href="https://www.rand.org/well-being/racial-equity-policy.html"
                  target="_blank"
                  className="underline text-decoration-style:solid"
                >
                  Center to Advance Racial Equity Policy
                </a>
              </Highlight>{" "}
              aims to develop and apply approaches and solutions that build
              racial equity in systems and policies for the future.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="md:grid md:grid-cols-3 py-2 md:py-10 md:m-12 lg:m-16 lg:px-36 text-center">
          {specDataBody}
        </div>
      </div>
      <div>
        <div className="md:grid md:grid-cols-3 py-2 md:py-10 md:m-12 lg:m-16 lg:px-36 text-center ">
          {policyDataBody}
        </div>
      </div>
    </section>
  );
}

export default OrgSection;
