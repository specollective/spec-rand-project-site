import Image from 'next/image';
import wordCloud from '../public/WordCloud.svg';

export default function ResearchArticle() {
	return (
    <div className="gap-4 bg-spec-teal-600 p-10 md:p-20">
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 md:m-auto">
        <div className="text-5xl text-spec-yellow-600 font-bold space-y-5 pb-10 lg:ml-20 md:pl-30 xl:m-auto">
          <p>Research</p>
          <p>Methods</p>
          <p>Article</p>
        </div>
        <div className="">
          <p className="text-spec-yellow-600 text-xl tracking-wide font-medium pb-5 md:pb-0">
            CAREP Pillar I - Methods and Action
          </p>
          <div className="text-white">
            <p>
              RAND Corporation’s Center to Advance Racial Equity Policy (CAREP)
              funded a partnership with SPEC to expand access to education in
              the areas of DEI, mass atrocity prevention, and professional
              development. SPEC’s core team worked alongside CAREP to develop
              micro-credentials and gaming.
            </p>
            <p className="font-bold pt-10">Release Date: April 2023!</p>
          </div>
        </div>
        <div className="md:m-auto md:col-span-2">
          <Image src={wordCloud} alt="word-cloud" className="flex-grow" />
        </div>
      </div>
    </div>
  );
}
