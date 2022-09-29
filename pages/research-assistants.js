import Head from 'next/head'
import RAprofile from '../components/RAprofile'
import Dropdown from '../components/RAsDropdown'
import { profileData } from '../components/content/profileContent'

const ResearchAssistantPage = () => {
  return (
    <>
      <Head>
        <title>Research Assistant | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <section className='w-screen h-auto md:p-20 bg-spec-black-600'>
        <div className='md:flex md:space-x-24 lg:px-60'>
          <div className='text-center md:text-left'>
          <h1 className='text-[50px] md:text-[70px] text-spec-yellow-600 font-extrabold'>
            Meet
            <br />the<br />
            <span className='text-[65px] md:text-[85px] text-spec-turquoise-600 font-bold'>RAs</span>
          </h1>
          </div>
          <div className='inline-block h-auto px-8 md:px-0 md:pt-40 md:text-lg'>
            <p className=''>The SPEC / CAREP Research associates used open collaboration throughout the project-building process and are excited to continue to share knowledge, and resources, and collaboratively innovate to create systemic change.</p>
          </div>
        </div>
        <div className='w-2/3 m-auto text-center md:text-left'>
          <Dropdown dropdownOptions={profileData}/>
        </div>
      </section>
      <section>
        <div>
        <RAprofile
          profileData={profileData}
        />
        </div>
      </section>
    </>
  )
}


export default ResearchAssistantPage