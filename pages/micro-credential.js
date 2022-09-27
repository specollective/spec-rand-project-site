import Head from 'next/head'
import Image from 'next/image'
import microHeaderImg from '../public/microcredential_dev_img.svg'
import Subfooter from '../components/sub-footer'

const MicroCredentialPage = () => {
  return (
    <section>
      <Head>
        <title>Microcredentials | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-spec-black-600'>
        <div className='px-20 text-center'>
          <Image layout="responsive" src={microHeaderImg} />
        </div>
        <h1>Microcredential Page</h1>
      </div>
      <Subfooter></Subfooter>
    </section>

  )
}

export default MicroCredentialPage