import Image from "next/image";
import SectionContent from "../../components/section-content";
import SectionHeader from "../../components/section-header";
import TextContent from "../../components/text";
import SubHeader from "../../components/sub-header";
import Microcred from "../../public/microcredential_dev_img.svg"
import GridContainer from "../../components/grid-container";

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
            <div>
                <SubHeader className="font-bold"> Introduction:</SubHeader>
                <TextContent>
                    Morbi facilisis semper ornare nunc. Amet aenean porttitor et est auctor proin. Elementum ut gravida aliquet nibh orci, sodales. Sit volutpat aliquet tincidunt vestibulum in. Mauris, diam sed consectetur non hendrerit et. Aliquet ac ullamcorper ultrices facilisi. Dolor, diam duis porta leo nunc malesuada mattis euismod augue. Augue malesuada adipiscing elit at quisque. Mattis facilisis lectus justo, nibh consequat tortor vel amet lectus. Magna tristique adipiscing felis ante nisl. Id adipiscing nisi netus purus mi facilisi. Purus sed viverra neque, turpis bibendum diam pharetra lacus dui.
                </TextContent >
            </div>
            <div>
                <SubHeader className="font-bold"> Introduction:</SubHeader>
                <TextContent>
                    Morbi facilisis semper ornare nunc. Amet aenean porttitor et est auctor proin. Elementum ut gravida aliquet nibh orci, sodales. Sit volutpat aliquet tincidunt vestibulum in. Mauris, diam sed consectetur non hendrerit et. Aliquet ac ullamcorper ultrices facilisi. Dolor, diam duis porta leo nunc malesuada mattis euismod augue. Augue malesuada adipiscing elit at quisque. Mattis facilisis lectus justo, nibh consequat tortor vel amet lectus. Magna tristique adipiscing felis ante nisl. Id adipiscing nisi netus purus mi facilisi. Purus sed viverra neque, turpis bibendum diam pharetra lacus dui.
                </TextContent >
            </div>
        </GridContainer>

    </div>

    )
}
