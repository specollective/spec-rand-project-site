import React from 'react'
import Alicia from '../public/aliciaRA.svg'
import Image from 'next/image'
import LinkedInRAs from '../public/linkedInRAs.svg'


function RAprofile() {
  const profileData = [
    { fullName: 'Alicia Bong', firstName: 'Alicia', title: 'Project Manager', pic: Alicia, alt: 'Alicia pic', linkedInLink: 'https://www.linkedin.com/in/alicia-bong-a4400896/', text: 'Alicia is a project manager focusing on team building and open communication. Her experience comes from multiple software adjacent roles in customer success and project management. She received her Bachelors Degree in English from SUNY Oneonta. Alicia presented at the first New Critics Undergraduate Literature and Composition Conference and was the Vice President of their chapter of the Sigma Tau Delta English Honors Society. Her interest in sustainability and social justice has led her to join the team at SPEC.', projects: ['Microcredential Project', 'Gaming Project','Impact Website'],}
  ]

  const profileDataMap = profileData.map(data => {
    return (
      <div className='p-8 h-auto bg-spec-black-600'>

        <div className='text-center'>
          <h1 className='text-3xl font-extrabold text-spec-turquoise-600 '>{data.fullName}</h1>
          <h3 className='pb-6 text-spec-yellow-600'>{data.title}</h3>
          <div>
            <Image src={data.pic} alt={data.alt} />
          </div>
          <div className='pb-6'>
            <a href={data.linkedInLink}>
              <Image src={LinkedInRAs} alt="linkedIn" />
            </a>
          </div>
        </div>

        <div className=''>
          <div className='px-12 text-white'>
            <p>{data.text}</p>
          </div>

          <div className='p-4 text-white text-center'>
            <p className='p-6'>{data.firstName} has worked on:</p>

            {data.projects.map((proj, index) => (
              <p key={index} className='text-spec-yellow-600'>{proj} {'>>'}</p>
            ))}
          </div>
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