import React from "react";
import Image from "next/image";
import SpecLogo from "../public/spec_logo.svg";
import Facebook from "../public/facebook.svg";
import Twitter from "../public/twitter.svg";
import LinkedIn from "../public/linkedin.svg";
import GitHub from "../public/github.svg";
import Link from "next/link";

function Footer() {
  const socialLinkData = [
    {
      site: "facebook",
      url: "https://www.facebook.com/specollective",
      imageSrc: Facebook,
    },
    {
      site: "twitter",
      url: "https://twitter.com/specollective",
      imageSrc: Twitter,
    },
    {
      site: "linkedin",
      url: "https://www.linkedin.com/company/specollective/",
      imageSrc: LinkedIn,
    },
    {
      site: "github",
      url: "https://github.com/specollective",
      imageSrc: GitHub,
    },
  ];

  const socialLinks = socialLinkData.map((link) => {
    return (
      <div className="inline p-1" key={link.site}>
        <a href={link.url}>
          <Image src={link.imageSrc} />
        </a>
      </div>
    );
  });

  return (
    <footer className="hidden md:block h-60 font-Poppins bg-spec-yellow-600">
      <section className="flex justify-evenly text-spec-black-600">
        <div className="pt-10 w-44 text-center">
          <div className="text-center">
            <Image src={SpecLogo} />
          </div>
          {socialLinks}
        </div>
        <div className="h-50 space-y-6 pt-10">
          <Link href="/meeple">
            <a className="block">
             Socio-cultural Gaming
            </a>
          </Link>
          <Link href="/micro-credential">
            <a className="block">
              Microcredentials
            </a>
          </Link>
          <Link href="/research-assistants">
            <a className="block">
              Research Program
            </a>
          </Link>
        </div>
        <div className="h-50 space-y-6 pt-10">
          <Link href="https://opencollective.com/spec/contribute">
            <a className="block">
              Donate
            </a>
          </Link>
        </div>
      </section>
      <section className="text-center text-spec-black-600">
        <p className="block font-bold pt-4">
          © 2022 Sustainable Progress & Equality Collective{" "}
        </p>
      </section>
    </footer>
  );
}

export default Footer;
