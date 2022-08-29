import '../styles/global.css'
import css from 'tw-elements/dist/css/index.min.css' 

import React, { useState, useEffect } from 'react';



export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
        };
        use();
      }, []);


      

  return <Component {...pageProps} />
}