import React from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'
import RacialEquity from '../public/racialequityimg.svg'
import SpecWhite from '../public/specwhite.svg'
import PillarOne from '../public/pillar1.svg'
import PillarTwo from '../public/pillar2.svg'
import PillarThree from '../public/pillar3.svg'

function OrgSection() {

  const specData = [
    { key:'sustainability', imageSrc: SpecWhite, header: 'Sustainability through Systems Thinking', textBody: 'Using critical awareness when building systems, seeking solutions that usher in improvement locally and globally and applying a variety of research and development methods.'},
    { key:'progress', imageSrc: SpecWhite, header: 'Progress through Open Collaboration ', textBody: 'Striving for openess in our research and communications. Seeking to understand the world by trying to create transformative change through collaboration, research and critical reflection.'},
    { key:'equality', imageSrc: SpecWhite, header: 'Equality through Mutual Reciprocity', textBody: 'Treat everyone in our communities with compassion, mutual respect and accountability. Equality is the end goal; diversity, equity, inclusion and reciprocity are the means to get there.'}
  ]

  const policyData = [
    { key:'1', imageSrc: PillarOne, header: 'Methods and action', textBody: 'Identifying the most effective combination of approaches that can have enduring impact on systemic racism.' },
    { key:'2', imageSrc: PillarTwo, header: 'Dialogue and change', textBody: 'Changing the narrative around how we talk about racial equity in systems and policies.' },
    { key:'1', imageSrc: PillarThree, header: ' Policy leadership', textBody: 'Preparing policy leaders and those that influence them to debate, design, and address racial equity going forward.' },
  ]

  const specDataBody = specData.map(data => {
    return (
      <div className='pb-8 px-24' key={data.key}>
        <Image src={data.imageSrc}/>
        <h3 className='font-Poppins pb-8 text-spec-turquoise-600'>{data.header}</h3>
        <p>{data.textBody}</p>
      </div>
    )
  })

  const policyDataBody = policyData.map(data => {
    return(
      <div className='pb-8 px-24' key={data.key}>
        <Image src={data.imageSrc}/>
        <h3 className='font-Poppins pb-8 text-spec-yellow-600'>{data.header}</h3>
        <p>{data.textBody}</p>
      </div>
    )
  })

  return (
    <div className='w-screen h-[2600px] bg-spec-black'>

      <div>
        <div className='text-center p-12 font-Poppins'>
          <Image src={SpecLogo} />
          <h1 className='text-3xl text-extrabold'>Sustainable Progress & Equality Collective</h1>
          <p className='text-lightsss'>The center's work is focused on three key components.</p>
        </div>
        <div className='text-center'>
          {specDataBody}          
        </div>
      </div>

      <div>
        <div className='text-center p-12 font-Poppins'>
          <Image height={90} width={90} src={RacialEquity} />
          <h1 className='text-3xl text-extrabold'>Center to Advance Racial Equity Policy</h1>
          <p className='text-lightsss'>The center's work is focused on three key components.</p>
        </div>
        <div className='text-center'>
          {policyDataBody}          
        </div>
      </div>

    </div>
  )
}

export default OrgSection