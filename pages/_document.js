import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-spec-black-600 p-4 md:p-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;