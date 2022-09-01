import Image from "next/image";
import GridContainer from "../../components/grid-container";
import SectionHeader from "../../components/section-header";
import SubHeader from "../../components/sub-header";
import TextContent from "../../components/text";
import joe_g from "../../public/joe_g_sm_bubble.svg";
import nan from "../../public/nan_sm_bubble.svg";

export default function JoerPage() {
    return (
        <div className="bg-spec-blue-600 text-slate-100 font-medium px-44 pt-12">
            <h1>JOER IMAGE HERE</h1>
            <TextContent>
                Sustainable Progress and Equality Collective (SPEC) has sponsored JoER since it launched in the spring of 2021. SPEC also has been working in partnership with the RAND Center to Advance Racial Equity Policy (CAREP) and Wabash College Democracy and Public Discourse (WDPD) initiative on several projects. Along those lines, many of our submissions in this issue are policy- or education-related and address inequities in those contexts.
                
                This issue also features student collaborations. Students from the Pardee RAND Graduate School discuss the ways in which the diversity, equity, and inclusion movement has suffered from its own form of colonization. Wabash College has offered a paper written by their Democracy and Public Discourse Fellows, who have refined a process for engaging in structured deliberative conversation to help navigate the challenging environment for political discourse  
            </TextContent>
            <GridContainer>
                
            </GridContainer>
        </div>
    )
}
