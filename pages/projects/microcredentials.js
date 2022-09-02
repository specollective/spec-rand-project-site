import Image from "next/image";
import SectionContent from "../../components/section-content";
import SectionHeader from "../../components/section-header";
import TextContent from "../../components/text";
import SubHeader from "../../components/sub-header";
import Microcred from "../../public/microcredential_dev_img.svg"
import GridContainer from "../../components/grid-container";
import marcus from "../../public/marcus_sm_bubble.svg";
import nan from "../../public/nan_sm_bubble.svg";
import alicia from "../../public/alicia_sm_bubble.svg";
import menoukha from "../../public/menoukha_sm_bubble.svg";
import joe_g from "../../public/joe_g_sm_bubble.svg";
import crystal from "../../public/crystal_sm_bubble.svg";
import yoline from "../../public/yoline_sm_bubble.svg";
import victoria from "../../public/victoria_sm_bubble.svg";




export default function Microcredentials() {
    return (
    <div className="bg-spec-blue-600 text-slate-100 font-medium px-44 pt-12">
        <SectionHeader className="content-center">Microcredential Development Project</SectionHeader>
        <div className="text-center">
            <Image
                src={Microcred}
                alt="microcredentials"
            />
        </div>

        <GridContainer>
            <div>
                <SubHeader className="font-bold"> Introduction:</SubHeader>
                <TextContent>
                    The COVID19 pandemic has highlighted existing disparities in access to computer and communication technologies. The effect of the pandemic and challenges with remote-learning on students from underserved communities will undoubtedly have a lasting impact. In face of these challenges, new education research and technological developments present potential pathways forward to foster equity in the classroom.
                </TextContent>
            </div>
            <div>
                <SubHeader className="font-bold">Problem Statement:</SubHeader>
                <TextContent>
                    RAND CAREP requires a learning platform capable of scaling to hundreds to thousands of adopting institutions and millions of learners.
                    <SubHeader className="font-bold"> Solution:</SubHeader>
                    SPEC will take a multimethodological approach to developing the learning platform and microcredentials.
                </TextContent>
            </div>
        </GridContainer>

        <div id="page-divider" className="border-spec-yellow-600 border-t-4 width-10"></div>

        <GridContainer>
            <div>
                <SubHeader className="font-bold"> Project Goals & Objectives:</SubHeader>
                <TextContent>
                    <ol className="list-decimal">
                        <li>
                            Create new learning programs in the areas of DEI and Mass Atrocity Prevention that are designed for CAREP’s internal stakeholders
                        </li>
                        <li>
                            Create new learning programs in the area of professional development that are designed for use by educational organizations that use Moodle
                        </li>
                        <li>
                            Deliver new learning programs in the area of professional development for CAREP’s internal stakeholders
                        </li>
                        <li>
                            Expand access to educational game technologies
                        </li>
                        <li>
                            Establish a sustainable funding plan to continue research and program development in the micro credential space
                        </li>
                    </ol>
                </TextContent>
            </div>
            <div>
                <SubHeader className="font-bold"> Impact:</SubHeader>
                <TextContent>
                    <ul className="list-disc">
                        <li>
                            # of OC contributions
                        </li>
                        <li>
                            Upskilling in Moodle
                        </li>
                        <li>
                            Boost resumes
                        </li>
                    </ul>
                </TextContent>
            </div>
        </GridContainer>

        <SubHeader className="font-bold"> At a Glance:</SubHeader>

        <GridContainer>
            <span>
                <SubHeader className="text-spec-teal-600 text-4xl font-bold">1</SubHeader>
                <TextContent>
                    Learning Management System (LMS)
                </TextContent >
            </span>
            <span>
                <SubHeader className="text-spec-teal-600 text-4xl font-bold">41</SubHeader>
                <TextContent>
                    participants enrolled in courses
                </TextContent >
            </span>
        </GridContainer>

        <GridContainer>
            <span>
                <SubHeader className="text-spec-teal-600 text-4xl font-bold">12</SubHeader>
                <TextContent>
                    RAs worked on this project 
                </TextContent >
            </span>
            <span>
                <SubHeader className="text-spec-teal-600 text-4xl font-bold">6500+</SubHeader>
                <TextContent>
                    Data points collected
                </TextContent >
            </span>
        </GridContainer>

        <GridContainer>
            <span>
                <SubHeader className="text-spec-teal-600 text-4xl font-bold">6</SubHeader>
                <TextContent>
                    Microcredentials created:
                    <ul className="list-disc">
                        <li>Cultural Mediation</li>
                        <li>Intro to Moodle for Learners</li>
                        <li>Anti-Racism 1.0</li>
                        <li>Intercultural Competency 1.0</li>
                        <li>Office Street Smarts</li>
                        <li>Mentoring</li>
                    </ul> 
                </TextContent >
            </span>
        </GridContainer>

        <SubHeader className="font-bold"> The Team:</SubHeader>
        <span>
            <Image
                src={marcus}
                alt="marcus"
            />
        </span>
        <span>
            <Image
                src={nan}
                alt="nan"
            />
        </span>
        <span>
            <Image
                src={alicia}
                alt="alicia"
            />
        </span>
        <span>
            <Image
                src={menoukha}
                alt="menoukha"
            />
        </span>
        <span>
            <Image
                src={joe_g}
                alt="joe_g"
            />
        </span>
        <span>
            <Image
                src={crystal}
                alt="crystal"
            />
        </span>
        <span>
            <Image
                src={yoline}
                alt="yoline"
            />
        </span>
        <span>
            <Image
                src={victoria}
                alt="victoria"
            />
        </span>
        


    </div>

    )
}