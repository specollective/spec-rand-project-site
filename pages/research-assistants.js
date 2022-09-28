import Head from 'next/head'
<<<<<<< HEAD
import RAprofile from '../components/RAprofile'
=======
import Dropdown from '../components/RAsDropdown'
>>>>>>> 561c7f0 (Almost finished, finalizing styles)

const ResearchAssistantPage = () => {
  return (
    <>
    <section>
      <Head>
        <title>Research Assistant | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <div className='bg-spec-black-600'>
        <h1 className='text-spec-black-600'>RA Page</h1>
      </div>
      
      <div>
        <RAprofile />
      </div>


=======
>>>>>>> 561c7f0 (Almost finished, finalizing styles)
    </section>
    <section className='w-2/3 p-20 m-auto bg-spec-black-600'>
      <div className='flex space-x-24'>
        <div>
          <h1 className='text-[70px] text-spec-yellow-600  font-extrabold'>Meet <br />the<br /></h1>
          <h1 className='text-[85px] text-spec-turquoise-600 font-bold'>RAs</h1>
        </div>
        <div className='inline-block pt-40 h-auto text-lg'>
          <p className=''>The SPEC / CAREP Research associates used open collaboration throughout the project-building process and are excited to continue to share knowledge, and resources, and collaboratively innovate to create systemic change.</p>
        </div>
      </div>
      <div className=''>
        <Dropdown />
      </div>
    </section>
  </>
  )
}


export default ResearchAssistantPage