import Image from "next/image";
import Link from "next/link";
import TextContent from "../../components/text";
import Victoria from "../../public/victoria_rectangle.svg";

import React, { useState } from "react";

function TestS() {
  // this variable will be used inside (map) later to decide which style will be rendered
  let [count] = useState(0);
  const users = [
    {
      name: "Marcus",
      pic: "https://picsum.photos/200",
      eligible: true,
    },
    {
      name: "Nan",
      pic: "https://picsum.photos/200",
      eligible: true,
    },
    {
      name: "Ilia",
      pic: "https://picsum.photos/200",
      eligible: true,
    },
    {
      name: "Sarah",
      pic: "https://picsum.photos/200",
      eligible: true,
    },
  ];

  return (
    <div className="container mx-auto bg-spec-teal-600">
      <div className="min-h-screen flex justify-center">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
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
                    className="text-black text-md font-bold text-center p-10 overlay bg-slate-200/75 text-black opacity-0 hover:opacity-100 relative w-full h-full"
                  >
                    {user.name}
                    <img
                      alt="person pic"
                      src={user.pic}
                      className="w-50 h-100"
                    />
                  </div>
                ) : count === 2 ? (
                  <div
                    key={id}
                    className="text-black text-md font-bold text-center p-10 bg-slate-200/75 text-black opacity-0 hover:opacity-100 relative w-full h-full"
                  >
                    {user.name}
                    <img
                      alt="person pic"
                      src={user.pic}
                      className="w-50 h-100"
                    />
                  </div>
                ) : count === 3 ? (
                  <div
                    key={id}
                    className="text-black text-lg font-bold text-center p-10"
                  >
                    {user.name}
                    <img
                      alt="person pic"
                      src={user.pic}
                      className="w-158px h-166px"
                    />
                  </div>
                ) : count === 4 ? (
                  <div
                    key={id}
                    className="text-black text-lg font-bold text-center p-10"
                  >
                    {user.name}
                    <img
                      alt="person pic"
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

export default TestS;

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
