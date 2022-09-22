import Image from "next/image";
import Link from "next/link";
import TextContent from "../../components/text";
import Victoria from "../../public/victoria_rectangle.svg";



export default function MeetRAs() {
  return (
    <div className="bg-spec-teal-600">
      <div className="grid grid rows-2 grid-flow-col gap 4 p-10">
        <div className="row-span-3 text-left text-lg">
          SPEC / CAREP Research Associates (RA)
        </div>
        <div class="col-span-2 text-left text-xs">CAREP Pillar III - Policy Leadership</div>
        <div class="col-span-2 text-left text-xs">
          The SPEC / CAREP Research associates used open collaboration
          throughout the project-building process and are excited to continue to
          share knowledge, and resources, and collaboratively innovate to create
          systemic change.
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div className="pr-10 relative">
          <span className="overlay bg-slate-200/75 text-black opacity-0 hover:opacity-100 absolute w-full h-full z-50 ">
            Lorem Ipsum
          </span>
          <Link href="/projects/meet-ras/nan">
            <a>
              <Image src={Victoria} alt="" width={150} height={150} />
              <TextContent className="text-black font-bold">
                Victoria
              </TextContent>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
