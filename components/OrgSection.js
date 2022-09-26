import React from 'react'
import Image from 'next/image'
import SpecLogo from '../public/spec_logo.svg'

function OrgSection() {

  // const socialLinkData = [
  //   { site: 'facebook', url: 'https://www.facebook.com/specollective', imageSrc: Facebook },
  //   { site: 'twitter', url: 'https://twitter.com/specollective', imageSrc: Twitter },
  //   // etc
  // ]

  // const socialLinks = socialLinkData.map(link => {
  //   return (
  //     <div className='inline p-1' key={link.site}>
  //       <a href={link.url}><Image src={link.imageSrc} /></a>
  //     </div>
  //   );
  // });

  const specData = [
    { key:'sustainability', imageSrc: SpecLogo, header: 'Sustainability through Systems Thinking', textBody: 'Using critical awareness when building systems, seeking solutions that usher in improvement locally and globally and applying a variety of research and development methods.'},
    { key:'progress', imageSrc: SpecLogo, header: 'Progress through Open Collaboration ', textBody: 'Striving for openess in our research and communications. Seeking to understand the world by trying to create transformative change through collaboration, research and critical reflection.'},
    { key:'equality', imageSrc: SpecLogo, header: 'Equality through Mutual Reciprocity', textBody: 'Treat everyone in our communities with compassion, mutual respect and accountability. Equality is the end goal; diversity, equity, inclusion and reciprocity are the means to get there.'}
  ]

  const specDataBody = specData.map(data => {
    return (
      <div key={data.key}>
        <Image src={data.imageSrc}/>
        <h3 className='font-Poppins'>{data.header}</h3>
        <p>{data.textBody}</p>
      </div>
    )
  })

  return (
    <div className='w-screen h-[900px] bg-slate-400'>
      <div>
        <div className='text-center p-12 font-Poppins'>
          <Image src={SpecLogo} />
          <h1 className='text-3xl text-extrabold'>Sustainable Progress & Equality Collective</h1>
          <p className='text-lightsss'>SPEC’s core values & operating principles</p>
        </div>
        <div className='text-center'>
          {specDataBody}          
        </div>
      </div>
    </div>
  )
}

export default OrgSection