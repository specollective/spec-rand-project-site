export default function SubHeader({ children, className="" }) {
  return (
    <h3 className={`text-spec-yellow-600 tracking-wide font-medium ${className}`}>
      { children }
    </h3>
  )
}