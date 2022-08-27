import Link from "next/link";
import Image from "next/image";
import OSS from '../../public/office-street-smarts.svg';
import joer from '../../public/joer.svg';
import meeple  from '../../public/meeples.svg';
import expGallery from '../../public/expression-gallery.svg';
import impactWeb from '../../public/impact-website.svg';

export default function Projects() {
    return (
        <div className="bg-spec-blue-600 text-white px-0.5 py-0.5">
            <h1 className="text-4xl font-bold">Projects Completed</h1>
            <p className="text-spec-yellow-600">
                CAREP Pillar I - Methods and Action * 
                CAREP Pillar II - Dialogue and Change * 
                CAREP Pillar III - Policy Leadership
            </p>
            <div>
                <div id="microcredential" className="grid grid-cols-2 p-12">

                    <div className="grid justify-center">
                        <div className="grid justify-center">
                            <Image
                                src={OSS}
                                alt="office-stree-smarts"
                            />
                        </div>
                    </div>

                    <div className="grid justify-center">
                        <div className="grid justify-start">
                            <Link href="/projects/microcredentials">
                                <a className="text-4xl font-bold">
                                    Microdential Project
                                </a>
                            </Link>
                            <p>
                                CAREP and SPEC have partnered together on this project 
                                with the aim of expanding access to education in the 
                                areas of diversity, equity, inclusion (DEI), mass atrocity 
                                prevention, game-based learning, and professional development. 
                            </p>
                            <p>This project kicked off: November 2021</p>
                        </div>
                        <div className="block space-y-5">
                            <div>The Center's Work is focused on three key components:</div>
                            <div className="text-bold">
                                <a className="text-spec-yellow-600">ADD EVERYONES FACES HERE</a>
                            </div>
                            <div>
                                <a className="text-spec-yellow-600 underline"> View Project Details &gt;&gt;</a> 
                            </div>
                        </div>

                    </div>
                </div>

                <div id="meeple" className="grid grid-cols-2 p-12">
                    <div id="meeple-text" className="grid justify-end">
                        <div className="grid justify-center">
                            <Link href="/projects/meeple-metaverse">
                                <a className="text-4xl font-bold">Gaming Project</a>
                            </Link>
                            <p>
                                CAREP and SPEC have partnered together on this project
                                with the aim of expanding access to education in the
                                areas of diversity, equity, inclusion (DEI), mass atrocity
                                prevention, game-based learning, and professional development.
                            </p>
                            <p>This project kicked off: November 2021</p>
                        </div>
                        <div className="block space-y-5">
                            <div>The Center's Work is focused on three key components:</div>
                            <div className="text-bold">
                                <a className="text-spec-yellow-600">ADD EVERYONES FACES HERE</a>
                            </div>
                            <div>
                                <a className="text-spec-yellow-600 underline"> View Project Details &gt;&gt;</a>
                            </div>
                        </div>
                    </div>

                    <div id="meeple-img"className="grid justify-center">
                        <div className="grid justify-center">
                            <Image
                                src={meeple}
                                alt="office-stree-smarts"
                            />
                        </div>
                    </div>
                </div>

                <div id="impact-web" className="grid grid-cols-2 p-12">

                    <div className="grid justify-center">
                        <div className="grid justify-center">
                            <Image
                                src={impactWeb}
                                alt="impact-website"
                            />
                        </div>
                    </div>

                    <div className="grid justify-center">
                        <div className="grid justify-start">
                            <Link href="/projects/impact-website">
                                <a className="text-4xl font-bold">Impact Website Project</a>
                            </Link>
                            <p>
                                CAREP and SPEC have partnered together on this project
                                with the aim of expanding access to education in the
                                areas of diversity, equity, inclusion (DEI), mass atrocity
                                prevention, game-based learning, and professional development.
                            </p>
                            <p>This project kicked off: November 2021</p>
                        </div>
                        <div className="block space-y-5">
                            <div>The Center's Work is focused on three key components:</div>
                            <div className="text-bold">
                                <a className="text-spec-yellow-600">ADD EVERYONES FACES HERE</a>
                            </div>
                            <div>
                                <a className="text-spec-yellow-600 underline"> View Project Details &gt;&gt;</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="exp-gallery" className="grid grid-cols-2 p-12">
                    <div id="exp-gallery-text" className="grid justify-end">
                        <div className="grid justify-center">
                            <Link href="/projects/expression-gallery">
                                <a className="text-4xl font-bold">Expressions Gallery</a>
                            </Link>
                            <p>
                                CAREP and SPEC have partnered together on this project
                                with the aim of expanding access to education in the
                                areas of diversity, equity, inclusion (DEI), mass atrocity
                                prevention, game-based learning, and professional development.
                            </p>
                            <p>This project kicked off: November 2021</p>
                        </div>
                        <div className="block space-y-5">
                            <div>The Center's Work is focused on three key components:</div>
                            <div className="text-bold">
                                <a className="text-spec-yellow-600">ADD EVERYONES FACES HERE</a>
                            </div>
                            <div>
                                <a className="text-spec-yellow-600 underline"> View Project Details &gt;&gt;</a>
                            </div>
                        </div>
                    </div>

                    <div id="exp-gallery-img"className="grid justify-center">
                        <div className="grid justify-center">
                            <Image
                                src={expGallery}
                                alt="expression-gallery"
                            />
                        </div>
                    </div>
                </div>

                <div id="joer" className="grid grid-cols-2 p-12">

                    <div className="grid justify-center">
                        <div className="grid justify-center">
                            <Image
                                src={joer}
                                alt="journal-of-enaged-research"
                            />
                        </div>
                    </div>

                    <div className="grid justify-center">
                        <div className="grid justify-start">
                            <Link href="/projects/joer">
                                <a className="text-4xl font-bold">Journal of Engaged Research</a>
                            </Link>
                            <p>
                                CAREP and SPEC have partnered together on this project
                                with the aim of expanding access to education in the
                                areas of diversity, equity, inclusion (DEI), mass atrocity
                                prevention, game-based learning, and professional development.
                            </p>
                            <p>This project kicked off: November 2021</p>
                        </div>
                        <div className="block space-y-5">
                            <div>The Center's Work is focused on three key components:</div>
                            <div className="text-bold">
                                <a className="text-spec-yellow-600">ADD EVERYONES FACES HERE</a>
                            </div>
                            <div>
                                <a className="text-spec-yellow-600 underline"> View Project Details &gt;&gt;</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
};
