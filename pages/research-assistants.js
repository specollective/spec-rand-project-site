import Head from 'next/head'
import RAprofile from '../components/RAprofile'

const ResearchAssistantPage = () => {
  return (
    <>
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
    <section className='w-screen h-auto p-20 bg-spec-black-600'>
      <div className='flex px-20 lg:px-60 space-around'>
        <div>
          <h1 className='text-[70px] text-spec-yellow-600  font-extrabold'>Meet <br />the<br /></h1>
          <h1 className='text-[85px] text-spec-turquoise-600 font-bold'>RAs</h1>
        </div>
        <div className='inline-block pt-32 px-12 w-[450px] h-auto align-text-bottom text-lg'>
          <p className='align-text-bottom'>The SPEC / CAREP Research associates used open collaboration throughout the project-building process and are excited to continue to share knowledge, and resources, and collaboratively innovate to create systemic change.</p>
        </div>

      </div>
    </section>
  </>
  )
}


export default ResearchAssistantPage