import React from "react";
import Image from "next/image";
import Link from "next/link";
import SpecLogo from "../public/spec_logo.svg";
import SpecLogoWord from "../public/SPEC.svg";
import clsx from "clsx";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const pathname = router?.pathname;
  return (
    <nav className="hidden md:flex justify-evenly place-items-center h-20 bg-spec-black-600 text-white font-Poppins">
      <div className="flex h-16 flex-shrink-0 pr-40">
        <Link href="/">
          <Image src={SpecLogo} alt="logo" />
        </Link>
        <Link href="/">
          <Image src={SpecLogoWord} alt="logoWord" />
        </Link>
      </div>
      <div className="relative inline-block text-left">
        <Link href="/">
          <a className="inline-flex w-full justify-center rounded-md px-4 py-2 text-md font-medium text-white shadow-sm focus:outline-none hover:underline">
            Home
          </a>
        </Link>
      </div>

      <div className="relative inline-block text-left">
        <Link href="/meeple">
          <a
            className={clsx(
              "inline-flex w-full justify-center rounded-md px-4 py-2 text-md font-medium shadow-sm focus:outline-none hover:underline",
              pathname?.includes("meeple") &&
                "underline font-bold text-spec-turquoise-600"
            )}
          >
            Gaming Project
          </a>
        </Link>
      </div>

      <div className="relative inline-block text-left">
        <Link href="/micro-credential">
          <a
            className={clsx(
              "inline-flex w-full justify-center rounded-md px-4 py-2 text-md font-medium shadow-sm focus:outline-none hover:underline",
              pathname?.includes("micro") &&
                "underline font-bold text-spec-turquoise-600"
            )}
          >
            Microcredentials
          </a>
        </Link>
      </div>

      <div className="relative inline-block text-left">
        <Link href="/research-assistants">
          <a
            className={clsx(
              "inline-flex w-full justify-center rounded-md px-4 py-2 text-md font-medium shadow-sm focus:outline-none hover:underline",
              pathname?.includes("research") &&
                "underline font-bold text-spec-turquoise-600"
            )}
          >
            Research Assistants
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
