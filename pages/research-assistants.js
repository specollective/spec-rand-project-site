import Head from 'next/head'
import RAprofile from '../components/RAprofile'

const ResearchAssistantPage = () => {
  return (
    <section>
      <Head>
        <title>Research Assistant | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-black'>Meet the RAs</h1>
      
      <div>
        <RAprofile />
      </div>


    </section>
  )
}


export default ResearchAssistantPage