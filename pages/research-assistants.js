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
    <section className='m-auto p-6 md:w-2/3 md:p-20 bg-spec-black-600'>
      <div className='md:flex md:space-x-24'>
        <div className='text-center md:text-left'>
          <h1 className='text-[50px] md:text-[70px] text-spec-yellow-600 font-extrabold'>Meet <br />the<br /></h1>
          <h1 className='text-[65px] md:text-[85px] text-spec-turquoise-600 font-bold'>RAs</h1>
        </div>
        <div className='inline-block h-auto px-8 md:px-0 md:pt-40 md:text-lg '>
          <p>The SPEC / CAREP Research associates used open collaboration throughout the project-building process and are excited to continue to share knowledge, and resources, and collaboratively innovate to create systemic change.</p>
        </div>
      </div>
      <div className='text-center md:text-left'>
        <Dropdown />
      </div>
    </section>
  </>
  )
}


export default ResearchAssistantPage