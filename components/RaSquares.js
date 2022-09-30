import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

function RaSquares({ profileData }) {
	return (
		<div className="align-content-center justify-center md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 md:m-auto">
			<div className="grid grid-cols-2 align-content-center gap-2 p-2 md:mx-4 justify-items-center lg:grid-cols-4">
				{profileData.map((profile, id) => {
					return (
						<section key={`${profile.fullName}-${id}`} className="relative">
							<div className="absolute inset-0 z-10 flex flex-col text-center content-center items-center justify-center opacity-0 md:hover:opacity-80 md:hover:bg-stone-900 md:bg-opacity-0 md:duration-300">
								<h3 className="tracking-wider font-bold text-white text-xl">{profile.fullName}</h3>
								<p className="mx-auto">{profile.title}</p>
								<br></br>
								<div className="xs:hidden md:inline-block">
									<Link href="/research-assistants">
										<a className="mx-auto text-sm hover:underline">Learn More {'>>'}</a>
									</Link>
								</div>
							</div>
							<Image alt={profile.fullName} src={profile.pic} height={280} width={280} layout="responsive" />
							<div className="md:hidden text-black text-base font-bold text-center">{profile.fullName}</div>
							<div className="md:hidden text-black text-xs text-center">{profile.title}</div>
							<div className="flex justify-center p-1 md:hidden">
								<Link href="/research-assistants">
									<a className="text-center text-sm">Learn More {'>>'}</a>
								</Link>
							</div>
						</section>
					);
				})}
			</div>
		</div>
	);
}

export default RaSquares;
