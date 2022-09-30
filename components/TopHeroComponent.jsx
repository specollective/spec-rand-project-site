import React from 'react';
import Image from 'next/image';
import SpecCollab from '../public/SPECcollab.svg';
import RAND from '../public/@RAND.svg';

function TopHeroComponent() {
	return (
		<div className="bg-hero-img bg-cover h-auto md:pt-4 lg:pt-10 bg-center text-center font-Poppins lg:pb-32 p-10 md:p-20">
			<div className="xs:px-10 xs:pt-10 lg:px-20 md:w-4/5 xl:w-1/2 md:m-auto">
				<div>
					<Image className="object-scale-down" src={SpecCollab} alt="logo" />
				</div>
				<div className="grid grid-cols-4">
					<h2 className="col-span-4 xs:text-2xl lg:text-5xl font-bold text-white">
						Center to Advance Racial Equity Policy{' '}
					</h2>
					<div className="col-start-4 xl:mt-3 xl:text-left">
						<Image className="object-scale-down" src={RAND} alt="randLogo" />
					</div>
				</div>
				<div className="mt-8 xs:pb-4 md:text-xl lg:pb-8 xl:px-40 2xl:px-60 text-white">
					<p>
						In February 2022, Sustainable Progress and Equality Collective (SPEC) announced a partnership with the RAND
						Center to Advance Racial Equity Policy to create and implement CAREP’s flagship Microcredential program.{' '}
					</p>
				</div>
				<div className="md:text-xl xl:px-40 2xl:px-60 text-white">
					<p>
						A special class of SPEC/RAND Research Associates was comprised of a diverse group of individuals with
						experience in academic, healthcare, corporate, government, and nonprofit settings to gain in-depth
						experience in research, educational technology, and organizational development.
					</p>
				</div>
			</div>
		</div>
	);
}

export default TopHeroComponent;
