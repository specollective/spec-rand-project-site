import Image from "next/image";
import Link from "next/link";
import Victoria from "../../public/Rectangle_Victoria.svg";
import Nan from "../../public/Rectangle_Nan.svg";
import Ilia from "../../public/Rectangle_Ilia.svg";
import Yoline from "../../public/Rectangle_Yoline.svg";
import Marcus from "../../public/Rectangle_Marcus.svg";
import Crystal from "../../public/Rectangle_Crystal.svg";
import Alicia from "../../public/Rectangle_Alicia.svg";

import React, { useState } from "react";

function TheTeam() {
  // this variable will be used inside (map) later to decide which style will be rendered
  let [count] = useState(0);
  const users = [
    {
      name: "Marcus Steiner",
      pic: Marcus,
      eligible: true,
      title: "Operations Lead",
    },
    {
      name: "Nan",
      pic: Nan,
      eligible: true,
      title: "Research Lead",
    },
    {
      name: "Ilia",
      pic: Ilia,
      eligible: true,
      title: "Design Lead",
    },
    {
      name: "Alicia Bong",
      pic: Alicia,
      eligible: true,
      title: "Project Manager",
    },
    {
      name: "Yoline Banerjee",
      pic: Yoline,
      eligible: true,
      title: "Research Associate",
    },
    {
      name: "Victoria",
      pic: Victoria,
      eligible: true,
      title: "Research Associate",
    },
    {
      name: "Crystal Shamsi",
      pic: Crystal,
      eligible: true,
      title: "Research Associate",
    },
    {
        name: "Joe Golden",
        pic: Crystal,
        eligible: true,
        title: "Research Associate",
      },
      {
        name: "Dr. Menouka",
        pic: Crystal,
        eligible: true,
        title: "Research Associate",
      },
      {
        name: "Ollie Oliver",
        pic: Crystal,
        eligible: true,
        title: "Research Associate",
      },
      {
        name: "Lu Daley",
        pic: Crystal,
        eligible: true,
        title: "Research Associate",
      },
  ];

  return (
    <div className="container mx-auto bg-spec-teal-600">
      <div className="min-h-screen align-content-center justify-center">
        <div className="grid grid-cols-2 align-content-center gap-2 p-2 md:mx-4 justify-items-center lg:grid-cols-4">
          {users.map((user, id) => {
            // eslint-disable-next-line
            if (user.eligible) {
              // Once there is an object passed the (if) statment the count will increase by 1 first
              count = count + 1;
              return (
                // Now it's clear that the returned element with the desired values
                // will be rendered with the classes that you specify
                count === 1 ? (
                  <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                ) : count === 2 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                ) : count === 3 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                ) : count === 4 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                ) : count === 5 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                ) : count === 6 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                ) : count === 7 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                   ) : count === 8 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                   ) : count === 9 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                   ) : count === 10 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                   ) : count === 11 ? (
                    <div key={id} className="relative">
                    <a className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 hover:bg-slate-700 bg-opacity-0 duration-300">
                      <h1 className="tracking-wider">{user.name}</h1>
                      <p className="mx-auto">{user.title}</p>
                    </a>
                    <Image alt="Victoria" src={user.pic} />
                    <div className="text-black text-md font-bold text-center">
                      {user.name}
                    </div>
                    <div className="text-black text-xs text-center">
                      {user.title}
                    </div>
                  </div>
                ) : (
                  <h1>something went wrong</h1>
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
{
  /* <div class="relative ">
<a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
  <h1  class=tracking-wider >Title</h1>
  <p  class="mx-auto">Description</p>
  </a>
<a href="#" class="relative">
    <div class="h-48 flex flex-wrap content-center">
        <img src="/image_url" class="mx-auto  " alt="">
    </div>
</a>
</div> */
}
