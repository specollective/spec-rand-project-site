import { profileData } from "./content/profileContent"
import RaSquares from "./RaSquares"
import React from "react";

function Highlight({ children }) {
  return <span className="text-spec-yellow-600 font-semibold">{children}</span>;
}

export default function MeetRAs() {
  return (
    <div className="xs:px-5 md:px-36 lg:px-40 bg-spec-teal-600 xs:py-4 md:py-20 text-Poppins">
      <section className="md:grid grid-rows-2 grid-cols-2 auto-rows-min xs:px-4 md:px-20">
        <h1 className="text-4xl md:text-6xl row-start-1 font-bold leading-relaxed pr-8">
          SPEC / CAREP <br /> Research Program
        </h1>
        <h2 className="xs:text-base md:text-xl row-start-2 text-spec-yellow-600 py-5 leading-relaxed">
          CAREP Pillar III - Policy Leadership
        </h2>
        <p className="row-span-2 text-base md:text-lg tracking-wide">
          A unique cohort of SPEC/RAND Research Associates was brought in to
          contribute technical and subject matter expertise to RAND's decades of
          research to create <Highlight>open and accessible </Highlight> courses
          focused on <Highlight>bridging the Digital Divide </Highlight>and
          creating a <Highlight>more inclusive and equitable world.</Highlight>
        </p>
      </section>
      <RaSquares profileData={profileData} />
    </div>
  );
};