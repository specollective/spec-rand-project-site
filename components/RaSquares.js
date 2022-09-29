import React from "react";

import Image from "next/image";
import Link from "next/link";
import Marcus from "./content/RASquares/Rectangle_Marcus.svg";
import Nan from "./content/RASquares/Rectangle_Nan.svg";
import Ilia from "./content/RASquares/Rectangle_Ilia.svg";
import Alicia from "./content/RASquares/Rectangle_Alicia.svg";
import Yoline from "./content/RASquares/Rectangle_Yoline.svg";
import Victoria from "./content/RASquares/Rectangle_Victoria.svg";
import Crystal from "./content/RASquares/Rectangle_Crystal.svg";
import Joe from "./content/RASquares/Rectangle_Joe.svg";
import Menoukha from "./content/RASquares/Rectangle_Menoukha.svg";
import Ollie from "./content/RASquares/Rectangle_Ollie.svg";
import Lu from "./content/RASquares/Rectangle_Lu.svg";


function RaSquares() {
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
    {
      name: "Dr. Menoukha",
      pic: Menoukha,
      eligible: true,
      title: "Research Associate",
      hover_title: "Reserach Associate @ SPEC",
    },
    {
      name: "Ollie Oliver",
      pic: Ollie,
      eligible: true,
      title: "Research Associate",
      hover_title: "Research Associate @ SPEC",
    },
    {
      name: "Lu Daley",
      pic: Lu,
      eligible: true,
      title: "Research Associate",
      hover_title: "Research Associate @ SPEC",
    },
  ];

  return (
    <div className="bg-spec-teal-600 p-10">
      <div className="align-content-center justify-center">
        <div className="grid grid-cols-2 align-content-center gap-2 p-2 md:mx-4 justify-items-center lg:grid-cols-4">
          {users.filter(u => u.eligible).map((user, id) => {
              return (
                <section key={`${user.name}-${id}`} className="relative">
                  <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
                    <h1 className="tracking-wider font-bold text-white text-xl">
                      {user.name}
                    </h1>
                    <p className="mx-auto">{user.hover_title}</p>
                    <br></br>
                    <div className="xs:hidden md:inline-block">
                      <Link href="/research-assistants">
                        <a className="mx-auto text-sm hover:underline">Learn More {">>"}</a>
                      </Link>
                    </div>
                  </div>
                  <Image alt={user.name} src={user.pic} />
                  <div className="md:hidden text-black text-base font-bold text-center">
                    {user.name}
                  </div>
                  <div className="md:hidden text-black text-xs text-center">
                    {user.title}
                  </div>
                  <div className="flex justify-center p-1 md:hidden">
                      <Link href="/research-assistants">
                        <a className="text-center text-sm">Learn More {">>"}</a>
                      </Link>
                    </div>
                </section>
             )
            // eslint-disable-next-line
          })}
        </div>
      </div>
    </div>
  );
}

export default RaSquares;
