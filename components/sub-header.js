export default function SubHeader({ children, className="" }) {
  return (
    <h3 className={`text-spec-yellow-600 text-xl tracking-wide font-medium pb-2 ${className}`}>
      { children }
    </h3>
  )
}