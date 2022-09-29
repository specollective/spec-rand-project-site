import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../../components/section-header";
import SectionContent from "../../components/section-content";
import SubHeader from "../../components/sub-header";
import TextContent from "../../components/text";
import nan from "../../public/nan_sm_bubble.svg";
import alicia from "../../public/alicia_sm_bubble.svg";
import yoline from "../../public/yoline_sm_bubble.svg";
import crystal from "../../public/crystal_sm_bubble.svg";
import victoria from "../../public/victoria_sm_bubble.svg";


export default function MeetRAs() {
    return (
        <SectionContent className="bg-spec-teal-600 xs:p-6 md:p-24">
            <SectionHeader>SPEC / CAREP Research Associates (RA) </SectionHeader>
            <SubHeader>CAREP Pillar III - Policy Leadership</SubHeader>
            <TextContent className="pb-10">
                The SPEC / CAREP Research associates used open collaboration throughout the project-building process and are excited to continue to share knowledge, and resources, and collaboratively innovate to create systemic change.
            </TextContent>

            <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className="grid grid-cols-4">
                            <div className="pr-10">
                                <Link href="/projects/meet-ras/nan">
                                    <a>
                                        <Image
                                            src={nan}
                                            alt="nan-mead"
                                            width={150}
                                            height={150}
                                            className="grayscale hover:grayscale-0 duration-500 transition"
                                        />
                                        <TextContent className="text-black font-bold">
                                            Nan Elieen Mead
                                        </TextContent>

                                    </a>
                                </Link>
                            </div>
                            <div className="pr-10">
                                <Link href="/projects/meet-ras/alicia">
                                    <a>
                                        <Image
                                            src={alicia}
                                            alt="alicia-bong"
                                            width={150}
                                            height={150}
                                            className="grayscale hover:grayscale-0 duration-500 transition"
                                        />
                                        <TextContent className="text-black font-bold">
                                            Alicia Bong
                                        </TextContent>
                                    </a>
                                </Link>
                            </div>
                            <div className="pr-10">
                                <Link href="/projects/meet-ras/yoline">
                                    <a>
                                        <Image
                                            src={yoline}
                                            alt="yoline-bangerjee"
                                            width={150}
                                            height={150}
                                            className="grayscale hover:grayscale-0 duration-500 transition"
                                        />
                                        <TextContent className="text-black font-bold">
                                            Yoline Banerjee
                                        </TextContent>
                                    </a>
                                </Link>
                            </div>
                            <div className="pr-10">
                                <Link href="/projects/meet-ras/victoria">
                                    <a>
                                        <Image
                                            src={victoria}
                                            alt="victoria-lo"
                                            width={150}
                                            height={150}
                                            className="grayscale hover:grayscale-0 duration-500 transition"
                                        />
                                        <TextContent className="text-black font-bold">
                                            Victoria Lo
                                        </TextContent>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item relative float-left w-full">
                        <div className="grid grid-cols-4">
                            <div className="pr-10">
                                <Image
                                    src={crystal}
                                    alt="crystal-shamsi"
                                    width={150}
                                    height={150}
                                    className="grayscale hover:grayscale-0 duration-500 transition"
                                />
                                <TextContent className="text-black font-bold">
                                    Crystal Shamsi
                                </TextContent>
                            </div>
                            <div className="pr-10">
                                <Image
                                    src={nan}
                                    alt="nan-mead"
                                    width={150}
                                    height={150}
                                    className="grayscale hover:grayscale-0 duration-500 transition"
                                />
                                <TextContent className="text-black font-bold">
                                    Test
                                </TextContent>
                            </div>
                        </div>
                    </div>
                    </div>

                <section className="flex justify-between p-4 md:p-6 md:mt-4">
                    <button
                        className="carousel-control-prev flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </section>
            </div>

        </SectionContent>
    )
}