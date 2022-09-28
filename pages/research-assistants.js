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
          <h1 className='text-5xl text-spec-turquoise-600 font-bold'>Meet <br />the<br /></h1>
          <h1 className='text-5xl text-spec-yellow-600 font-bold'>RAs</h1>
        </div>
        <div className='inline pt-10 px-12 bg-slate-200'>
          <p className='inline '>The SPEC / CAREP Research associates used open collaboration throughout the project-building process and are excited to continue to share knowledge, and resources, and collaboratively innovate to create systemic change.</p>
        </div>


      </div>
    </section>
  </>
  )
}


export default ResearchAssistantPage