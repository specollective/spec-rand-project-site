import "../styles/global.css";
import css from "tw-elements/dist/css/index.min.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ScrollButton from "../components/scroll-button";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollButton />
    </Layout>
  );
}
