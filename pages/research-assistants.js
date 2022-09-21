import Head from 'next/head'
// import Navbar from '../components/Navbar'
import MobileNav from '../components/MobileNav'

const ResearchAssistantPage = () => {
  return (
    <section>
      <Head>
        <title>Research Assistant | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-screen bg-slate-300'>
        <MobileNav />
      </div>
    </section>
  )
}


export default ResearchAssistantPage