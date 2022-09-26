import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from '../components/Navbar'
import MobileNav from '../components/MobileNav'
import Footer from '../components/Footer'

function MyDocument() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Navbar />
        <MobileNav />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}

export default MyDocument;