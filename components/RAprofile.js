import React from 'react'
import Alicia from '../public/aliciaRA.svg'
import Image from 'next/image'
import LinkedInRAs from '../public/linkedInRAs.svg'


function RAprofile() {
  const profileData = [
    { name: 'Alicia Bong', title: 'Project Manager', pic: Alicia, alt: 'Alicia pic', linkedInLink: 'https://www.linkedin.com/in/alicia-bong-a4400896/', text: 'Alicia is a project manager focusing on team building and open communication. Her experience comes from multiple software adjacent roles in customer success and project management. She received her Bachelors Degree in English from SUNY Oneonta. Alicia presented at the first New Critics Undergraduate Literature and Composition Conference and was the Vice President of their chapter of the Sigma Tau Delta English Honors Society. Her interest in sustainability and social justice has led her to join the team at SPEC.',}
  ]

  const profileDataMap = profileData.map(data => {
    return (
      <div className='h-auto bg-spec-black-600'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold text-spec-turquoise-600 '>{data.name}</h1>
          <h3 className='text-spec-yellow-600'>{data.title}</h3>
          <div>
            <Image src={data.pic} alt={data.alt} />
          </div>
          <Image src={LinkedInRAs} alt="linkedIn" />
        </div>
        <div className='bg-slate-400'>
          <h1>div 2</h1>
        </div>
      </div>
    )
  })

  return (
    <div className='text-black'>
      {profileDataMap}
    </div>
  )
}

export default RAprofile