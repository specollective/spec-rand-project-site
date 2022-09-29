import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import linkedin from "../../public/linkedin.svg";
import github from "../../public/github.svg";
import specLogo from "../../public/spec_logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hidden md:block flex h-270 bg-spec-yellow-600 p-10">
      <div className="w-1/3 grid place-items-end pr-10">
        <div className="mr-5">
          <Image
            src={specLogo}
            alt="spec-logo"
            className=""
            width={130}
            height={130}
          />
        </div>
        <div className="grid grid-cols-4 gap-1">
          <Link href="https://www.facebook.com/specollective">
            <a>
              <Image src={facebook} alt="facebook" className="" />
            </a>
          </Link>
          <Link href="https://twitter.com/specollective">
            <a>
              <Image src={twitter} alt="twitter" className="" />
            </a>
          </Link>
          <Link href="https://linkedin.com/company/specollective/">
            <a>
              <Image src={linkedin} alt="linkedin" className="" />
            </a>
          </Link>
          <Link href="https://github.com/specollective">
            <a>
              <Image src={github} alt="github" className="" />
            </a>
          </Link>
        </div>
      </div>
      <div className="w-2/3 grid content-center pl-5">
        <div className="grid grid-rows-3 grid-cols-3 leading-10">
          <div>
            <Link href="/">About Us</Link>
          </div>
          <div>
            <Link href="/">Blog</Link>
          </div>
          <div>
            <Link href="/">Terms of Use</Link>
          </div>
          <div>
            <Link href="/">Contact Us</Link>
          </div>
          <div>
            <Link href="/">JoER</Link>
          </div>
          <div>
            <Link href="/">Code of Conduct</Link>
          </div>
          <div>
            <Link href="/">Get Involved</Link>
          </div>
          <div>
            <Link href="/">Documentation</Link>
          </div>
          <div>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
        <div className="font-bold mt-10">
          © 2022 Sustailable Progress & Equality Collective{" "}
        </div>
      </div>
    </footer>
  );
}
