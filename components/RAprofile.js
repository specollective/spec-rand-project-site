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
      <div className='w-screen h-auto bg-spec-black-600'>
        <h1>{data.name}</h1>
        <h3>{data.title}</h3>
        <Image src={data.pic} alt={data.alt} />
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