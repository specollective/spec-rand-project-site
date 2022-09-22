import { useState } from 'react';
import Image from "next/image";
import tempBtn from "../public/spec_logo.svg";

export default function ScrollButton () {
  
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    
    if (scrolled > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
  
  const btnStyle = `
      fixed
      right-10
      top-200
      z-1
  `

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <btn onClick={scrollToTop} className={btnStyle}>
        <Image src={tempBtn} alt="spec-logo"/>
      </btn>
    </>
  )
}