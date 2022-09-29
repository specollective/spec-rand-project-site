import "../styles/global.css";
import css from "tw-elements/dist/css/index.min.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log("router inside myapp", router);
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
