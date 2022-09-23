import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-[#1C1C1C]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;