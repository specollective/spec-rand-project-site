import Image from "next/image";
import Link from "next/link";
import Victoria from "../../public/Rectangle_Victoria.svg";
import Nan from "../../public/Rectangle_Nan.svg";
import Ilia from "../../public/Rectangle_Ilia.svg";
import Yoline from "../../public/Rectangle_Yoline.svg";
import Marcus from "../../public/Rectangle_Marcus.svg";
import Crystal from "../../public/Rectangle_Crystal.svg";
import Alicia from "../../public/Rectangle_Yoline.svg";


import React, { useState } from "react";

function TheTeam() {
  // this variable will be used inside (map) later to decide which style will be rendered
  let [count] = useState(0);
  const users = [
    {
      name: "Victoria",
      pic: Victoria,
      eligible: true,
    },
    {
      name: "Nan",
      pic: Nan,
      eligible: true,
    },
    {
      name: "Ilia",
      pic: Ilia,
      eligible: true,
    },
    {
      name: "Yoline",
      pic: Yoline,
      eligible: true,
    },
    {
        name: "Marcus",
        pic: Marcus,
        eligible: true,
      },
      {
        name: "Crystal",
        pic: Crystal,
        eligible: true,
      },
      {
        name: "Alicia",
        pic: Alicia,
        eligible: true,
      },
  ];

  return (
    <div className="container mx-auto bg-spec-teal-600">
      <div className="min-h-screen align-content-center justify-center">
        <div className="grid grid-cols-2 align-content-center gap-2 justify-items-center lg:grid-cols-4">
          {users.map((user, id) => {
            // eslint-disable-next-line
            if (user.eligible) {
              // Once there is an object passed the (if) statment the count will increase by 1 first
              count = count + 1;
              return (
                // Now it's clear that the returned element with the desired values
                // will be rendered with the classes that you specify
                count === 1 ? (
                    <div
                    key={id}
                    className="text-black text-md font-bold text-center p-4"
                  >
                    {user.name}
                    <Image
                      alt="Victoria"
                      src={user.pic}
                      className="w-70 h-50 overlay bg-slate text-black opacity-100 hover:opacity-50 hover:slate-600 hover-bg-slate-700 relative"
                    />
                  </div>
                ) : count === 2 ? (
                  <div
                    key={id}
                    className="text-black text-md font-bold text-center p-4 "
                  >
                    {user.name}
                    <Image
                      alt="Nan"
                      src={user.pic}
                      className="w-158px h-166px overlay bg-slate text-black opacity-100 hover:opacity-50 hover:slate-600 hover-bg-slate-700 relative"
                    />
                  </div>
                ) : count === 3 ? (
                  <div
                    key={id}
                    className="text-black text-lg font-bold text-center p-4"
                  >
                    {user.name}
                    <Image
                      alt="Ilia"
                      src={user.pic}
                      className="w-158px h-166px"
                    />
                  </div>
                ) : count === 4 ? (
                  <div
                    key={id}
                    className="text-black text-lg font-bold text-center p-4"
                  >
                    {user.name}
                    <Image
                      alt="Yoline"
                      src={user.pic}
                      className="w-158px h-166px"
                    />
                     </div>
                     ) : count === 5 ? (
                  <div
                    key={id}
                    className="text-black text-lg font-bold text-center p-10"
                  >
                    {user.name}
                    <Image
                      alt="Marcus"
                      src={user.pic}
                      className="w-158px h-166px"
                    />
                  </div>
                  ) : count === 6 ? (
                    <div
                      key={id}
                      className="text-black text-lg font-bold text-center p-10"
                    >
                      {user.name}
                      <Image
                        alt="Crystal"
                        src={user.pic}
                        className="w-158px h-166px"
                      />
                    </div>
                    ) : count === 7 ? (
                        <div
                          key={id}
                          className="text-black text-lg font-bold text-center p-10"
                        >
                          {user.name}
                          <Image
                            alt="Alicia"
                            src={user.pic}
                            className="w-158px h-166px"
                          />
                        </div>
                ) : (
                  <h1>somthing wentt wrong</h1>
                )
              );
            }
            // eslint-disable-next-line
          })}
        </div>
      </div>
    </div>
  );
}

export default TheTeam;

// export default function MeetRAs() {
//   return (
//     <div className="grid grid-cols-4 grid-rows-4 bg-spec-teal-600">
//       <div className="pr-10 relative">
//         <span className="overlay bg-slate-200/75 text-black opacity-0 hover:opacity-100 absolute w-full h-full z-50 ">
//           Lorem Ipsum
//         </span>
//         <Link href="/projects/meet-ras/victoria">
//           <a>
//             <Image src={Victoria} alt="" width={150} height={150} />
//             <TextContent className="text-black font-bold">Victoria</TextContent>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// }grid sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-2 px-10
