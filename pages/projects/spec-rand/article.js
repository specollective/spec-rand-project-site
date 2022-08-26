import Image from "next/image"
import wordCloud from '../../../public/article-word-cloud.svg'
import arrow from '../../../public/article-arrow.svg';


export default function Article() {
    return (
        <>
            <div className="bg-spec-teal-600 text-white">
                <h1 className="text-4xl font-bold">Article</h1>
                <p id="article-description">
                    Morbi facilisis semper ornare nunc. Amet aenean porttitor et est auctor proin. Elementum ut gravida aliquet nibh orci, sodales. Sit volutpat aliquet tincidunt vestibulum in. Mauris, diam sed consectetur non hendrerit et. Aliquet ac ullamcorper ultrices facilisi. Dolor, diam duis porta leo nunc malesuada mattis euismod augue. Augue malesuada adipiscing elit at quisque. Mattis facilisis lectus justo, nibh consequat tortor vel amet lectus. Magna tristique adipiscing felis ante nisl. Id adipiscing nisi netus purus mi facilisi. Purus sed viverra neque, turpis bibendum diam pharetra lacus dui.
                </p>
                <Image
                    src={arrow}
                    alt="article-arrow"
                    width={70}
                    height={70}
                    className=""
                />
                <p className="text-med font-bold text-right underline"><a>See full article</a></p>
                <Image
                    src={wordCloud}
                    alt="article-word-cloud"
                />

            </div>

        </>
    )
}