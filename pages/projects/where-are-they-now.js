import Image from "next/image";
import lu from "/public/where_are_they_lu.svg";

export default function WhereNow() {
  return (
    <>
      <div className="bg-spec-teal-600">
        <h1 className="text-4xl font-bold text-white">Where are they now?</h1>
        <div className="p-10 ml-15 w-3/4 grid grid-cols-2 grid-rows-3">
          <div className="w-1/4">
            <Image src={lu} alt="projects-microcredentials" className="" />
          </div>
          <div className="inline align-middle">04a;lkdjf;alkdjsa;dlskjfadsf</div>
          <div className="w-1/4">
            <Image src={lu} alt="projects-microcredentials" className="" />
          </div>
          <div className="inline">04a;lkdjf;alkdjsa;dlskjfadsf</div>
          <div className="w-1/4">
            <Image src={lu} alt="projects-microcredentials" className="" />
          </div>
          <div className="inline">04a;lkdjf;alkdjsa;dlskjfadsf</div>
        </div>
      </div>
    </>
  );
}
