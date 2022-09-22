import Image from "next/image";
import tempBtn from "../public/spec_logo.svg"

export default function ScrollButton () {
  
  const btnStyle = `
      fixed
      right-10
      top-200
      z-1
  `
  
  const clickAction = () => {
    alert("I AM BUTTON")
  }

  return (
    <>
      <btn onClick={clickAction} className={btnStyle}>
        <Image src={tempBtn} alt="spec-logo"/>
      </btn>
    </>
  )
}