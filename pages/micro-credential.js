import Head from 'next/head'
import Subfooter from '../components/sub-footer'

const MicroCredentialPage = () => {
  return (
    <section>
      <Head>
        <title>Microcredentials | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Microcredential Page</h1>
      <div className="grid place-content-center">
          <h1 className="text-4xl font-bold text-spec-turquoise-600 mb-5"> Impact</h1>
          <p className="text-white">
            <ul className="list-disc pl-7">
              <li># of OC contributions</li>
              <li>Upskilling in Moodle</li>
              <li>Boost resumes</li>
            </ul>
          </p>
        </div>
      <Subfooter></Subfooter>
    </section>

  )
}

export default MicroCredentialPage