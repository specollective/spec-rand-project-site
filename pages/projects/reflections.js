import Image from "next/image";
import SectionHeader from "../../components/section-header";
import SectionContent from "../../components/section-content";
import TextContent from "../../components/text";
import quoteImage from "../../public/yellow_quote.svg";
import GridContainer from "../../components/grid-container";


export default function Reflections() {
    return (
        <SectionContent>
            <SectionHeader>Reflections</SectionHeader>
            {/* TO DO: static for now until I can add carousel */}
            {/* TO DO: might need to take out margins from grid container, causes white space */}
            <GridContainer className="bg-spec-blue-600">
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
            </GridContainer>

        </SectionContent>
    )
}
