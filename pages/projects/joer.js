import Image from "next/image";
import GridContainer from "../../components/grid-container";
import SectionHeader from "../../components/section-header";
import SubHeader from "../../components/sub-header";
import TextContent from "../../components/text";
import joe_g from "../../public/joe_g_sm_bubble.svg";
import nan from "../../public/nan_sm_bubble.svg";
import joer_logo from "../../public/joer_logo.svg";
import joer_one from "../../public/joer_issue_one.svg";
import joer_two from "../../public/joer_issue_two.svg";
import joer_three from "../../public/joer_issue_three.svg";
import wabash_one from "../../public/joer_wabash_safe_spaces.svg";
import wabash_two from "../../public/joer_wabash_deliberative_practices.svg";
import joer_rand from "../../public/joer_rand_decolonize_dei.svg";


export default function JoerPage() {
    return (
        <div className="bg-spec-blue-600 text-slate-100">
            <div className="justify-center">
                <Image
                src={joer_logo} 
                alt="joer-logo"
                />
            </div>
            <TextContent>
                Sustainable Progress and Equality Collective (SPEC) has sponsored JoER since it launched in the spring of 2021. SPEC also has been working in partnership with the RAND Center to Advance Racial Equity Policy (CAREP) and Wabash College Democracy and Public Discourse (WDPD) initiative on several projects. Along those lines, many of our submissions in this issue are policy- or education-related and address inequities in those contexts.
                
                This issue also features student collaborations. Students from the Pardee RAND Graduate School discuss the ways in which the diversity, equity, and inclusion movement has suffered from its own form of colonization. Wabash College has offered a paper written by their Democracy and Public Discourse Fellows, who have refined a process for engaging in structured deliberative conversation to help navigate the challenging environment for political discourse  
            </TextContent>
            <div className="grid grid-cols-3 ml-10 mr-10">
                <div>
                    <Image
                        src={joer_one}
                        alt="joer-issue-one"
                    />
                    <p className="underline">
                        Issue # 1 - April 2021
                    </p>
                </div>
                <div>
                    <Image
                        src={joer_two}
                        alt="joer-issue-two"
                    />
                    <p className="underline">
                        Issue # 2 - January 2022
                    </p>
                </div>
                <div>
                    <Image
                        src={joer_three}
                        alt="joer-issue-three"
                    />
                    <p className="underline">
                        Issue # 3 - August 2022
                    </p>
                </div>
            </div>

            <SubHeader className="text-spec-yellow-600 text-2xl font-bold">
                Articles published by Wabash College Participants
            </SubHeader>
            <span>
                <Image
                    src={wabash_one}
                    alt="safe-spaces-bridge-divdes"
                />
                <p>Using Safe and Brave Spaces to Bridge Divides</p>
                <p>by Chase Breaux, Wabash College</p>
            </span>
            <span>
                <Image
                    src={wabash_two}
                    alt="deliberative-practices"
                />
                <p>Using Safe and Brave Spaces to Bridge Divides</p>
                <p>by Chase Breaux, Wabash College</p>
            </span>

            <SubHeader className="text-spec-yellow-600 text-2xl font-bold">
                Articles published by SPEC Contributors 
            </SubHeader>
            <span>
                <Image
                    src={joer_rand}
                    alt="decolonize-dei"
                />
                <p>Using Safe and Brave Spaces to Bridge Divides</p>
                <p>by Chase Breaux, Wabash College</p>
            </span>

            <SubHeader className="text-spec-yellow-600 text-2xl font-bold">
                Journal of Engaged Research Editors
            </SubHeader>

            <GridContainer>
                <span>
                    <SubHeader className="text-spec-yellow-600 text-2xl font-bold">Nan Eileen Mead, MA SPP, M Ed </SubHeader>
                    <Image
                        src={nan}
                        alt="nan"
                    />
                    <TextContent>
                        Research Lead at Sustainable Progress & Equality Collective (SPEC) and Co-Editor of JoER. A longtime education advocate, Ms. Mead was twice elected by the NYS Legislature to serve as the Manhattan member of the Board of Regents, which oversees the State Education Department. Ms. Mead's research focus is on diversity, equity, and inclusion in educational settings and in public policy. 
                    </TextContent >
                </span>
                <span>
                    <SubHeader className="text-spec-yellow-600 text-2xl font-bold">Joe Golden</SubHeader>
                    <Image
                        src={joe_g}
                        alt="joe_g"
                    />
                    <TextContent>
                        [TO BE ADDED]
                    </TextContent >
                </span>
            </GridContainer>


        </div>
    )
}
