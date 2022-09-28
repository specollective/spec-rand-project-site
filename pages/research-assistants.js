import Head from 'next/head'
import RAprofile from '../components/RAprofile'
import Dropdown from '../components/RAsDropdown'

const ResearchAssistantPage = () => {
  return (
    <>
      <section className='w-screen h-auto p-20 bg-spec-black-600'>
        <div className='flex space-x-24 lg:px-60'>
          <div>
            <h1 className='text-[70px] text-spec-yellow-600  font-extrabold'>Meet <br />the<br /></h1>
            <h1 className='text-[85px] text-spec-turquoise-600 font-bold'>RAs</h1>
          </div>
          <div className='inline-block pt-40 h-auto text-lg'>
            <p className=''>The SPEC / CAREP Research associates used open collaboration throughout the project-building process and are excited to continue to share knowledge, and resources, and collaboratively innovate to create systemic change.</p>
          </div>
        </div>
        <div className='w-2/3 m-auto'>
          <Dropdown />
        </div>
      </section>
      <section>
        <Head>
          <title>Research Assistant | Sustainable Progress Equality Collective</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='bg-spec-black-600'>
          <h1 className='text-spec-black-600'>RA Page</h1>
        </div>
        
        <div>
          <RAprofile />
        </div>


      </section>
    </>
  )
}


export default ResearchAssistantPage