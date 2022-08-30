import Image from "next/image"
import wordCloud from '../../public/article_word_cloud.svg'
import Link from 'next/link'
import SectionContent from '../../components/section-content'

function SectionHeader({ children }) {
    return (
        <h1 className="text-4xl font-bold"> { children } </h1>
    )
}



export default function Article() {
    return (
        <>
            <SectionContent className="bg-spec-teal-600">
                <SectionHeader className="">Article</SectionHeader>
                <p id="article-description">
                    Morbi facilisis semper ornare nunc. Amet aenean porttitor et est auctor proin. Elementum ut gravida aliquet nibh orci, sodales. Sit volutpat aliquet tincidunt vestibulum in. Mauris, diam sed consectetur non hendrerit et. Aliquet ac ullamcorper ultrices facilisi. Dolor, diam duis porta leo nunc malesuada mattis euismod augue. Augue malesuada adipiscing elit at quisque. Mattis facilisis lectus justo, nibh consequat tortor vel amet lectus. Magna tristique adipiscing felis ante nisl. Id adipiscing nisi netus purus mi facilisi. Purus sed viverra neque, turpis bibendum diam pharetra lacus dui.
                </p>
                <p className="text-med font-bold text-right underline">
                    <Link href="/full-article">
                        <a>See full article</a>
                    </Link>
                </p>
                <Image
                    src={wordCloud}
                    alt="word-cloud"
                    className=""
                />
            </SectionContent>
        </>
    )
}