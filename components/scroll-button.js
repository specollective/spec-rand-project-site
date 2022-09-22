import { useEffect, useState } from 'react';
import Image from "next/image";
import scrollBtn from "../public/back-to-top.svg";

export default function ScrollButton () {
  const [visible, setVisible] = useState(false);

  const btnStyle = `
    fixed
    right-10
    top-1/3
    z-1
    cursor-pointer
  `;

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
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  },[]);

  return (
    <div className="hidden md:block">
      <btn 
        onClick={scrollToTop} 
        className={btnStyle}
        style={{ display: visible ? 'inline': 'none' }}
      >
        <Image src={scrollBtn} alt="back-to-top"/>
      </btn>
    </div>
  )
};