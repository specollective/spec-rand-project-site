export default function textContent({ children, className=""}) {
    return(
      <div className={`${className} font-medium px-44 pt-12`}>
        { children }
      </div>
    )
  }