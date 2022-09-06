export default function GridContainer({ children, className="grid-rows-1" }) {
  return(
    <div className={`grid grid-cols-2 ${className}`}>
      { children }
    </div>
  )
}

