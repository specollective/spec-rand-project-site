import Image from "next/image";
import Link from "next/link";
import Marcus from "../../public/Rectangle_Marcus.svg";
import Nan from "/public/Rectangle_Nan.svg";
import Ilia from "../../public/Rectangle_Ilia.svg";
import Alicia from "../../public/Rectangle_Alicia.svg";
import Yoline from "../../public/Rectangle_Yoline.svg";
import Victoria from "../../public/Rectangle_Victoria.svg";
import Crystal from "../../public/Rectangle_Crystal.svg";
import Joe from "../../public/Rectangle_Joe.svg";
// import Menoukha from "../..public/Rectangle_Menoukha.svg";
// import Ollie from "../..public/Rectangle_Ollie.svg";
// import Lu from "../..public/Rectangle_Lu.svg";
import MeetRAsSection from "../../components/MeetRAsSection";

import React, { useState } from "react";

function TheTeam() {
  let [count] = useState(0);
  const users = [
    {
      name: "Marcus Steiner",
      pic: Marcus,
      eligible: true,
      title: "Operations Lead",
      hover_title: "Operations Lead @ SPEC",
    },
    {
      name: "Nan Eileen Mead",
      pic: Nan,
      eligible: true,
      title: "Research Lead",
      hover_title: "Research Lead @ SPEC",
    },
    {
      name: "Ilia de Leon",
      pic: Ilia,
      eligible: true,
      title: "Design Lead",
      hover_title: "Design Lead @ SPEC",
    },
    {
      name: "Alicia Bong",
      pic: Alicia,
      eligible: true,
      title: "Project Manager",
      hover_title: "Project Manager @ SPEC",
    },
    {
      name: "Yoline Banerjee",
      pic: Yoline,
      eligible: true,
      title: "Research Associate",
      hover_title: "Research Associate @ SPEC",
    },
    {
      name: "Victoria Lo",
      pic: Victoria,
      eligible: true,
      title: "Research Associate",
      hover_title: "Research Associate @ SPEC",
    },
    {
      name: "Crystal Shamsi",
      pic: Crystal,
      eligible: true,
      title: "Research Associate",
      hover_title: "Research Associate @ SPEC",
    },
    {
      name: "Joe Golden",
      pic: Joe,
      eligible: true,
      title: "Research Associate",
      hover_title: "Research Associate @ SPEC",
    },
    // {
    //   name: "Dr. Menoukha",
    //   pic: Menoukha,
    //   eligible: true,
    //   title: "Research Associate",
    //   hover_title: "Reserach Associate @ SPEC",
    // },
    // {
    //   name: "Ollie Oliver",
    //   pic: Ollie,
    //   eligible: true,
    //   title: "Research Associate",
    //   hover_title: "Research Associate @ SPEC",
    // },
    // {
    //   name: "Lu Daley",
    //   pic: Lu,
    //   eligible: true,
    //   title: "Research Associate",
    //   hover_title: "Research Associate @ SPEC",
    // },
  ];

  return (
    <div className="container mx-auto bg-spec-teal-600">
      <MeetRAsSection/>
      <div className="min-h-screen align-content-center justify-center">
        <div className="grid grid-cols-2 align-content-center gap-2 p-2 md:mx-4 justify-items-center lg:grid-cols-4">
          {users.map((user, id) => {
            if (user.eligible) {
              count = count + 1;
              return count === 1 ? (
                <div key={id} className="relative">
                  <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                    <h1 className="tracking-wider font-bold text-white text-xl">
                      {user.name}
                    </h1>
                    <p className="mx-auto">{user.hover_title}</p>
                    <br></br>
                    <Link href="/research-assistants">
                      <a className="mx-auto text-sm">Learn More {">>"}</a>
                    </Link>
                  </div>
                  <Image alt={user.name} src={user.pic} />
                  <div className="md:hidden text-black text-base font-bold text-center">
                    {user.name}
                  </div>
                  <div className="md:hidden text-black text-xs text-center">
                    {user.title}
                  </div>
                </div>
              ) : count === 2 ? (
                <div key={id} className="relative">
                  <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                    <h1 className="tracking-wider font-bold text-white text-xl">
                      {user.name}
                    </h1>
                    <p className="mx-auto">{user.hover_title}</p>
                    <br></br>
                    <Link href="/research-assistants">
                      <a className="mx-auto text-sm">Learn More {">>"}</a>
                    </Link>
                  </div>
                  <Image alt={user.name} src={user.pic} />
                  <div className="md:hidden text-black text-base font-bold text-center">
                    {user.name}
                  </div>
                  <div className="md:hidden text-black text-xs text-center">
                    {user.title}
                  </div>
                </div>
              ) : count === 3 ? (
                <div key={id} className="relative">
                  <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                    <h1 className="tracking-wider font-bold text-white text-xl">
                      {user.name}
                    </h1>
                    <p className="mx-auto">{user.hover_title}</p>
                    <br></br>
                    <Link href="/research-assistants">
                      <a className="mx-auto text-sm">Learn More {">>"}</a>
                    </Link>
                  </div>
                  <Image alt={user.name} src={user.pic} />
                  <div className="md:hidden text-black text-base font-bold text-center">
                    {user.name}
                  </div>
                  <div className="md:hidden text-black text-xs text-center">
                    {user.title}
                  </div>
                </div>
              ) : count === 4 ? (
                <div key={id} className="relative">
                  <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                    <h1 className="tracking-wider font-bold text-white text-xl">
                      {user.name}
                    </h1>
                    <p className="mx-auto">{user.hover_title}</p>
                    <br></br>
                    <Link href="/research-assistants">
                      <a className="mx-auto text-sm">Learn More {">>"}</a>
                    </Link>
                  </div>
                  <Image alt={user.name} src={user.pic} />
                  <div className="md:hidden text-black text-base font-bold text-center">
                    {user.name}
                  </div>
                  <div className="md:hidden text-black text-xs text-center">
                    {user.title}
                  </div>
                </div>
              ) : count === 5 ? (
                <div key={id} className="relative">
                  <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                    <h1 className="tracking-wider font-bold text-white text-xl">
                      {user.name}
                    </h1>
                    <p className="mx-auto">{user.hover_title}</p>
                    <br></br>
                    <Link href="/research-assistants">
                      <a className="mx-auto text-sm">Learn More {">>"}</a>
                    </Link>
                  </div>
                  <Image alt={user.name} src={user.pic} />
                  <div className="md:hidden text-black text-base font-bold text-center">
                    {user.name}
                  </div>
                  <div className="md:hidden text-black text-xs text-center">
                    {user.title}
                  </div>
                </div>
              ) : count === 6 ? (
                <div key={id} className="relative">
                  <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                    <h1 className="tracking-wider font-bold text-white text-xl">
                      {user.name}
                    </h1>
                    <p className="mx-auto">{user.hover_title}</p>
                    <br></br>
                    <Link href="/research-assistants">
                      <a className="mx-auto text-sm">Learn More {">>"}</a>
                    </Link>
                  </div>
                  <Image alt={user.name} src={user.pic} />
                  <div className="md:hidden text-black text-base font-bold text-center">
                    {user.name}
                  </div>
                  <div className="md:hidden text-black text-xs text-center">
                    {user.title}
                  </div>
                </div>
              
                ) : count === 7 ? (
                    <div key={id} className="relative">
                    <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                      <h1 className="tracking-wider font-bold text-white text-xl">
                        {user.name}
                      </h1>
                      <p className="mx-auto">{user.hover_title}</p>
                      <br></br>
                      <Link href="/research-assistants">
                        <a className="mx-auto text-sm">
                          Learn More {">>"}
                        </a>
                      </Link>
                    </div>
                    <Image alt={user.name} src={user.pic} />
                    <div className="md:hidden text-black text-base font-bold text-center">
                      {user.name}
                    </div>
                    <div className="md:hidden text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                ) : count === 8 ? (
                    <div key={id} className="relative">
                    <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                      <h1 className="tracking-wider font-bold text-white text-xl">
                        {user.name}
                      </h1>
                      <p className="mx-auto">{user.hover_title}</p>
                      <br></br>
                      <Link href="/research-assistants">
                        <a className="mx-auto text-sm">
                          Learn More {">>"}
                        </a>
                      </Link>
                    </div>
                    <Image alt={user.name} src={user.pic} />
                    <div className="md:hidden text-black text-base font-bold text-center">
                      {user.name}
                    </div>
                    <div className="md:hidden text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                // ) : count === 9 ? (
                //     <div key={id} className="relative">
                //     <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                //     <h1 className="tracking-wider font-bold text-white text-xl">
                //       {user.name}
                //     </h1>
                //     <p className="mx-auto">{user.hover_title}</p>
                //     <br></br>
                //     <Link href="/research-assistants">
                //       <a className="mx-auto text-sm">
                //         Learn More {">>"}
                //       </a>
                //     </Link>
                //   </div>
                //   <Image alt={user.name} src={user.pic} />
                //   <div className="md:hidden text-black text-base font-bold text-center">
                //     {user.name}
                //   </div>
                //   <div className="md:hidden text-black text-xs text-center">
                //     {user.title}
                //   </div>
                // </div>
                // ) : count === 10 ? (
                //     <div key={id} className="relative">
                //     <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                //       <h1 className="tracking-wider font-bold text-white text-xl">
                //         {user.name}
                //       </h1>
                //       <p className="mx-auto">{user.hover_title}</p>
                //       <br></br>
                //       <Link href="/research-assistants">
                //         <a className="mx-auto text-sm">
                //           Learn More {">>"}
                //         </a>
                //       </Link>
                //     </div>
                //     <Image alt={user.name} src={user.pic} />
                //     <div className="md:hidden text-black text-base font-bold text-center">
                //       {user.name}
                //     </div>
                //     <div className="md:hidden text-black text-xs text-center">
                //       {user.title}
                //     </div>
                //   </div>
                // ) : count === 11 ? (
                //     <div key={id} className="relative">
                //     <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                //       <h1 className="tracking-wider font-bold text-white text-xl">
                //         {user.name}
                //       </h1>
                //       <p className="mx-auto">{user.hover_title}</p>
                //       <br></br>
                //       <Link href="/research-assistants">
                //         <a className="mx-auto text-sm">
                //           Learn More {">>"}
                //         </a>
                //       </Link>
                //     </div>
                //     <Image alt={user.name} src={user.pic} />
                //     <div className="md:hidden text-black text-base font-bold text-center">
                //       {user.name}
                //     </div>
                //     <div className="md:hidden text-black text-xs text-center">
                //       {user.title}
                //     </div>
                //   </div>
                ) : (
                <h1>something went wrong</h1>
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
