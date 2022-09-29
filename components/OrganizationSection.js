import React from 'react';
import Image from 'next/image';
import SpecLogo from '../public/spec_logo.svg';
import RacialEquity from '../public/racialequityimg.svg';
import { SPEC_OPERATING_PRINCIPLES, CAREP_PILLARS } from '../constants/operating-principles';

const styleHash = {
  blue: "text-spec-turquoise-600",
  yellow: "text-spec-yellow-600",
};

function OrganizationColumnData({ data, style = blue }) {
  return (
    <div className="flex flex-col pb-8 md:px-12 lg:px-24" key={data.key}>
      <Image src={data.imageSrc} />
      <h3 className={`pb-8 font-Poppins ${styleHash[style]}`}>{data.header}</h3>
      <p>{data.textBody}</p>
    </div>
  );
}

function OrganizationSection() {
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
          {SPEC_OPERATING_PRINCIPLES.map((data) => (
            <OrganizationColumnData data={data} style="blue" />
          ))}
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
          {CAREP_PILLARS.map((data) => (
            <OrganizationColumnData data={data} style="yellow" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrganizationSection;
