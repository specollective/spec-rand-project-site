import StatBox from './stat-box';

export default function ByTheNumbers() {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-3 bg-spec-black-600 justify-items-center items-center p-10 md:p-20 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 md:m-auto">
			<h2 className="text-5xl font-bold text-spec-white-600 text-left">
				By the
				<br />
				Numbers
			</h2>

			<StatBox
				className="row-start-2 col-start-1 row-span-2 my-4 md:my-0 max-w-[24rem]"
				borderColor="spec-turquoise-600"
				height="h-96"
				width="w-full"
				statColor="spec-yellow-600"
				inputStat="90%"
			>
				<p>
					of individuals inside the organization come from diverse backgrounds; that might include visible/invisible
					diabilities, LGBTQ+, women, people of color.
				</p>
			</StatBox>
			<StatBox
				className="my-4 md:my-0 max-w-[24rem]"
				borderColor="spec-turquoise-600"
				height="h-48"
				width="w-full"
				statColor="spec-yellow-600"
				inputStat="1"
			>
				<p>Research Article Published</p>
			</StatBox>
			<StatBox
				className="my-4 md:my-0 max-w-[24rem]"
				borderColor="spec-turquoise-600"
				height="h-48"
				width="w-full"
				statColor="spec-yellow-600"
				inputStat="12"
			>
				<p>Research Associates (RAs) went through this program</p>
			</StatBox>
			<StatBox
				className="my-4 md:my-0 max-w-[24rem]"
				borderColor="spec-turquoise-600"
				height="h-48"
				width="w-full"
				statColor="spec-yellow-600"
				inputStat="6"
			>
				<p>Research Associates (RAs) placed at jobs; externally or through SPEC</p>
			</StatBox>
		</div>
	);
}
