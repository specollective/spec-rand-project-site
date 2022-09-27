import React from 'react'
import Alicia from '../public/aliciaRA.svg'
import Crystal from '../public/crystalRA.svg'
import Ilia from '../public/iliaRA.svg'
import Joe from '../public/joeRA.svg'
import Marcus from '../public/marcusRA.svg'
import Image from 'next/image'
import LinkedInRAs from '../public/linkedInRAs.svg'


function RAprofile() {

  const microCredentialProj = <a href='https://www.google.com/' target="_blank" className='text-spec-yellow-600'>Microcredential Project {'>>'}</a>
  const gamingProj = <a href='https://www.google.com/' target="_blank" className='text-spec-yellow-600'>Gaming Project {'>>'}</a>
  const impactProj = <a href='https://www.google.com/' target="_blank" className='text-spec-yellow-600'>Impact Website {'>>'}</a>
  const expressionsProj = <a href='https://www.google.com/' target="_blank" className='text-spec-yellow-600'>Expressions Gallery {'>>'}</a>
  const journalProj = <a href='https://www.google.com/' target="_blank" className='text-spec-yellow-600'>Journal of Engaged Research {'>>'}</a>

  
  const profileData = [
    { fullName: 'Alicia Bong', firstName: 'Alicia', title: 'Project Manager', pic: Alicia, alt: 'Alicia pic', linkedInLink: 'https://www.linkedin.com/in/alicia-bong-a4400896/', text: 'Alicia is a project manager focusing on team building and open communication. Her experience comes from multiple software adjacent roles in customer success and project management. She received her Bachelors Degree in English from SUNY Oneonta. Alicia presented at the first New Critics Undergraduate Literature and Composition Conference and was the Vice President of their chapter of the Sigma Tau Delta English Honors Society. Her interest in sustainability and social justice has led her to join the team at SPEC.', projects: [microCredentialProj, gamingProj, impactProj],
    },
    { fullName: 'Crystal Shamsi', firstName: 'Crystal', title: 'Research Associate / Design Lead', pic: Crystal, alt: 'Crystal pic', linkedInLink: 'https://www.linkedin.com/in/crystalshamsi/', text: 'Crystal lives in Steamboat Springs, CO, and is a research associate at SPEC. She recently graduated from Hackbright Academy, learning full-stack web development and computer  science fundamentals. Crystal earned her M.S. in occupational therapy from Nova Southeastern University in 2013. As an occupational therapist, she dedicated herself to helping individuals gain the skills and tools necessary to achieve their utmost functional potential. Passionate about equality, empowerment, and justice for all people and populations, she is excited to blend her therapeutic and technological skills to expand her agency for positive impact.', projects: [microCredentialProj, impactProj],
    },
    { fullName: 'Ilia de Leon', firstName: 'Ilia', title: 'Research Associate', pic: Ilia, alt: 'Ilia pic', linkedInLink: 'https://www.linkedin.com/in/iliadeleon/', text: 'Ilia started off as a research associate with a focus in user experience design. She has since moved into the Design Lead role. She has a bachelors degree in Information Science and Policy from the University at Albany. Ilia has spent many years working with companies overseas collaborating on various sourcing, production, and logistics projects. More recently, Ilia has been focused on researching, understanding, and empathizing with users on their journey through digital products to create better experiences with usability, accessibility, and inclusiveness in mind.', projects: [gamingProj, impactProj],
    },
    { fullName: 'Joe Golden', firstName: 'Joe', title: 'Research Associate / Software Engineer', pic: Joe, alt: 'Joe pic', linkedInLink: 'https://www.linkedin.com/in/joseph-golden-36a0465a/', text: 'Joseph Golden is a research associate at SPEC and the organizations Arts & Equity virtual gallery curator. His research concentrates on the benefits of artmaking as a valuable means of self-representation and self-exploration, providing opportunities to discover and interpret ones identity. Joseph earned a masters degree in adult learning from SUNY Empire State College. He was awarded the Deans Medal for Excellence, recognizing his endeavors for leadership, service, knowledge, and practice in the field. Joseph is the co-editor of the Journal of Engaged Research, a SPEC publication featuring the work from marginalized voices.', projects: [expressionsProj, journalProj],
    },
    { fullName: 'Marcus Steiner', firstName: 'Marcus', title: 'Operations Lead', pic: Marcus, alt: 'Marcus pic', linkedInLink: 'https://www.linkedin.com/in/msteiner12/', text: 'Marcus Steiner is the LMS Manager for SPEC. He has a Bachelor’s Degree in Insurance and Risk Management and a Master’s degree in Global Comparative History. He has spent the entirety of his nonprofit career working with and leading human rights andequity-focused organizations as a Program Director, Operations/Development Director, and CEO. Marcus sits on the boards of the Sentinel Project and of Advocates Creating Change, organizations committed to creating peace and equality around the world. Currently, Marcus’ work examines how technology can be used both in human rights work and in DEI.', projects: [microCredentialProj, gamingProj],
    },
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
            <a href={data.linkedInLink} target="_blank">
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
              <div key={index} className='text-spec-yellow-600'>{proj}</div>
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