import Image from "next/image";
import Link from "next/link";
import TextContent from "../../components/text";
import Victoria from "../../public/victoria_rectangle.svg";

export default function MeetRAs() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 bg-spec-teal-600">
      <div className="pr-10 relative">
        <span className="overlay bg-slate-200/75 text-black opacity-0 hover:opacity-100 absolute w-full h-full z-50 ">
          Lorem Ipsum
        </span>
        <Link href="/projects/meet-ras/victoria">
          <a>
            <Image src={Victoria} alt="" width={150} height={150} />
            <TextContent className="text-black font-bold">Victoria</TextContent>
          </a>
        </Link>
      </div>
    </div>
  );
}
