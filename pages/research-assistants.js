import Head from 'next/head'
import RAprofile from '../components/RAprofile'

const ResearchAssistantPage = () => {
  return (
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
  )
}


export default ResearchAssistantPage