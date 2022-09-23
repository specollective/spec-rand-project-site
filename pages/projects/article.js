import Image from "next/image"
import wordCloud from '../../public/article_word_cloud.svg'


export default function Article() {
    return (
      <div className="flex flex-wrap gap-4 bg-spec-teal-600 p-20">
        <div className="flex-none text-5xl text-spec-yellow-600 font-bold ml-20 px-30 space-y-5">
          <p>Research</p>
          <p>Methods</p> 
          <p>Article</p>
        </div>
        <div className="flex-1 ml-20 mr-20">
          <p className="text-spec-yellow-600 text-xl tracking-wide font-medium pb-2">
            CAREP Pillar I - Methods and Action
          </p>
          <p className="text-white">
            The world of work has become more global in nature as technology 
            enables us to interact with individuals from different cultures, 
            religions and life experiences. How does intercultural competence 
            impact one’s ability to communicate and collaborate in the 
            twenty-first-century marketplace?

            <p className="font-bold pt-10">Release Date: October 31, 2022</p>
          </p>
        </div>

        <div>
            <Image src={wordCloud} alt="word-cloud" className="" />
        </div>
      </div>
    );
}