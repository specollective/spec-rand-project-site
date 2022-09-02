export default function TextContent({ children, className=""}) {
    return(
      <div className={`${className} font-medium`}>
        { children }
      </div>
    )
  }