import Image from "next/image";
import SectionHeader from "../../components/section-header";
import SectionContent from "../../components/section-content";
import SubHeader from "../../components/sub-header";
import TextContent from "../../components/text";
import quoteImage from "../../public/nan_sm_bubble.svg";
import GridContainer from "../../components/grid-container";


export default function MeetRAs() {
    return (
        <SectionContent className="bg-spec-teal-600 pb-24">
            <SectionHeader>SPEC / CAREP Research Associates (RA) </SectionHeader>
            <SubHeader>CAREP Pillar III - Policy Leadership</SubHeader>
            <TextContent>
                The SPEC / CAREP Research associates used open collaboration throughout the project-building process and are excited to continue to share knowledge, and resources, and collaboratively innovate to create systemic change.
            </TextContent>

            <div id="carouselExampleControls" className="carousel slide relative pt-10" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className="grid grid-cols-4">
                            <div className="pr-10">
                                <Image
                                    src={quoteImage}
                                    alt="yellow-quote"
                                />
                                <TextContent className="">
                                    Nan Elieen Mead
                                </TextContent>
                            </div>
                            <div className="pr-10">
                                <Image
                                    src={quoteImage}
                                    alt="yellow-quote"
                                />
                                <TextContent className="italic">
                                    Nan Eileen Mead
                                </TextContent>
                            </div>
                            <div className="pr-10">
                                <Image
                                    src={quoteImage}
                                    alt="yellow-quote"
                                />
                                <TextContent className="">
                                    Nan Elieen Mead
                                </TextContent>
                            </div>
                            <div className="pr-10">
                                <Image
                                    src={quoteImage}
                                    alt="yellow-quote"
                                />
                                <TextContent className="">
                                    Nan Elieen Mead
                                </TextContent>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item relative float-left w-full">
                        <div className="grid grid-cols-4">
                            <div className="pr-10">
                                <Image
                                    src={quoteImage}
                                    alt="yellow-quote"
                                />
                                <TextContent className="italic">
                                Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean. Penatibus purus nec duis quam integer scelerisque erat placerat in. A vitae ornare pretium id egestas. Sagittis in arcu sed sit. Viverra amet ut mus phasellus odio.
                                </TextContent>
                            </div>
                            <div className="pr-10">
                                <Image
                                    src={quoteImage}
                                    alt="yellow-quote"
                                />
                                <TextContent className="italic">
                                    Commodo duis sit hendrerit malesuada morbi ut. Quis orci blandit amet eget etiam vitae enim. Aliquet purus massa egestas natoque pharetra venenatis. Auctor vel ultrices tincidunt sed eget elementum id a lectus. Consequat aliquet nibh tellus nulla tempor. Viverra tempor, etiam bibendum at massa placerat.
                                </TextContent>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item relative float-left w-full">
                        <div className="grid grid-cols-4">
                            <div className="pr-10">
                                <Image
                                    src={quoteImage}
                                    alt="yellow-quote"
                                />
                                <TextContent className="italic">
                                Sagittis viverra integer et mauris, sapien enim. Eget quis congue suspendisse elit. Nisi bibendum nisl diam nulla velit, magna eget tincidunt ornare. Et integer rhoncus, magnis quisque ut sollicitudin quam mauris aenean. Penatibus purus nec duis quam integer scelerisque erat placerat in. A vitae ornare pretium id egestas. Sagittis in arcu sed sit. Viverra amet ut mus phasellus odio.
                                </TextContent>
                            </div>
                            <div className="pr-10">
                                <Image
                                    src={quoteImage}
                                    alt="yellow-quote"
                                />
                                <TextContent className="italic">
                                    Commodo duis sit hendrerit malesuada morbi ut. Quis orci blandit amet eget etiam vitae enim. Aliquet purus massa egestas natoque pharetra venenatis. Auctor vel ultrices tincidunt sed eget elementum id a lectus. Consequat aliquet nibh tellus nulla tempor. Viverra tempor, etiam bibendum at massa placerat.
                                </TextContent>
                            </div>
                        </div>
                    </div>
                    </div>
                <button
                    className="carousel-control-prev absolute top-30 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-30 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </SectionContent>
    )
}