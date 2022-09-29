import React from 'react';
import Image from 'next/image';
import LinkedInRAs from '../public/linkedInRAs.svg';
import { RESEARCH_ASSOCIATES_PROFILES } from '../constants/research-associates';

function RAProfile() {
  return RESEARCH_ASSOCIATES_PROFILES.map(data => {
    return (
      <div className='md:grid md:grid-cols-3 h-auto py-8 px-20 bg-spec-black-600'>
        <div className='mb-8 md:pl-12 text-center'>
          <h1 className='text-3xl font-extrabold text-spec-turquoise-600 '>{data.fullName}</h1>
          <h3 className='pb-6 text-spec-yellow-600'>{data.title}</h3>
          <div>
            <Image src={data.pic} alt={data.alt} />
          </div>
          <div className='pt-4'>
            <a href={data.linkedInLink} target="_blank">
              <Image src={LinkedInRAs} alt="linkedIn" />
            </a>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='md:px-20 pb-8 text-white'>
            <p>{data.text}</p>
          </div>
          <div className='md:pt-4 text-white col-span-2 md:text-left'>
            <span className='md:px-20'>{data.firstName} has worked on:</span>

            {data.projects.map((proj, index) => (
              <div key={index} className='flex md:pl-60 lg:pl-80 xl:pl-96 pt-4 text-spec-yellow-600'>{proj}</div>
            ))}
          </div>
        </div>
        <div className='md:col-span-3 w-auto p-8 md:p-12 text-center'>
          <hr className='my-2 rounded border-2 border-spec-turquoise-600'/>
        </div>
      </div>
    )
  })
}

export default RAProfile;