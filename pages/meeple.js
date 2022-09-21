import Head from "next/head";
import Subfooter from "../components/sub-footer";

const MeeplePage = () => {
  return (
    <section>
      <Head>
        <title>Meeple | Sustainable Progress Equality Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Meeple</h1>
      <Subfooter></Subfooter>
    </section>
  );
};

export default MeeplePage;
