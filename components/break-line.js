export default function BreakLine({ color="white", lineWidth="w-1/3" , lineHeight="h-1"}) {
  
  return (
    <hr 
      className={`
        my-6
        md:my-16 
        mx-auto 
        ${lineWidth}
        ${lineHeight}
        bg-${color} 
        rounded 
        border-0
      `}
    />
  )
}