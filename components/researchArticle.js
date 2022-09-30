import Image from 'next/image';
import wordCloud from '../public/article_word_cloud.svg';

export default function ResearchArticle() {
	return (
		<div className="gap-4 bg-spec-teal-600 p-10 md:p-20">
			<div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 md:m-auto">
				<div className="text-5xl text-spec-yellow-600 font-bold space-y-5 pb-10 lg:ml-20 md:pl-30 xl:m-auto">
					<p>Research</p>
					<p>Methods</p>
					<p>Article</p>
				</div>
				<div className="">
					<p className="text-spec-yellow-600 text-xl tracking-wide font-medium pb-5 md:pb-0">
						CAREP Pillar I - Methods and Action
					</p>
					<div className="text-white">
						<p>
							The world of work has become more global in nature as technology enables us to interact with individuals
							from different cultures, religions and life experiences. How does intercultural competence impact one’s
							ability to communicate and collaborate in the twenty-first-century marketplace?
						</p>
						<p className="font-bold pt-10">Release Date: October 31, 2022</p>
					</div>
				</div>
				<div className="md:m-auto md:col-span-2">
					<Image src={wordCloud} alt="word-cloud" className="flex-grow" />
				</div>
			</div>
		</div>
	);
}
