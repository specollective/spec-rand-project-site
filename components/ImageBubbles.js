import Image from "next/future/image";
import { Children } from "react";

export default function ImageBubbles({ children, width=66, height=33 }) {
  const arrayChildren =  Children.toArray(children).map((element,index) => {
    const left = index * Math.floor(width * .9);
    return (
      <Image src={`${element.props.src}`} 
        key={index}
        width={width} 
        height={height} 
        layout="raw" 
        alt={element.props.alt}
        className={`absolute`}
        style={{left:`${left}px`}} 
      />
    )
  })   
  
  return (
    <div className="flex flex-row p-0 relative">
      {arrayChildren}
    </div>
  )
}


